import { default as lodashExtend } from "lodash/extend";
import errorHandler from "./error.controller";
import User from "../models/user.model";
function create (req, res, next) {
	const toStore = { ...req.body, };
	const user = new User(toStore);
	user.save((err, result) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err),
			});
		}
		return res.status(201).json({ message: "Successfully signed up!", });
	});
}
function list (req, res) {
	User.find((err, users) => {
		if (err) {
			return res
				.status(400)
				.json({ error: errorHandler.getErrorMessage(err), });
		}
		return res.json(users);
	}).select("name email updated created");
}
function byId (req, res, next, id) {
	User.findById(id).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({ error: "User not found", });
		}
		req.profile = user;
		next();
	});
}
function read (req, res) {
	req.profile.hashed_password = null;
	req.profile.salt = null;
	return res.json(req.profile);
}
function update (req, res, next) {
	let user = { ...req.profile, };
	user = lodashExtend(user, req.body);
	user.updated = Date.now();
	user.save((err) => {
		if (err) {
			return res
				.status(400)
				.json({ error: errorHandler.getErrorMessage(err), });
		}
	});
}
function remove (req, res, next) {
	const user = { ...req.profile, };
	user.remove((err, deletedUser) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err),
			});
		}
		deletedUser.hashed_password = undefined;
		deletedUser.salt = undefined;
		res.json(deletedUser);
	});
}

export default { create, byId, read, list, remove, update, };
