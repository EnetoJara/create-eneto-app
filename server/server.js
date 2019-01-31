import '@babel/polyfill';
import Express from 'express';
import BodyParser from 'body-parser';
import expressStaticGzip from 'express-static-gzip';
import testRoute from './routes/test.routes';

const server = Express();
const { log } = console;
server.use(BodyParser.json());
server.use('/api', testRoute);
server.use(expressStaticGzip('build', { enabledBrotli: true }));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  log(`
		server running or some shit
		Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}
		`);
});
