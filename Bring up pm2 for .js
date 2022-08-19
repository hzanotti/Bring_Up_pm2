To bring up pm2 for .js

$ cd ../../var/www/sites/dev.crowdportal.com/public_html
$ pm2 start app.js
$ pm2 startup
$ sudo env PATH=$PATH:/home/centos/.nvm/versions/node/v16.0.0/bin /home/centos/.nvm/versions/node/v16.0.0/lib/node_modules/pm2/bin/pm2 startup systemd -u centos --hp /home/centos
$ pm2 save
