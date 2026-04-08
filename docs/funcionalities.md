### Proposta
Criar uma alternativa mais simples (porém profissional) a serviços como **Clerk** ou **Auth0**, utilizando **Clean Architecture / Hexagonal** em Go e um frontend em **Vite + React**. A arquitetura descrita reflete exatamente os padrões necessários para um **Auth‑as‑a‑Service** multi‑tenant, escalável e com boas práticas de engenharia sênior.

🔥 Auth central para múltiplos SaaS.

---

### 1. Funcionalidades essenciais de um Clerk/Auth0
| Recurso típico (Clerk/Auth0)       | Cobertura no README                                                              |
|------------------------------------|----------------------------------------------------------------------------------|
| Autenticação por e-mail/senha      | ✅ `Usecases → auth`, `EmailAdapter (SMTP)` (verificação de e‑mail implícita)     |
| Login social (OAuth)               | ✅ `OAuthAdapter → Google, GitHub`                                                |
| Tokens JWT seguros                 | ✅ `JWT token management`, `Redis → blocklist` para revogação                     |
| Multi‑tenancy (por aplicação)      | ✅ `Multi-tenant support per application`, usecase `app`                          |
| Sessões centralizadas              | ✅ `Redis → sessions`                                                             |
| Gerenciamento de contas de usuário | ✅ `Usecases → account`                                                           |
| Webhooks para eventos              | ✅ `Usecases → webhook`                                                           |
| Observabilidade (métricas, traces) | ✅ `Prometheus /metrics`, `OpenTelemetry`, `slog` estruturado                     |
| API pronta para consumo externo    | ✅ `Transport layer (chi router)`, `API Gateway (Traefik)`                        |
| Interface de usuário (UI) embutida | ✅ `Clients → Vite SPA` – frontend em React que consumirá a API Go                |
| Documentação Automática da API     | ✅ `OpenAPI v3` (`oapi-codegen` com design-first) acoplado às rotas backend        |
| CI/CD e Qualidade Automatizada     | ✅ `GitHub Actions` com `golangci-lint` e execução de testes (unidade e integrados)|

---

### 2. Arquitetura Clean/Hexagonal – exatamente como exigido
O diagrama Mermaid do README é um **manifesto de Clean Architecture**:

- **Camada de Transporte** (`chi router`) isola a API HTTP.
- **Casos de Uso** contêm a lógica de negócio (`auth`, `account`, `app`, `webhook`).
- **Domínio** define entidades e **interfaces** (contratos).
- **Infraestrutura** implementa essas interfaces com `pgx`, `sqlc`, Redis, SMTP e OAuth.

> ✅ **Inversão de dependência**: o núcleo do domínio **não conhece** detalhes externos – exatamente o que se espera de uma implementação sênior.

---

### 3. Escalabilidade e boas práticas sênior
- **PostgreSQL + sqlc**: queries type‑safe e performáticas, preparadas para migrações.
- **Redis** como camada de cache e controle de sessões/bloqueio de tokens – fundamental para escalar horizontalmente. `Implementação futura`.
- **Traefik** como API Gateway com TLS, rate‑limit e CORS – pronto para produção. `Implementação futura`.
- **Observabilidade** nativa (`Prometheus`, `OpenTelemetry`) – para monitorar um serviço central de autenticação. `Implementação futura`.
- **Documentação orientada a checklist** (`docs/roadmap.md`) – rastrear o progresso do desenvolvimento.

---

### 4. Funcionalidades
- **RBAC / Permissões** (ex.: funções de usuário dentro de uma aplicação).  
- **Organizações / Equipes** (comum em Clerk/Auth0).  
- **SDKs leves para FastAPI e React** (o README não precisa detalhar isso agora).

---

