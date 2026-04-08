PROJECT_NAME=acc-mngr
FRONTEND_BUILD_DIR=frontend-output
NGINX_HTML_DIR=/var/www/$(PROJECT_NAME)/html
BACKUP_DIR=./backups
# Reusable base command for SQL
PSQL_CMD = $(DOCKER_COMPOSE) exec -T db sh -c 'PGPASSWORD=$$POSTGRES_PASSWORD psql -U $$POSTGRES_USER $$POSTGRES_DB

test-make:
	echo "Project: $(PROJECT_NAME) - ✅ Deploy completed!"

# BASIC COMMANDS
up:
	$(DOCKER_COMPOSE) up -d --build

down:
	$(DOCKER_COMPOSE) down

reborn:
	$(DOCKER_COMPOSE) down && docker-compose build --no-cache && docker-compose up -d
	
logs:
	$(DOCKER_COMPOSE) logs -f

back-logs:
	$(DOCKER_COMPOSE) logs -f backend

front-logs:
	$(DOCKER_COMPOSE) logs -f frontend

db-logs: 
	$(DOCKER_COMPOSE) logs -f db

restart:
	$(DOCKER_COMPOSE) down && $(DOCKER_COMPOSE) up -d --build