import extend from "lodash/extend";
import User from "../models/user.model";
import errorHandler from "../helpers/dbErrorHandler";
import { vNewUser } from "../helpers/validator";
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function create (req, res, next) {
	const auxUser = { ...req.body, };
	const isValid = vNewUser(auxUser);
	if (isValid.hasErrors) return res.status(400).json({ errors: isValid, });
	const user = new User(auxUser);
	user.save((err, result) => {

		if (err) {
			return res
				.status(400)
				.json({ errors: errorHandler.getErrorMessage(err), });
		}
		return res.status(201).json({ message: "Successfully signed up!", });
	});
}

export function list (req, res) {
	User.find((err, users) => {
		if (err) {
			return res
				.status(400)
				.json({ errors: errorHandler.getErrorMessage(err), });
		}
		return res.status(200).json(users);
	}).select("name email updated created");
}

export function byId (req, res, next, id) {
	User.findById(id).exec((err, user) => {
		if (err || !user)
			return res.status("400").json({ errors: "User not found", });
		req.profile = user;
		next();
	});
}

export function read (req, res) {
	req.profile.hashed_password = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
}

export function update (req, res, next) {
	let user = req.profile;
	user = extend(user, req.body);
	user.updated = Date.now();
	user.save((err) => {
		if (err) {
			return res
				.status(400)
				.json({ errors: errorHandler.getErrorMessage(err), });
		}
		user.hasErrors = undefined;
		user.salt = undefined;
		return res.json(user);
	});
}
/**
 *
 * @param {*} req
 * @param {*} res
 */
export function remove (req, res) {
	const user = req.profile;
	user.remove((err, deletedUser) => {
		if (err) {
			return res
				.status(400)
				.json({ errors: errorHandler.getErrorMessage(err), });
		}
		deletedUser.hashed_password = undefined;
		deletedUser.salt = undefined;
		return res.json(deletedUser);
	});
}

export function isSeller (req, res, next) {
	const isSeller = req.profile && req.profile.seller;
	if (!isSeller)
		return res
			.status(403)
			.json({ errors: "User does not have the role of seller", });
	next();
}