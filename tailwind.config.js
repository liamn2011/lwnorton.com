/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			transitionDuration: {
				3000: "3000ms",
			},
		},
	},
	plugins: [require("daisyui")],
};
