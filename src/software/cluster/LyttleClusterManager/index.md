---
title: LyttleClusterManager
description: Lightweight cluster manager for monitoring nodes and container state, with integrated control for LyttleNginx (reloads and logs).
---

# LyttleClusterManager

LyttleClusterManager is a small, lightweight tool to monitor cluster nodes and the containers running on them. It exposes a simple UI and API to inspect node and container status, and to trigger LyttleNginx reloads and fetch nginx logs.

## Overview

- Monitor nodes and container state (running, stopped, restarting).
- View basic resource/status and recent events.
- Trigger LyttleNginx reloads and retrieve logs via configured node endpoints.
- Intended for small clusters or development environments; minimal dependencies.

## Key features

- Node heartbeat and basic discovery
- Container listing and status
- LyttleNginx: reload and log retrieval
- Simple configuration and quick startup

## LyttleNginx integration

- Manager calls each node's configured nginx_api to request reloads and retrieve logs.
- Implement retries and safe reload semantics on the manager side if needed.
- Ensure nginx_api endpoints are reachable and secured (authentication, TLS) as appropriate.

### Managing domains, redirects and hosts

- The manager can store and apply simple domain/host and redirect entries by calling a node's nginx_api (if that endpoint supports configuration updates). If not supported, treat these entries as informational for operators.
- Keep entries minimal: host, optional root, optional redirect target.

- Behavior:
    - When supported, the manager may POST domain updates to the node's nginx_api and then trigger a reload.
    - If nginx_api does not accept config changes, use the domains list for display and operator guidance only.

## Security

- Protect nginx_api endpoints (TLS, auth).
- Restrict access to the manager API/UI using network controls or authentication.
- Verify domain/host endpoints before applying changes to avoid accidental redirect or host misconfiguration.

## Troubleshooting

- Cannot reach node: verify network, firewall, and that the node agent/nginx_api is running.
- Domain/redirect not applied: check that the node's nginx_api accepts config updates and inspect logs returned by the manager.
- Reload fails: check LyttleNginx logs via manager and verify the applied config.

## Contributing

- Fork, create a feature branch, add tests, and submit a pull request. Update docs when adding features.
