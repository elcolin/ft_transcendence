all: reload

volume:
	mkdir -p ./volume/angular/
stop:
	docker-compose -f docker-compose.yml down
clean:
	docker system prune -af
fclean: stop clean
	rm -rf ./volume/angular/
	docker volume rm -f transcendence_angular

reload:
	docker-compose -f docker-compose.yml up -d --build
re: fclean all
.PHONY: domain stop clean reload fclean all