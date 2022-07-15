#!/bin/bash
npm run build
npm update -y
npm upgrade -y
git add .
echo "Message to commit:"
read message
git commit -am "$message"
git push

cd ~/Documentos/

ssh server@192.168.100.40 \
  'cd /home/server/cursoJS_API_REST/ &&' \
  'git pull && npm i &&' \
  'pm2 restart api && echo <senha> | ' \
  'sudo -S systemctl restart nginx'
