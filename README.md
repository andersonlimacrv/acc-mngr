# acc-mngr

![Go Version](https://img.shields.io/badge/Go-1.21+-00ADD8?logo=go)
![License](https://img.shields.io/badge/license-MIT-blue)
[![Clean Architecture](https://img.shields.io/badge/Architecture-Clean%20%2F%20Hexagonal-brightgreen)](#architecture)

**Centralized multi-tenant authentication service built with Go.**  
A simpler, professional alternative to Clerk or Auth0, designed for SaaS applications (React + FastAPI) with single sign‑on, RBAC, and organizations.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Roadmap](#roadmap)
- [Tech Stack](#tech-stack)
- [Documentation](#documentation)

---

## 🚀 Overview

`acc-mngr` is a standalone authentication service that provides:

- User registration, login, and email verification  
- JWT issuance, validation, and revocation (blocklist)  
- OAuth2 integration (Google, GitHub)  
- Multi‑tenancy – isolated user bases per application  
- Role‑Based Access Control (RBAC) – assign roles to users within an app  
- Organizations / Teams – group users and manage permissions collectively  
- Webhooks for event‑driven integrations  
- Ready‑to‑use admin dashboard (Vite + React)

---

## ✨ Features

| Category                 | Implementation Details                                                                 |
|--------------------------|----------------------------------------------------------------------------------------|
| **Email/Password Auth**  | Secure password hashing (Argon2), email verification via SMTP                           |
| **Social Login**         | OAuth2 providers: Google, GitHub (extensible)                                           |
| **JWT Management**       | Short‑lived access tokens, refresh tokens, Redis‑backed blocklist for instant revocation |
| **Multi‑tenancy**        | Applications (`app`) own their users and settings; tenant isolation at database level   |
| **Sessions**             | Centralized session store in Redis (optional, scalable)                                 |
| **RBAC**                 | Define roles and permissions per application                                            |
| **Organizations**        | Group users into teams/orgs with shared membership                                      |
| **Webhooks**             | Outgoing HTTP calls on user events (signup, login, role change)                         |
| **Observability**        | Structured logging (`slog`), Prometheus metrics, OpenTelemetry tracing                  |
| **Admin UI**             | React SPA to manage applications, users, roles, and organizations                       |

---

## 🏗 Architecture

The project strictly follows **Clean Architecture / Hexagonal** principles, ensuring testability, maintainability, and independence from frameworks.

```mermaid
flowchart TD

  subgraph Clients [Clients]
    Vite[Vite SPA]
    FastAPI[FastAPI apps]
  end

  Clients --> GW[API Gateway\nTraefik — TLS · rate limit · CORS]

  subgraph AccMngr [acc-mngr — Go]
    GW --> Transport[Transport layer\nchi router · middleware chain]
    Transport --> UC[Usecases\nauth · account · app · webhook · rbac · org]
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

  subgraph Observability [Observability]
    Logs[Structured slog]
    Metrics[Prometheus /metrics]
    Traces[OpenTelemetry]
  end

  AccMngr -.-> Observability
```

**Key architectural decisions:**
- **Domain layer** defines business entities (`User`, `App`, `Role`, `Organization`) and repository interfaces.
- **Use cases** orchestrate the flow (e.g., `RegisterUser`, `LoginWithOAuth`, `AssignRole`).
- **Infrastructure** adapters implement interfaces using PostgreSQL (`sqlc`), Redis, SMTP, and OAuth2 clients.
- **Transport** exposes REST API via `chi` with middleware for logging, auth, and rate limiting.


## 🛠 Tech Stack

| Layer          | Technology                                                               |
|----------------|--------------------------------------------------------------------------|
| **Backend**    | Go 1.21+, [chi](https://github.com/go-chi/chi) router, [sqlc](https://sqlc.dev/), [pgx](https://github.com/jackc/pgx) |
| **Database**   | PostgreSQL                                                               |
| **Cache**      | Redis (sessions, blocklist, rate limiting)                               |
| **Auth**       | JWT (access + refresh tokens), OAuth2 (Google, GitHub)                    |
| **Email**      | SMTP (e.g., SendGrid, Mailgun)                                           |
| **Gateway**    | Traefik (TLS termination, CORS, rate limiting)                           |
| **Frontend**   | Vite + React + TypeScript                                                |
| **Observability** | `slog`, Prometheus, OpenTelemetry                                      |
| **Container**  | Docker, Docker Compose                                                   |

---

## 📚 Documentation

- **[Roadmap / Checklist](./docs/roadmap.md)** – granular tasks for implementation.


