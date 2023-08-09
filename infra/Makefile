PROJECT=fullstack

up:
	docker-compose -f ./docker-compose.yml -p $(PROJECT) up -d

down:
	docker-compose -f ./docker-compose.yml -p $(PROJECT) down

logs:
	docker-compose -f ./docker-compose.yml -p $(PROJECT) logs -t -f

restart:
	docker-compose -f ./docker-compose.yaml -p $(PROJECT) restart ${ARGS}