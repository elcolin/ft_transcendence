FROM node:16

RUN apt update -y && apt upgrade -y

RUN apt-get -y install npm

RUN npm install -g @angular/cli

COPY config.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/config.sh


EXPOSE 4200

ENTRYPOINT ["/bin/bash", "-c", "/usr/local/bin/config.sh"]