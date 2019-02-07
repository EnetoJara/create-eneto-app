import { Router } from "express";

import {
	list,
	create,
	read,
	update,
	remove,
	byId
} from "../controllers/user.controller";
import {
	hasAuthorization,
	requireSignin
} from "../controllers/auth.controller";

const api = new Router();

api.route("/")
	.get(list)
	.post(create);
api.route("/:userId")
	.get(requireSignin, read)
	.put(requireSignin, hasAuthorization, update)
	.delete(remove);
api.param("userId", byId);

export default api;

