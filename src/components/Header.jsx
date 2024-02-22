import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navs } from "../assets/staticData";
import { useSelector } from "react-redux";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Header() {
	const [togleMenu, setToggleMenu] = useState(false);
	const user = useSelector((state) => state.user);

	return (
		<div className="w-full fixed top-0 z-10 left-0 px-4 py-3 sm:px-6 bg-white shadow-md backdrop-blur-lg h-20">
			<div className="flex h-full items-center justify-between">
				<div className="flex items-center justify-center gap-4">
					<h1 className="font-bold tracking-tighter text-2xl md:text-3xl text-logocolor">
						JobsDearn
					</h1>
					{/* for big screens */}
					<div className="md:flex hidden  capitalize gap-4 items-center text-textColor font-semibold ">
						{navs.map((nav) => (
							<NavLink
								className={({ isActive }) =>
									isActive ? "text-textColor" : ""
								}
								key={nav.id}
								to={nav.id}
							>
								{nav.name}
							</NavLink>
						))}
					</div>
				</div>
				{!user && (
					<div className="md:flex hidden justify-center text-lg items-center gap-4">
						<Link
							to="/signin"
							className="md:px-4 px-2 font-normal py-2 rounded-md bg-logocolor text-white"
						>
							Sign up
						</Link>
						<p>employers/Post Job</p>
					</div>
				)}
				{/* for mobile sreans */}
				<div className="block w-full relative md:hidden">
					{!togleMenu ? (
						<IoIosMenu
							onClick={() => setToggleMenu(true)}
							className="h-10 ml-auto font-semibold cursor-pointer w-8"
						/>
					) : (
						<IoClose
							onClick={() => setToggleMenu(false)}
							className="h-10 ml-auto font-semibold cursor-pointer w-8"
						/>
					)}

					{togleMenu && (
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0, duration: 3 }}
							className="absolute max-w-xl w-full z-10 h-screen -right-7 shadow-xl justify-center items-center gap-16 pb-10 flex-col flex bg-white text-logocolor font-semibold p-4"
						>
							{navs.map((nav) => (
								<NavLink
									className={({ isActive }) =>
										isActive && "text-textColor"
									}
									onClick={() => setToggleMenu(!togleMenu)}
									key={nav.id}
									to={nav.id}
								>
									{nav.name}
								</NavLink>
							))}
							{!user ? (
								<div className="mt-auto mb-7 flex flex-col">
									<p>employers/Post Job</p>
									<Link
										to={"/signup"}
										className="px-2 my-3 font-normal py-2 rounded-sm bg-logocolor text-white"
									>
										Sign up
									</Link>
								</div>
							) : (
								<button>Sign out</button>
							)}
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
