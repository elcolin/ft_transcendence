FROM node:16

RUN apt update -y && apt upgrade -y

RUN apt-get -y install npm
RUN apt-get -y install yarn
RUN npm install -g @nestjs/cli

COPY config.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/config.sh

EXPOSE 3000
EXPOSE 3333

ENTRYPOINT ["/bin/bash", "-c", "/usr/local/bin/config.sh"]