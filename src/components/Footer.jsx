import React from "react";
import Items from "./Items";
import {
	Company,
	Services,
	Products,
	Resources,
} from "../assets/staticData";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
	return (
		<footer className=" bg-logocolor bottom-0 py-7 px-5">
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
				<div className="mx-auto flex-col md:flex-row gap-4 flex items-center justify-evenly my-3">
					<div className="flex gap-3">
						<p className="">&copy;</p>
						<p className="text-dimcolor">
							20<span className="text-sm">th</span> febuary, 2023
						</p>
					</div>
					<div className="flex items-center justify-center gap-2">
						<div className="flex items-center justify-center p-1 rounded-full cursor-pointer">
							<FaLinkedin className="w-7 h-7 rounded-full" />
						</div>
						<div className="flex items-center justify-center p-1 rounded-full cursor-pointer">
							<BsInstagram className="w-7 h-7 rounded-full" />
						</div>
						<div className="flex items-center justify-center p-1 rounded-full cursor-pointer">
							<TiSocialTwitter className="w-7 h-7 rounded-full" />
						</div>
						<div className="flex items-center justify-center p-1 rounded-full cursor-pointer">
							<IoLogoYoutube className="w-7 h-7 rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
