npm run build;
npm run build:dev;
mkdir -p production
rm -rf production/*;
mv build production/build;
mv dist production/server;
PORT=3333 NODE_ENV=production node production/server/server-bundle.js
