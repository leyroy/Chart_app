import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className=" py-24">
			<Header />
			<Outlet />
		</div>
	);
}

export default Layout;
