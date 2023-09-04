FROM node:14

RUN apt update -y && apt upgrade -y

RUN apt-get -y install npm

RUN npm install -g @angular/cli

COPY config.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/config.sh

ENTRYPOINT ["/bin/bash", "-c", "/usr/local/bin/config.sh"]