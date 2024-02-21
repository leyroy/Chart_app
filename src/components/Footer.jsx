import React from "react";
import Items from "./Items";
import {
	Company,
	Services,
	Products,
	Resources,
} from "../assets/staticData";

function Footer() {
	return (
		<footer className=" bg-logocolor bottom-0 py-4 px-5 right-0 left-0">
			<div className="w-4/5 mx-auto text-white">
				<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
					<Items
						title={"Company"}
						data={Company}
					/>
					<Items
						title={"Services"}
						data={Services}
					/>
					<Items
						title={"Products"}
						data={Products}
					/>
					<Items
						title={"Resources"}
						data={Resources}
					/>
				</section>
				<div className="mx-auto flex">
					<div className="flex gap-3">
						<p className="">&copy;</p>
						<p className="">
							20<span>th</span> febuary, 2023
						</p>
					</div>
					<div></div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
