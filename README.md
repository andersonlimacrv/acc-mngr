# acc-mngr

Centralized multi-tenant authentication service built with Go.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Running](#running)
- [Checklist](#checklist)
- [Documentation](#documentation)
- [License](#license)

---

## Overview

acc-mngr is an authentication service responsible for:

- User authentication
- JWT token management
- OAuth integration
- Multi-tenant support per application

---

## Architecture

### Flow Diagram

```mermaid
flowchart TD

Client[Vite Client] --> API[Go API]

subgraph Server [Auth Service]
    API --> HTTP[HTTP Layer]
    HTTP --> Middleware[Middleware]
    Middleware --> Usecase[Usecase Layer]
    Usecase --> Domain[Domain Layer]
end

Domain --> Repo[Repository]
Domain --> Provider[Providers]

Repo --> DB[(Postgres)]
Provider --> OAuth[OAuth Providers]
Provider --> Email[SMTP]

Middleware --> JWT[JWT Validation]
JWT --> Domain
````

Full documentation:

* [Architecture](./docs/architecture.md)
* [Diagram (Mermaid)](./docs/diagram.mmd)

---

## Project Structure

```bash
acc-mngr/
├── client/
├── server/
├── docs/
│   ├── architecture.md
│   ├── diagram.mmd
│   └── checklist.md
├── docker-compose.yaml
├── Makefile
└── README.md
```

---

## Running

### Docker

```bash
docker-compose up --build
```

### Backend

```bash
cd server
go run cmd/api/main.go
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Checklist

* [Development Checklist](./docs/checklist.md)

---

## Documentation

* [Architecture](./docs/architecture.md)
* [Diagram (Mermaid)](./docs/diagram.mmd)

---

## License

See `LICENSE`

```

