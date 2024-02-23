import * as yup from "yup";

export const registerScheamer = yup.object().shape({
	emai: yup.string().email().required("email is required"),
	password: yup
		.string()
		.min(6)
		.max(19)
		.required("password is required"),
});
export const userLoginScheamer = yup.object().shape({
	fullname: yup.string().required("Full name is required"),
	emai: yup.string().email().required("email is required"),
	password: yup
		.string()
		.min(6)
		.max(19)
		.required("password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null])
		.required("passwords does not much"),
});
