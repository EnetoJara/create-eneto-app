npm run build;
npm run build:dev;
rm -rf production/*;
mv build production/client;
mv dist production/server;
