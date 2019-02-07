import { Router } from "express";
import { signin, signout } from "../controllers/auth.controller";

const api = new Router();

api.route("/signin").post(signin);
api.route("/signout").get(signout);

export default api;
