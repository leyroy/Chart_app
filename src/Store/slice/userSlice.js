import { createSlice } from "@reduxjs/toolkit";

const userSlic = createSlice({
	name: "user",
	initialState:
		JSON.parse(localStorage.getItem("user")) || null,
	reducers: {
		setUser: (state, action) => {
			localStorage.setItem(
				"user",
				JSON.stringify(action.payload)
			);
			return action.payload;
		},
		loguotUser: (state, action) => {
			localStorage.removeItem("user");
			return action.payload;
		},
	},
});

export const { setUser, logoutUser } = userSlic.actions;
export default userSlic.reducer;
