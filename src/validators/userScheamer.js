import * as yup from "yup";

export const registerScheamer = yup.object().shape({
	firsname: yup.string().required(),
	lastName: yup.string().required(),
	emai: yup.string().email().required(),
	password: yup.string().min(6).max(19).required,
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password", null)]),
});
export const userLoginScheamer = yup.object().shape({
	firsname: yup.string().required(),
	lastName: yup.string().required(),
	emai: yup.string().email().required(),
	password: yup.string().min(6).max(19).required,
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password", null)]),
});
