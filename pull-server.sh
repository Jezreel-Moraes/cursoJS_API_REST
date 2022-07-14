#!/bin/bash
npm run build
npm update -y
npm upgrade -y
git add .

echo "Message to commit:"
read message
git commit -am "$message"
git push
ssh server@192.168.100.40 \
  'git -C /home/server/cursoJS_API_REST/' \
  'pull &&' \
  'npm -C /home/server/cursoJS_API_REST/ i &&' \
  'pm2 restart api && sudo systemctl restart nginx'
