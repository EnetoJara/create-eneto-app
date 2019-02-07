import mongoose from "mongoose";

import config from "../config/config";
import app from "./express";

const { log, info, } = console;

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true, });

app.listen(config.port, function (err) {
	if (err) {
		log("err: ", err);
	}
	info("Server started on port %s.", config.port);
});
// import "@babel/polyfill";
// import Express from "express";
// import BodyParser from "body-parser";
// import Mongoose from "mongoose";
// import expressStaticGzip from "express-static-gzip";
// import testRoute from "./routes/test.routes";

// Mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, });
// const { log, } = console;

// const server = Express();
// server.use(BodyParser.json());
// server.use("/api", testRoute);
// server.use(expressStaticGzip("production/build", { enabledBrotli: true, }));

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, function onStart (err) {
// 	if (err) {
// 		log(err);
// 	}
// 	log(`
// server running or some shit
// Server listening on http://localhost:${ PORT } in ${ process.env.NODE_ENV }`);
// });
