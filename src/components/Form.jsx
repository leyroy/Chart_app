import React from "react";
import { fadeInOut } from "../utils/animations";
import { motion } from "framer-motion";

export default function Form({ type, name, lable }) {
	return (
		<div className="relative hidden w-full py-2 border rounded md:block border-logocolor">
			<input
				required
				type={type}
				name={name}
				id={name}
				className="w-full px-4 text-lg font-semibold focus:outline-0 text-textColor peer"
			/>
			<label
				className="absolute left-0 px-2 text-lg transition-all duration-200 ease-in-out bg-white peer-focus:-translate-y-6 peer-valid:-translate-y-6 bg-zinc-900 peer-focus:text-logocolor peer-valid:text-sm"
				htmlFor={name}
			>
				{lable}
			</label>
			<motion.p
				{...fadeInOut}
				className="absolute right-0 font-serif text-sm -top-5 text-red"
			>
				error here...
			</motion.p>
		</div>
	);
}
