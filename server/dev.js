import mongoose from "mongoose";
import webpack from "webpack";
import middle from "webpack-dev-middleware";
import Express from "./express";
import aux from "../config/webpack.config";
import serverAux from "../config/webpack.dev-server";
import config from "../config/config";

const { log, } = console;

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
	useCreateIndex: true,
	useNewUrlParser: true,
});
mongoose.connection.on("error", () => {
	throw new Error(`unable to connect to database ${ config.mongoUri }`);
});
mongoose.connection.on("open", () => {
	log("DB Up and running");
});

const server = Express();
const auxConf = aux(process.env);
const ServerauxConf = serverAux();
const compiler = webpack([auxConf, ServerauxConf]);

const client = compiler.compilers[0];
const serv = compiler.compilers[1];

const webpackDevMiddleware = middle(compiler, {
	devServer: config.devServer,
	publicPath: auxConf.output.publicPath,
});
const webpackHotMiddleware = require("webpack-hot-middleware")(
	client,
	config.devServer
);
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	log(`
		server running or some shit
		Server listening on http://localhost:${ PORT } in ${ process.env.NODE_ENV }
		`);
});
