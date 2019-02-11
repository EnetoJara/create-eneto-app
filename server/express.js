import path from "path";
import expressStaticGzip from "express-static-gzip";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/build", express.static(path.join(process.cwd(), "build")));
app.use(expressStaticGzip("build", { enabledBrotli: true, }));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(express.static("build"));

app.use((err, req, res, next) => {
	if (err.name === "UnauthorizedError") {
		res.status(401).json({ error: err.name + ": " + err.message, });
	}
});

export default () => app;
