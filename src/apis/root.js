import axios from "axios";

export const BASE_URL =
	"https://job-search-yt0t.onrender.com/api";

export default () => {
	return axios.create({
		baseURL: BASE_URL,
		withCredentials: false,
		headers: {
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
};
