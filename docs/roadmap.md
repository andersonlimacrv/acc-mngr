# Development Roadmap (Checklist)

> Status: 🔲 To Do · 🚧 In Progress · ✅ Done
> **Focus**: Clean Architecture, Go 1.21+, Zero-Cost deploy (VPS), and Multi-tenancy.

## Phase 1: Zero-Cost Infra, Testing & CI/CD Setup
*Objetivo: Preparar o terreno para desenvolvimento estruturado, focado em testes confiáveis, rigidez no CI e deploy open source/grátis.*
- [ ] Inicializar estrutura de diretórios do projeto Go (`cmd`, `internal`, `pkg`) focada na Clean Architecture.
- [ ] Configuração de Variáveis de Ambiente (`godotenv` ou `viper`).
- [ ] Configuração antecipada de Logs Estruturados Globais (`slog`).
- [ ] Setup Inicial de Testes Rápidos: `go test` cobrindo o core (Use Cases) e injeção eficiente usando Mocks (`gomock` ou `testify/mock`).
- [ ] Setup de Testes E2E: Integrar o `testcontainers-go` (Biblioteca que sobe containers Docker efêmeros do Postgres/Redis no meio do seu código de testes, validando queries e inserções na prática).
- [ ] Pipeline de Integração Contínua (CI): Configurar o **GitHub Actions** (Ex: `workflows/ci.yml`) para linters de PRs com `golangci-lint`, check de sintaxe estrita e rodar toda a suíte de testes travando Merge com código nocivo.
- [ ] Setup do `docker-compose.yaml` VPS-like: PostgreSQL e Redis unificados.
- [ ] Início de Ferramenta de Migrations de Banco de Dados (`golang-migrate` ou `goose`).

## Phase 2: Core Auth, Foundation & API Documentation
*Objetivo: O pilar de autenticação, agora completamente auto-documentado, rodando fortemente testado (unidade e httptest).*
- [ ] Implementação de Documentação "Design-First": Elaborar spec OpenAPI (`openapi.yaml`) e usar **`oapi-codegen`** para gerar a documentação web e as amarrações (`handlers`) do router automaticamente.
- [ ] `sqlc` modelagem robusta validando inputs SQL (`Select/Insert Users`).
- [ ] Definição do Domínio e das Interfaces cruciais (Users, Tokens).
- [ ] Repositório PostgreSQL e Repositório Redis (`go-redis`) implantados fisicamente.
- [ ] Usecase implementado com testes intensos validando criptografias Argon2 para o hash de senhas e bloqueio de emails vazios.
- [ ] Usecase: Login (Access JWT & Refresh Token) + Logout (Adição real do JWT na *Blocklist*).
- [ ] HTTP Transport (`chi`): Implementar as Interfaces geradas pelo `oapi-codegen` conectando aos Usecases de Auth. Proteções HTTP E2E confirmando os handlers gerados.

## Phase 3: Multi-tenancy & Application Management
*Objetivo: O isolamento absoluto para múltiplos clientes SaaS operando debaixo de um guarda-chuva.*
- [ ] DB Migrations: Tabelas vitais `apps` (Aplicações Locatárias do serviço).
- [ ] Mapeamento e Injeção do Repository isolando os locatários via Tenant IDs logicamente.
- [ ] Usecases de gerenciamento centralizado: "Criar Aplicação Client", gerando *API Keys*.
- [ ] Middleware Restruturado de 'Tenant-ID': Contextualizando as buscas baseado no token JWT de entrada `app_id`.
- [ ] Documentar e expor nova suíte de rotas de ADMIN de `/apps` no spec openapi (`openapi.yaml`).

## Phase 4: Zero-Cost Email & Social Login
*Objetivo: Expandir as possibilidades e integrações aproveitando APIs e ferramentas Free*
- [ ] Integração rápida do pacote `golang.org/x/oauth2`. Fluxo de geração de URI externo + Callback para o Google / GitHub vinculando-os ao Tenant e Perfil de usuário.
- [ ] Interface de SMPT Adapter flexível injetando disparadores fake (Mock) durante os testes de ambiente local.
- [ ] Em Produção/Dev: Criação de Worker usando *Goroutines/Channels* para que o disparo externo consumindo plataformas (como Brevo, Sendgrid em Tier Free) seja engolido sem prender o bloqueio de Request do Web Server.

## Phase 5: RBAC & Permissions
*Objetivo: Permissões nativas acopláveis nas APIs em Golang.*
- [ ] DB Schema: Introdução das relações de privilégio `roles`, `permissions` e pivotamento entre tenant, usuários e acessos.
- [ ] Definição do validador (Permission Check UseCase).
- [ ] Middleware Restruturado: Acoplamento do bloqueador de acessos via Cargo. A documentação (spec OpenAPI) deverá detalhar os retornos tipificados de Erro (HTTP 403 Forbidden).

## Phase 6: Organizations / Teams
*Objetivo: O mercado B2B, permitindo membros serem agrupados sob empresas.*
- [ ] DB Migrations: Grupos, Associações Multi-user para Múltiplas Orgs do ecossistema pai (Sub-Tenants lógicos).
- [ ] Fluxo robusto validado em testes CI sobre o escopo relacional impedindo falha grave de vazamento entre times.
- [ ] Novas chamadas `/orgs` elaboradas no schema OpenAPI e vinculadas via `oapi-codegen`.

## Phase 7: Webhooks Async (Redis Backed)
*Objetivo: Permitir automação webhook confiável livre de custos extras.*
- [ ] Migrações persistindo eventos.
- [ ] Ferramenta Base: Utilizando o próprio `go-redis` já ativo nas infraestruturas em background para alocar uma mini fila rápida baseada em **Redis Streams** ou um pub/sub simples de goroutines monitorado com sistema tolerante à queda que retenta a comunicação (Retries) a sistemas inoperantes.

## Phase 8: Gateway Seguro, CD (Continuous Deployment) & Observabilidade
*Objetivo: Securizar portas e implementar esteira ágil de entrega (CD).*
- [ ] Esteira GitHub Actions avançada: Adicionar o comando automatizado do Build Docker Multi-stage disparando o Deploy Seguro para sua VPS (CD Pipeline) usando chaves encriptadas de secrets.
- [ ] Containerização Final: Instanciar a API perante um Proxy de gateway `Traefik`.
- [ ] Integrar resolução zero-cost de SSL Auto-renovável nativo no Traefik (via Let's Encrypt bot).
- [ ] Métricas Expostas via endpoint `/metrics` nativo para Prometheus com limite do Traefik atuando como barreira de contenção pesada a IP Spams no VPS.

## Phase 9: Admin UI (Vite + React)
*Objetivo: O Dashboard Web*
- [ ] Build de Vite+React sob Typescript nativo. Configuração leve e estética (Tailwind).
- [ ] Automação Front-end: Utilizar construtores baseados no Spec OpenAPI (`openapi.yaml`) do Backend Go (e.g. pacotes tipo `Orval` ou `openapi-generator-cli`) – O frontend se interliga nas rotas automaticamente, injetando Fetchs tipados, economizando dezenas de horas humanas!
- [ ] Funcionalidades Plenas: Páginas CRUD das Applications, Users e bloqueios visuais integrando JWT Auth da central criada.