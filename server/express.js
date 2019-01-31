import Express from 'express';
import BodyParser from 'body-parser';
import expressStaticGzip from 'express-static-gzip';
import testRoute from './routes/test.routes';
import aux from '../../config/webpack.config';

const server = Express();
const { log } = console;

if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors');
  const webpack = require('webpack');
  server.use(cors());
  const config = aux(process.env.NODE_ENV);
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer,
  );
  const webpackHotMiddleware = require('webpack-hot-middleware')(
    compiler,
    config.devServer,
  );
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddleware);
}

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
