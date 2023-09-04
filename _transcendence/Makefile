all: reload

#volume:
#	mkdir -p /home/ecolin/data/wordpress
#	mkdir -p /home/ecolin/data/mariadb
stop:
	docker-compose -f docker-compose.yml down
clean:
	docker system prune -af
#fclean: start stop clean
#	rm -rf /home/ecolin/data/mariadb/*
#	rm -rf /home/ecolin/data/wordpress/*
#	docker volume rm -f srcs_mariadb
#	docker volume rm -f srcs_wordpress

reload:
	docker-compose -f docker-compose.yml up -d --build
re: fclean all
.PHONY: domain stop clean reload fclean all