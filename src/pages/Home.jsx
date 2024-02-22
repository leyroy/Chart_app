import React from "react";
import { categories, searched } from "../assets/staticData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
	return (
		<div className="">
			<div className=" w-full flex flex-col px-3 items-center justify-center gap-3 py-10 text-white bg-logocolor mx-auto ">
				<p className="text-3xl font-bold">
					Find a career you will love
				</p>
				<h1>
					Explore which careers have the highest job
					satisfaction, best salaries, and more
				</h1>
			</div>
			<div className=" flex items-center justify-center -mt-6 rounded-sm mx-auto shadow-lg px-6 gap-4 md:w-3/4 h-28 bg-white">
				<input
					type="text"
					className="focus:outline-0 w-full border rounded border-logocolor shadow-xl px-6 py-3"
					placeholder="Search your faverate job here..."
				/>
				<button className="px-4 font-normal py-3 rounded bg-logocolor text-white">
					Search
				</button>
			</div>
			<div className="md:w-3/4 px-3 mx-auto mt-4">
				<h1 className="md:text-2xl text-lg font-semibold capitalize">
					Browse top paying jobs from industry
				</h1>
				<div className="grid grid-cols-2 my-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
					{categories.map((category) => (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, duration: 1, delay: 0.2 }}
							exit={{ opacity: 0 }}
							className=" border rounded border-graycolor px-2 py-4"
						>
							<div
								className="font-semibold text-xl text-graycolor px-3 mb-2"
								key={category.id}
							>
								{" "}
								{category.category}
							</div>
							<div className="font-normal text-sm flex justify-between items-center px-3 mt-3 text-logocolor">
								<Link>See more</Link>
								<Link>Skills</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
			<div className="md:w-3/4 px-3 mx-auto my-4">
				<h1 className="md:text-2xl text-lg font-semibold capitalize">
					Frequently searched Careers
				</h1>
				<div className="flex flex-wrap gap-8 mt-5">
					{searched.map((seach) => (
						<Link
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, duration: 1, delay: 0.2 }}
							exit={{ opacity: 0 }}
							key={seach.id}
						>
							{seach.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
