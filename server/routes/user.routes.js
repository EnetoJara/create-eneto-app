import { Router } from "express";

import {
	remove,
	create,
	list,
	byId,
	read,
	update,
	photo,
	defaultPhoto
} from "../controllers/user.controller";
import {
	requireSignin,
	hasAuthorization
} from "../controllers/auth.controller";

const api = new Router();

api.route("/")
	.post(create)
	.get(list);
//
api.route("/:userId")
	.get(requireSignin, read)
	.put(requireSignin, hasAuthorization, update)
	.delete(requireSignin, hasAuthorization, remove);
api.param("userId", byId);

api.route("/photo/:userId").get(photo, defaultPhoto);
api.route("/defaultphoto").get(defaultPhoto);

export default api;
