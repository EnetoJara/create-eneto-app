import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
export function vNewUser (user) {
	const errors = {};
	errors.hasErrors = false;
	if (!user.name) {
		errors.hasErrors = true;
		errors.name = "NAME is required";
	}
	if (isEmpty(user.name)) {
		errors.hasErrors = true;
		errors.name = "NAME cannot be empty";
	}
	if (!user.email) {
		errors.hasErrors = true;
		errors.email = "EMAIL is required";
	}
	if (isEmpty(user.email)) {
		errors.hasErrors = true;
		errors.email = "EMAIL cannot be empty";
	}
	if (!isEmail(user.email)) {
		errors.hasErrors = true;
		errors.email = "is not a valid email";
	}
	if (!user.password) {
		errors.hasErrors = true;
		errors.password = "PASSWORD is required";
	}
	if (isEmpty(user.password)) {
		errors.hasErrors = true;
		errors.password = "PASSWORD cannot be empty";
	}
	if (!isLength(user.password, { min: 6, max: 16, })) {
		errors.hasErrors = true;
		errors.password =
			"PASSWORD cannot be less than 6 characrters or greater than 16";
	}
	return errors;
}
