---
title: LyttleNginx
description: Memory-only, database-driven Nginx runtime for clustered deployments.
---

# LyttleNginx

LyttleNginx is a memory-only Nginx instance that loads configuration and assets from a central database. It's intended for clustered deployments where nodes must share config and content without a shared filesystem.

## Overview

At startup or reload, instances pull vhosts, upstreams, TLS certs, and static assets from the database and apply them in-memory. This enables consistent, centralized control via LyttleClusterManager or other tooling.

## Key features

- In-memory Nginx runtime (no persistent filesystem)
- DB-backed configuration and assets
- Small HTTP API for controlled reloads and health checks
- Designed for coordinated cluster updates

## Quick install

1. Deploy a supported database (Postgres/MySQL/other).
2. Run the LyttleNginx Docker image and set DB credentials via env vars.
3. Ensure network access between containers and the DB/management endpoints.

## Configuration & API

- Store all runtime config in the database. Use a manager or scripts to modify entries.
- API endpoints (protect these with API keys/network rules):
    - POST /reload — fetch and apply latest DB config
    - GET /health — basic status

## Integration with LyttleClusterManager

Typical flow: manager writes config to DB, then triggers /reload on instances (rolling or coordinated), allowing in-memory updates without shared disks.

## Security & best practices

- Restrict management API access.
- Store and rotate TLS material securely in the DB.
- Monitor memory usage; large assets increase RAM needs.
- Use rolling updates for cluster-wide changes.

## Troubleshooting

- Reload failures: check DB connectivity and instance logs.
- SSL issues: verify DB certificate entries.
- High memory use: offload large static assets to object storage.

## See also

- LyttleClusterManager
- Implementation samples in the repo

## Disclaimer

Independent project — follow your org's policies when deploying.
