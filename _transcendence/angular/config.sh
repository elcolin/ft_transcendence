#!/bin/bash
chown -R root:root /var/www/angular
chmod -R 777 /var/www/angular
cd /var/www/angular/app/
ng serve