---
title: Content System
description: The publishing model for keeping Bharath's wiki easy to update, search, and expand.
slug: engineeringnexus/content-system
tags: [Wiki, Documentation, Search, Content Architecture]
---

This page defines the repeatable system for growing the wiki without turning it into a
folder of disconnected notes.

## Page Types

| Type | Purpose | Best Format |
| --- | --- | --- |
| Track page | A durable domain such as AI architecture, platform engineering, or hardware | Overview, topic list, flagship links |
| Project page | A complete system or build | Architecture layers, diagrams, decisions, runbooks |
| Build log | A dated implementation journal | Context, attempt, failure, fix, learning |
| Decision record | A durable architecture choice | Context, constraints, options, decision, consequences |
| Visual reference | A diagram-first explanation | Mermaid, Excalidraw export, SVG/PNG, notes |

## Frontmatter Standard

Use consistent metadata on every substantial page. This improves search, navigation,
future automation, and content audits.

```yaml
title: Private Compute Cluster
description: OpenStack, Ceph, KVM/QEMU, and SDN architecture notes.
slug: engineeringnexus/projects/private-compute-cluster
tags: [OpenStack, Ceph, SDN, KVM, Platform Engineering]
status: active
level: advanced
updated: 2026-05-24
```

## Writing Standard

Every strong page should make the engineering visible:

1. Define the system or idea in plain language.
2. State the constraints and why they matter.
3. Show the architecture with at least one visual representation.
4. Explain tradeoffs, decisions, and failure modes.
5. Capture what changed after implementation.

## Visual Standard

Use the simplest visual that communicates the system accurately.

| Need | Use |
| --- | --- |
| Fast flow or dependency map | Mermaid |
| Rough system exploration | Excalidraw |
| Portfolio-grade reference | SVG or PNG |
| Tradeoff comparison | Table or decision matrix |
| Durable architecture choice | Decision record |

## Search Tags

Prefer durable tags over temporary moods. Good tags include technologies, domains,
patterns, and outcomes:

- `OpenStack`, `Ceph`, `KVM`, `QEMU`, `SDN`
- `AI Architecture`, `Agents`, `RAG`, `Evaluation`
- `Platform Engineering`, `SRE`, `Kubernetes`, `CI/CD`
- `Drones`, `IoT`, `Embedded Linux`, `Edge Computing`
- `Algorithms`, `CAT`, `Quant`, `DILR`, `VARC`
