#!/bin/bash
chown -R root:root /var/www/angular
chmod -R 755 /var/www/angular
cd /var/www/angular/app
npm install
npm install tailwindcss --save-dev
ng serve --host 0.0.0.0