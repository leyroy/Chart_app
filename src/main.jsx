import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<AnimatePresence>
				<App />
			</AnimatePresence>
		</Provider>
	</React.StrictMode>
);
