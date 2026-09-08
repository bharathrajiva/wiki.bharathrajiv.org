---
title: APISIX + Cognito Gateway (mTLS Control Plane)
description: A self-hosted Apache APISIX gateway with a custom AWS Cognito JWT/RBAC plugin and an mTLS-secured control plane.
slug: /exploratory-projects/apisix-cognito-mtls
tags: [APISIX, AWS Cognito, mTLS, API Gateway, Docker Swarm, Lua]
---

Repo: [`bharathrajiva/apisix-cognito-mtls`](https://github.com/bharathrajiva/apisix-cognito-mtls)

## The idea

Most managed API gateways hand you authentication, authorization, and TLS as checkboxes. This
project is what it looks like to build that same shape of system yourself, on your own
infrastructure: an [Apache APISIX](https://apisix.apache.org/) gateway, fronting a backend, with
AWS Cognito as the identity provider and a private mTLS mesh holding the gateway's own control
plane together.

The result is a self-contained "API Gateway Ecosystem": APISIX, its etcd config store, and its
Dashboard, deployed as a Docker Swarm stack, plus the certificate machinery and a custom plugin
that ties Cognito into the request path.

## Architecture

![API Gateway Architecture diagram](/img/apisix-cognito-mtls-architecture.png)

Two trust boundaries exist side by side, and the interesting part of this design is that they're
deliberately different shapes:

**Identity, at the edge.** A client authenticates against Cognito (sign-up, sign-in, an optional
pre-signup Lambda for shaping roles/claims) and comes away with a JWT. That token is the client's
passport for every request that follows: no certificates, no shared secrets, just a bearer token
whose signature and claims get checked on every call.

**Trust, inside the mesh.** The gateway's own moving parts, APISIX, its Dashboard, and the etcd
store that holds all routing and plugin configuration, talk to each other over mutual TLS. Every
service in that inner triangle presents a certificate signed by a private CA before it's allowed
to read or write configuration. This is the "mTLS" in the project's name: it protects the
gateway's brain, not the traffic passing through it.

Between those two boundaries sits the piece that makes them meet: a custom authentication plugin
that fetches Cognito's public signing keys, verifies the JWT on the way in, checks the caller's
Cognito group membership against what a route allows, and, if everything checks out, forwards
the request onward with the caller's identity attached as headers the backend can trust without
doing any of this work itself.

## What the plugin actually does

Cognito publishes its signing keys as a JWKS document rather than a ready-to-use public key file,
so the plugin has to reconstruct a usable key from the raw key material before it can verify
anything: a small, easy-to-get-wrong piece of cryptographic plumbing that's easy to take for
granted when a framework does it for you. Once the signature checks out, the token's group claims
decide whether the request is allowed to proceed, and a decoded, readable identity gets stamped
onto the request as headers before it reaches the backend, so downstream services see who's
calling and with what permissions, without needing to speak JWT themselves.

## Why build it this way

Cloud-managed gateways make this trade-off invisibly. Building it by hand surfaces the actual
decisions being made: how much you verify yourself versus delegate, where the trust boundary
between "inside the mesh" and "facing the internet" actually sits, and how identity gets carried
from an edge-facing token into a shape the rest of the system can just read. It's a useful
exercise in taking apart something that's normally a black box.

## Where it could go from here

The natural next layer is treating identity provisioning itself as code: the Cognito pool, its
app client, and the pre-signup Lambda currently live entirely outside this repo and are set up by
hand. Bringing that under the same kind of declarative management as the gateway configuration
would close the loop, with the whole identity-to-request path, gateway included, defined in one place.
