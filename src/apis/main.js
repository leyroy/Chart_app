import API from "./root";

export const signUp = async (data) => {
	try {
		const response = await API().post("/admin/signup", data);
		return response;
	} catch (error) {
		return error;
	}
};

export const login = async (data) => {
	try {
		const response = await API().post("/admin/login", data);
		return response;
	} catch (error) {
		console.error("there was an error", error);
		console.log("Logging out the error", error);
	}
};
export const getAllJobs = async (data) => {
	try {
		const response = await API().get("/job", data);
		return response;
	} catch (error) {
		console.error(error.message);
		return error;
	}
};

export const postJobs = async (data) => {
	try {
		const response = await API().post("/job", data);
		return response;
	} catch (error) {
		console.error(error.message);
		return error.response?.data;
	}
};

export const getSingleJob = async (id) => {
	try {
		const response = await API().get(`/job/${id}`);
		return response;
	} catch (error) {
		return error.message;
	}
};
export const getAllUsers = async (token) => {
	try {
		const response = await API().get("/admin/", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error.message;
	}
};
export const deleteUser = async ({ userId, token }) => {
	try {
		const response = await API().delete(`/admin/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error.message;
	}
};
export const updateJob = async (jobId, data) => {
	try {
		const response = await API().patch(`/job/${jobId}`, {
			...data,
		});
		return response;
	} catch (error) {
		return error.message;
	}
};
export const delteJob = async (jobId) => {
	try {
		const response = await API().delete(`/job/${jobId}`);
		return response;
	} catch (error) {
		return error.message;
	}
};
export const applyFn = async (jobId) => {
	try {
		const response = await API().post(
			`/application/${jobId}`,
			jobId
		);
		return response;
	} catch (error) {
		return error.message;
	}
};
