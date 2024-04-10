const axios = require("axios");

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (name, email, message) => {
	try {
		const response = await axios.post(`https://formsubmit.co/ajax/${process.env.GATSBY_TOKEN}`, {
			name: name,
			email: email,
			message: message,
		});
		return { responseBody: response.data, status: response.status };
	} catch (error) {
		return { responseBody: error, status: error.response.status };
	}
};
