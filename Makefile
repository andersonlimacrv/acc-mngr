.PHONY: dev test lint sqlc migrate-up migrate-down docker-up docker-down

dev:
	go run cmd/api/main.go

test:
	go test -v -cover ./...

lint:
	golangci-lint run ./...

sqlc:
	sqlc generate

migrate-up:
	migrate -path db/migrations -database "postgresql://user:pass@localhost:5432/accmngr?sslmode=disable" up

migrate-down:
	migrate -path db/migrations -database "postgresql://user:pass@localhost:5432/accmngr?sslmode=disable" down

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down
