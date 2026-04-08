# Development Roadmap (Checklist)

> Status: 🔲 To Do · 🚧 In Progress · ✅ Done

## Phase 1: Foundation & Core Auth
- [ ] Setup Go project structure (cmd, internal, pkg) following Clean Architecture
- [ ] PostgreSQL schema: users, apps, sessions
- [ ] `sqlc` configuration and basic queries
- [ ] Domain entities and repository interfaces
- [ ] Usecase: Register user (email/password) with email verification token
- [ ] Usecase: Login (email/password) → JWT access + refresh tokens
- [ ] Usecase: Verify email, refresh token, logout (add token to blocklist)
- [ ] HTTP transport: auth endpoints (`/auth/register`, `/auth/login`, etc.)
- [ ] SMTP email adapter (mock for development, real for production)

## Phase 2: Multi‑tenancy & Application Management
- [ ] Extend schema with `apps` table and foreign keys
- [ ] Usecase: Create application (API key generation)
- [ ] Usecase: List applications for a user
- [ ] Middleware: Tenant identification (from JWT `app_id` claim or header)
- [ ] Ensure user data is scoped per application
- [ ] Admin endpoints for app management

## Phase 3: OAuth2 Social Login
- [ ] OAuth2 client interface (Google, GitHub)
- [ ] Usecase: Initiate OAuth flow → redirect to provider
- [ ] Usecase: OAuth callback → create/link user, issue JWT
- [ ] Store OAuth provider info in database

## Phase 4: RBAC & Permissions
- [ ] Schema: `roles`, `permissions`, `user_roles`
- [ ] Domain interfaces and repository implementations
- [ ] Usecase: Assign role to user, check permission
- [ ] Middleware: Enforce permissions on protected routes

## Phase 5: Organizations / Teams
- [ ] Schema: `organizations`, `organization_members`
- [ ] Usecase: Create organization, invite members, manage membership
- [ ] Scope roles/permissions to organization context

## Phase 6: Webhooks
- [ ] Schema: `webhooks` (URL, events, secret)
- [ ] Usecase: Register webhook endpoint
- [ ] Background worker to deliver events (signup, login, role change) with retries

## Phase 7: Observability & Production Readiness
- [ ] Structured logging with `slog`
- [ ] Prometheus metrics endpoint (`/metrics`)
- [ ] OpenTelemetry tracing (export to Jaeger/OTLP)
- [ ] Redis integration for session store and token blocklist
- [ ] Traefik configuration (TLS, rate limiting, CORS) for production

## Phase 8: Admin UI (Vite + React)
- [ ] Setup Vite + React + TypeScript project
- [ ] Login page consuming acc‑mngr API
- [ ] Dashboard: list applications, users, roles
- [ ] Forms to create applications, invite users, manage roles
- [ ] Organization management views