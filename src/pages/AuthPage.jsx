import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Form from "../components/Form";
import {
	clickEffect,
	fadeInOut,
} from "../utils/animations";

export default function AuthPage() {
	const [isLogin, setIsLogin] = useState(true);
	const user = useSelector((state) => state.user);

	if (user) {
		return (
			<Navigate
				to={"/"}
				replace={true}
			/>
		);
	}
	return (
		<div className="flex w-screen h-screen bg-dimcolor">
			<div className="flex w-4/5 m-auto my-auto shadow-2xl h-4/5 ">
				<section className="flex-1 bg-logocolor"></section>
				<section className="flex flex-col flex-1 px-6 my-2 ">
					<h1 className="mx-auto mb-4 text-3xl font-semibold text-logocolor ">
						{isLogin ? "Log in" : "Register"}
					</h1>
					<form className="flex flex-col p-3 gap-7">
						{!isLogin && (
							<motion.div {...fadeInOut}>
								<Form
									{...fadeInOut}
									name={"fullname"}
									type={"text"}
									lable={"Full Name"}
								/>
							</motion.div>
						)}

						<Form
							name={"email"}
							type={"email"}
							lable={"Email"}
						/>
						<Form
							name={"password"}
							type={"password"}
							lable={"Password"}
						/>
						{!isLogin && (
							<motion.div {...fadeInOut}>
								<Form
									name={"confirmPassword"}
									type={"password"}
									lable={"Confirm Password"}
								/>
							</motion.div>
						)}
						<motion.button
							{...clickEffect}
							type="submit"
							className="px-2 py-2 text-lg font-medium text-white rounded-md md:px-4 bg-logocolor"
						>
							{" "}
							{isLogin ? "Log in" : "Sign Up"}{" "}
						</motion.button>
						{isLogin ? (
							<p
								className="-mt-6 font-serif text-sm font-normal text-textColor"
								{...fadeInOut}
							>
								don't hava an account?{" "}
								<span
									onClick={() => setIsLogin(!isLogin)}
									className="cursor-pointer hover:underline"
								>
									Create one here...!
								</span>
							</p>
						) : (
							<p className="-mt-6 font-serif text-sm font-normal text-textColor">
								already hava an account?{" "}
								<motion.span
									onClick={() => setIsLogin(!isLogin)}
									{...clickEffect}
									className="cursor-pointer hover:underline"
								>
									Log in here...!
								</motion.span>
							</p>
						)}
					</form>
				</section>
			</div>
		</div>
	);
}
