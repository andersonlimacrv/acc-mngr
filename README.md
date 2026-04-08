# acc-mngr

Centralized multi-tenant authentication service built with Go.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Checklist](#checklist)
- [Documentation](#documentation)

---

## Overview

acc-mngr is an authentication service responsible for:

- User authentication
- JWT token management
- OAuth integration
- Multi-tenant support per application

---

## Architecture
```mermaid
flowchart TD

  subgraph Clients [Clients]
    Vite[Vite SPA]
    FastAPI[FastAPI apps]
  end

  Clients --> GW[API Gateway\nTraefik — TLS · rate limit · CORS]

  subgraph AccMngr [acc-mngr — Go]
    GW --> Transport[Transport layer\nchi router · middleware chain]
    Transport --> UC[Usecases\nauth · account · app · webhook]
    UC --> Domain[Domain\nentities · interfaces]

    subgraph Infra [Infrastructure — implements Domain interfaces]
      PGRepo[Postgres repo\npgx · sqlc]
      RedisRepo[Redis\nsessions · blocklist]
      OAuthAdapter[OAuth adapter\nGoogle · GitHub]
      EmailAdapter[Email\nSMTP]
    end

    Domain --> PGRepo
    Domain --> RedisRepo
    Domain --> OAuthAdapter
    Domain --> EmailAdapter
  end

  PGRepo --> DB[(PostgreSQL)]
  RedisRepo --> Cache[(Redis)]
  OAuthAdapter --> OAuth[Google / GitHub]
  EmailAdapter --> SMTP[SMTP]

  subgraph Observability [Observabilidade]
    Logs[slog estruturado]
    Metrics[Prometheus /metrics]
    Traces[OpenTelemetry]
  end

  AccMngr -.-> Observability
```

## Checklist

* [Development Checklist](./docs/checklist.md)



