import React from "react";
import { Link } from "react-router-dom";
import { navs } from "../assets/staticData";

export default function Header() {
	return (
		<div className="w-full fixed top-0 left-0 py-3 sm:px-6 bg-white shadow-md backdrop-blur-lg h-20">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center gap-4">
					<h1 className="font-bold text-3xl text-logocolor">
						JobsDearn
					</h1>
					<div className="flex capitalize gap-4 items-center text-textColor font-medium text-xl">
						{navs.map((nav) => (
							<Link
								key={nav.id}
								to={nav.id}
							>
								{nav.name}
							</Link>
						))}
					</div>
				</div>
				<div className="flex justify-center text-lg items-center gap-4">
					<button className="px-4 font-normal py-2 rounded-md bg-logocolor text-white">
						Sign up
					</button>
					<p>employers/Post Job</p>
				</div>
			</div>
		</div>
	);
}
