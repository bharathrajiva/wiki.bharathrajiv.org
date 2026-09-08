---
title: APISIX + Cognito Gateway (mTLS Control Plane)
description: A self-hosted Apache APISIX gateway stack with a custom AWS Cognito JWT/RBAC plugin and mTLS-secured control plane, deployed via Docker Swarm.
slug: /exploratory-projects/apisix-cognito-mtls
tags: [APISIX, AWS Cognito, mTLS, API Gateway, Docker Swarm, Lua]
---

Repo: [`bharathrajiva/apisix-cognito-mtls`](https://github.com/bharathrajiva/apisix-cognito-mtls) ·
Apache-2.0 · Status: **closed** (finished, single-purpose deployment kit — not an actively
maintained framework)

## What this actually is

`apisix-cognito-mtls` is not an application — it's an **infrastructure-automation bundle** for
standing up a self-hosted [Apache APISIX](https://apisix.apache.org/) API gateway on Docker Swarm,
pre-wired with:

- A custom APISIX authentication plugin (**`bauth`**) that validates AWS Cognito-issued JWTs and
  enforces Cognito-group-based RBAC.
- A custom **`redirect`** plugin for HTTP→HTTPS upgrades and URI rewriting.
- **mTLS between the control-plane components** — etcd, APISIX, and the APISIX Dashboard — not
  client-facing mTLS.
- Shell scripts (`main.sh`, `sync_db.sh`, `sync_routes.sh`) that generate certs, deploy the Swarm
  stack, register the public TLS cert, and sync etcd snapshots/routes between a local and remote
  server.

The most important thing to get right about the name: **"mTLS" here refers to internal
cluster security, not client authentication.** End users never present a client certificate —
they authenticate with a Cognito JWT bearer token. This is a common and reasonable split-trust
pattern (mTLS for cluster-internal trust, OIDC/JWT for user identity), but the project name alone
oversells the client-facing security model.

## Architecture

### Control plane — secured by mTLS

`etcd` (bitnami/etcd:3.5.7) is APISIX's config store, launched with `ETCD_CLIENT_CERT_AUTH=true`
and a trusted CA file — it requires any client to present a certificate signed by the project's
own self-generated CA. Both **APISIX** and the **APISIX Dashboard** connect to etcd over HTTPS,
each presenting a client cert (`apisix.crt/key`, `apisix-dashboard.crt/key`) signed by that same
CA (`ca.crt/key`). This is the actual mTLS the project name refers to.

### Data plane — client-facing, JWT-based

Public traffic hits APISIX directly (port 9443 HTTPS / 9080 HTTP, upgraded via the `redirect`
plugin). The TLS certificate served here is a normal **Let's Encrypt** server cert — there is no
`client.ca` configured on the SSL object and no client-certificate verification anywhere in the
public listener path. Authentication and authorization are handled entirely by the `bauth` plugin:

1. Client obtains a Cognito access token out-of-band (Hosted UI / SDK — not part of this repo).
2. Client calls APISIX with `Authorization: Bearer <JWT>` (header, query param, or cookie, all
   configurable).
3. `bauth.lua` (`type = 'auth'`, `priority = 9000`) runs in the `rewrite` phase: fetches Cognito's
   JWKS (`https://cognito-idp.{region}.amazonaws.com/{pool_id}/.well-known/jwks.json`), caches it
   in a shared-memory dict (`bcache`, default 86400s TTL), reconstructs a PEM RSA public key from
   the JWK's `n`/`e` via a **hand-rolled ASN.1/DER encoder**, and verifies the JWT signature with
   `resty.jwt`.
4. It extracts `cognito:groups` from the JWT payload and checks membership against the route's
   configured `groups` list (default `["Admin"]`) — this is the RBAC layer.
5. On success it injects `X-UserProfile` (full decoded JWT payload), `X-UserName`, and `X-Groups`
   headers before proxying upstream.
6. On any failure (missing token, bad signature, JWKS lookup failure, disallowed group) it returns
   401 with a JSON body.

The architecture diagram in the repo (`image.png`) also shows a frontend, Route53 DNS, the Cognito
Hosted UI, and a Cognito Pre-Signup Lambda trigger — **none of that layer's code exists in this
repository.** This repo covers only the gateway/plugin/cert-automation layer.

## Key components

| File | Role |
| --- | --- |
| `apiGateway.yml` | Docker Swarm stack: `etcd` (bitnami/etcd:3.5.7), `apisix` (apache/apisix:3.7.0-debian), `apisix-dashboard` (apache/apisix-dashboard:latest, unpinned). Plugins are bind-mounted raw Lua files over the stock image — no custom image build. |
| `config.yaml` | APISIX config override: etcd as config provider, Admin API with a static key, etcd mTLS cert paths, and the `bauth`/`redirect` plugin allowlist entries. |
| `conf.yaml` | Dashboard config: HTTPS listener, dashboard's own etcd mTLS certs, session JWT secret, and dashboard login accounts. |
| `schema.json` | Dashboard's plugin-schema catalog (~7,255 lines) with hand-injected schema blocks for `bauth`/`redirect` so the UI can render config forms for them. Kept in sync by hand, no generator. |
| `bauth.lua` | The custom Cognito JWT + RBAC plugin (464 lines). Has both a route-level `schema` and a `consumer_schema`. |
| `redirect.lua` | Custom/vendored redirect plugin (248 lines): exact URI redirect, regex rewrite, HTTP→HTTPS upgrade. |
| `main.sh` | Interactive deploy script: prompts for AWS region/Cognito pool ID/domain, patches `bauth.lua` defaults, generates the CA + leaf certs, deploys the stack, registers the SSL cert, writes credentials to disk. |
| `sync_db.sh` | etcd snapshot backup/restore/migration between a local and remote host over SSH. |
| `sync_routes.sh` | Pulls routes from the local Admin API and re-PUTs them to a remote instance — a blunt, non-idempotent overwrite-by-ID sync. |

## Tech stack

- **APISIX** `3.7.0-debian` (pinned) · **APISIX Dashboard** `latest` (unpinned — a reproducibility
  risk)
- **etcd** `3.5.7` (pinned)
- **Plugin runtime**: Lua/LuaJIT (OpenResty, as embedded in APISIX), `lua-resty-http`,
  `lua-resty-jwt` — both ship with stock APISIX images
- **Certs**: OpenSSL CLI (2048-bit RSA, self-signed CA, 365-day validity) for the internal PKI;
  externally-provisioned **Let's Encrypt** certs for the public domain
- **Orchestration**: Docker Compose file v3.7, deployed via `docker stack deploy` (Swarm)
- **Scripting**: Bash, `jq`, `yq`, `curl`, `ssh`/`scp`

## Setup

1. Prerequisites: Docker with Swarm already initialized (`docker swarm init` — not automated
   here), OpenSSL, and a pre-existing Let's Encrypt cert for the domain at
   `/etc/letsencrypt/live/{domain}/`.
2. A **Cognito User Pool + App Client must already exist in AWS** — this repo does zero AWS
   provisioning (no Terraform/CloudFormation/CDK anywhere in it).
3. `chmod +x main.sh && sudo ./main.sh`, choose "fresh setup", supply the AWS region, Cognito pool
   ID, and domain name.
4. The script patches `bauth.lua`'s schema defaults, generates the CA and service certs into
   `./mtls-apisix-etcd/`, copies in the Let's Encrypt cert, deploys the stack under the name
   `swarm` (services become `swarm_apisix`, `swarm_etcd`, `swarm_apisix-dashboard`), registers the
   SSL cert via the Admin API, and writes `apiGateway-credentials.txt`.
5. Routes (and their `bauth` plugin config — `groups`, header/query/cookie names, cache TTL) are
   added afterward via ad hoc Admin API `curl` calls or the Dashboard UI on port 7777.
6. Redeployment: re-run `main.sh`, answer "no" to fresh setup — it tears down and redeploys the
   three services in place (and refuses to proceed if `bauth.lua` still has the placeholder
   `aws-region-id`, forcing a fresh setup instead).

## Design decisions worth knowing

- **Bespoke JWT verification instead of a stock plugin.** APISIX ships built-in `jwt-auth` and
  `openid-connect` plugins (both are even enabled in the Dashboard's plugin list here), but the
  author wrote `bauth` from scratch — including a hand-rolled ASN.1/DER encoder to turn a JWKS
  RSA key's raw `n`/`e` into a PEM public key for `resty.jwt`, since the OpenResty/lua-resty-jwt
  ecosystem doesn't have native JWK→PEM conversion. This folds JWT verification and Cognito-group
  RBAC into a single plugin rather than composing two, at the cost of non-trivial hand-written
  crypto-adjacent code with no accompanying tests.
- **RBAC is coarse-grained**: authorization is just "does the token's `cognito:groups` claim
  intersect the route's allow-listed groups" (default `["Admin"]`), plus a simple
  method+path-regex `white_list` that bypasses auth entirely for specific routes.
- **Plugins are bind-mounted, not baked into an image.** Simplest possible packaging, but plugin
  code isn't versioned/immutable inside the container, and a `docker service update` alone won't
  pick up Lua changes without a full redeploy.
- **`docker stack deploy` (Swarm) chosen over plain Compose**, despite the stack being effectively
  single-node with no replica scaling and no Swarm-native secrets/configs use (certs are plain
  bind-mounted files) — buys rolling-update semantics that aren't otherwise leveraged.
- **No IaC and no route GitOps**: Cognito resources are entirely externally provisioned and
  undocumented in terms of required App Client settings; routes have no declarative source of
  truth — `sync_routes.sh` is a manual, non-idempotent full overwrite.

## Security considerations

These are real findings from the checked-in configuration, not hypothetical risks — worth fixing
before any reuse of this repo as a template:

- **Secrets are committed to source control**: `config.yaml` has a static Admin API key
  (`admin_key: SuperDuperAPIKey`), and `conf.yaml` has a placeholder dashboard session secret
  (`secret: secret`) plus plaintext dashboard login passwords. `main.sh` also writes an
  unencrypted `apiGateway-credentials.txt` to disk on every deploy.
- **Dashboard `allow_list` is effectively disabled**: it includes `0.0.0.0/0` alongside
  `127.0.0.1`, contradicting the file's own comment that access should be localhost-only.
- **No `.gitignore` coverage for cert material or credentials files** — only Lua build artifacts
  are ignored.

## Current status

Per the README ("Project status: Closed") and a clean 13-commit history spanning Oct 16–30, 2024
(init → docs → architecture diagram → compose → custom plugin → deploy scripts → etcd sync →
fixes → redirect plugin → final README), this reads as a **finished, working, single-purpose
deployment kit** the author considers done — built for one specific personal deployment
(hardcoded stack name `swarm`, hardcoded remote path, `ubuntu` SSH user), not a generalized
reusable template.

## Possible next steps

- Rotate every committed default secret (Admin API key, dashboard JWT secret, dashboard
  passwords) and template them via environment variables instead.
- Tighten the dashboard `allow_list` to match its own documented intent.
- Consider replacing `bauth`'s hand-rolled JWT verification with APISIX's stock
  `openid-connect` plugin configured against the Cognito user pool, keeping only the
  groups-RBAC and header-injection logic custom.
- Add Terraform/CDK for the Cognito User Pool + App Client so the identity layer isn't entirely
  manual and undocumented.
