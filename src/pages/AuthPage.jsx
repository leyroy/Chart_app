import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Form from "../components/Form";
import {
	clickEffect,
	fadeInOut,
} from "../utils/animations";
import { signUp, login } from "../apis/main";

export default function AuthPage() {
	const [userDAta, setUserData] = useState({});
	const [isLogin, setIsLogin] = useState(true);
	const [whileLoading, setWhileLoading] = useState(false);
	const [alertMg, setAertMG] = useState("");
	const user = useSelector((state) => state.user);

	const handleIputChange = (e) => {
		setUserData({
			...userDAta,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userDAta);
	};
	const handleRegister = async () => {
		if (
			!userDAta.fullname === "" ||
			!userDAta.email === "" ||
			!userDAta.password === ""
		) {
			setAertMG("all filds are requid");
			setTimeout(() => {
				setAertMG("");
			}, 3000);
			return;
		}
		if (userDAta.password !== userDAta.confirmPassword) {
			setAertMG("passwords does not much");
			setTimeout(() => {
				setAertMG("");
			}, 3000);
			return;
		}
		setWhileLoading(true);
		const response = await signUp(userDAta);
		console.log(response);
	};
	const handleLogin = async () => {
		if (!userDAta.email === "" || !userDAta.password === "") {
			setAertMG("all filds are requid");
			setTimeout(() => {
				setAertMG("");
			}, 3000);
			return;
		}
		setWhileLoading(true);
		const response = await login(userDAta);
		console.log(response);
	};
	if (user) {
		return (
			<Navigate
				to={"/"}
				replace={true}
			/>
		);
	}
	return (
		<div className="flex flex-col w-screen h-screen bg-dimcolor">
			<div className="flex w-full p-3 m-auto my-auto shadow-2xl md:p-0 md:w-4/5 h-4/5 ">
				<section className="hidden md:flex-1 md:block bg-logocolor"></section>
				<section className="flex flex-col w-full px-1 my-2 md:flex-1 md:px-6 ">
					<h1 className="mx-auto mb-4 text-3xl font-semibold text-logocolor ">
						{isLogin ? "Log in" : "Register"}
					</h1>
					<form
						onSubmit={handleSubmit}
						className="relative flex flex-col w-ful md:p-3 gap-7"
					>
						<p className="absolute -top-4 text-red">{alertMg}</p>
						{!isLogin && (
							<motion.div
								{...fadeInOut}
								className="w-full"
							>
								<Form
									{...fadeInOut}
									handleIputChange={handleIputChange}
									name={"fullname"}
									type={"text"}
									lable={"Full Name"}
								/>
							</motion.div>
						)}
						<Form
							name={"emai"}
							type={"email"}
							lable={"Email"}
							handleIputChange={handleIputChange}
						/>
						<Form
							name={"password"}
							type={"password"}
							lable={"Password"}
							handleIputChange={handleIputChange}
						/>
						{!isLogin && (
							<motion.div {...fadeInOut}>
								<Form
									name={"confirmPassword"}
									handleIputChange={handleIputChange}
									type={"password"}
									lable={"Confirm Password"}
								/>
							</motion.div>
						)}
						{isLogin ? (
							<motion.button
								{...clickEffect}
								{...fadeInOut}
								onClick={handleLogin}
								type="submit"
								className="px-2 py-2 text-lg font-medium text-white rounded-md md:px-4 bg-logocolor"
							>
								{" "}
								Log in
							</motion.button>
						) : (
							<motion.button
								{...clickEffect}
								{...fadeInOut}
								onClick={handleRegister}
								type="submit"
								className="px-2 py-2 text-lg font-medium text-white rounded-md md:px-4 bg-logocolor"
							>
								{" "}
								Sign Up
							</motion.button>
						)}
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
			<p className="w-full text-center h-14 bg-logocolor text-red ">
				need help? check here!
			</p>
		</div>
	);
}
