import React from "react";
import "./App.css";

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import store from "./Store/Store";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/signin",
		element: <AuthPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
