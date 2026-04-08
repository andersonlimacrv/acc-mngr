# Guia de Comandos do Makefile

O `Makefile` deste projeto tem como objetivo principal automatizar ciclos chatos e demorados do desenvolvimento da API Go, padronizando ações como testes, checagens de qualidade e atualizações do banco de dados na sua máquina.

Abaixo, detalhamos cada comando. Você sempre pode executá-los no terminal usando `make [comando]`.

## 🛠 Comandos de Execução

| Comando | Descrição Geral |
|---------|-------------|
| `make dev` | Inicializa a aplicação (ex: `go run cmd/api/main.go`) de maneira rápida no terminal. Útil para debugar alterações instantâneas sem subir containers pesados isolando o executável. |
| `make docker-up` | Levanta todos os serviços de suporte declarados (e.g. PostgreSQL, Redis) no seu ambiente de background usando o Docker Compose. Essencial executar no início do dia. |
| `make docker-down` | Desliga completamente e limpa os containers ativos iniciados no comando acima. |

## ✅ Qualidade, Testes e CI Local

Antes de fazer o *push* para o GitHub e rodar no **GitHub Actions (CI)**, você deve rodar estes caras localmente:

| Comando | Descrição Geral |
|---------|-------------|
| `make test` | Roda toda a suíte de testes (`go test`) atrelados, incluindo os units, mocks, e testes integrados via E2E (Testcontainers), reportando se algum caso de uso falhou. |
| `make lint` | Verifica a "limpeza", padronização e potenciais pequenos *bugs* semióticos em todo o código Go, invocando o `golangci-lint` e reportando quebra de qualidade. Fundamental estar "verde". |

## 🗄️ Banco de Dados e Geração de Códigos

| Comando | Descrição Geral |
|---------|-------------|
| `make sqlc` | Usa a ferramenta limpa do [sqlc.dev](https://sqlc.dev/). Lê os arquivos SQL na pasta, compila, e automaticamente gera ou renova os arquivos Go da camada de Repositórios usando structs fortemente tipados ao banco. |
| `make migrate-up` | Executa as novas *Migrations* na pasta de db sobre o seu PostgreSQL, atualizando tabelas, views e chaves. |
| `make migrate-down` | **Reverte em 1 estado (faz roll-back)** das tabelas do banco em uso. (Utilizado quando uma migration falhou ou não gostou do desenvolvimento atual e se deseja resetar pro passo anterior). |
