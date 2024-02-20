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
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
