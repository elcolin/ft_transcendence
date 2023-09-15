#!/bin/bash
chown -R root:root /var/www/nestjs
chmod -R 755 /var/www/nestjs
cd /var/www/nestjs
#yarn init -y
#yarn add @nestjs/core @nestjs/common
nest new backend --package-manager yarn
cd backend
nest start --watch