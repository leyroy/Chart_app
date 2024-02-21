import React from "react";

export default function Items({ title, data }) {
	return (
		<div className="my-4 flex flex-col items-center justify-start gap-3">
			<h1 className="text-lg font-semibold ">{title}</h1>
			{data.map((item) => (
				<div
					className="text-dimcolor cursor-pointer hover:mr-2 duration-300 ease-in-out transition-all hover:text-white"
					key={item.id}
				>
					{item.name}
				</div>
			))}
		</div>
	);
}
