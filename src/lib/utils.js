const axios = require("axios");

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (name, email, message) => {
	try {
		const response = await axios.post("https://formsubmit.co/ajax/eca91726ce0f1d7cd2a332b1b46d6c3a", {
			name: name,
			email: email,
			message: message,
		});
		return { responseBody: response.data, status: response.status };
	} catch (error) {
		return { responseBody: error, status: error.response.status };
	}
};
