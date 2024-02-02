import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				fuschia: {
					"100": "rgba(239, 93, 168, 1)",
					"80": "rgba(241, 120, 182, 1)",
					"60": "rgba(252, 221, 236, 1)",
				},
				iris: {
					"100": "rgba(93, 95, 239, 1)",
					"80": "rgba(120, 121, 241, 1)",
					"60": "rgba(165, 166, 246, 1)",
				},
				border: {
					DEFAULT: "rgba(23, 26, 31, 0.07)",
				},

				pallete: {
					"grey-100": "rgb(54, 62, 100)",
					"picton-blue": "rgb(21, 171, 255)",
					"cool-grey": "rgb(144, 149, 161)",
				},
			},
			fontFamily: {
				body: ['"WorkSans-Regular"', "Helvetica"],
				"header-1": ['"WorkSans-Bold"', "Helvetica"],
				"header-2": ['"WorkSans-Bold"', "Helvetica"],
			},
			fontSize: {
				body: "13px",
				"header-1": "34px",
				"header-2": "20px",
			},
			fontWeight: {
				body: "400",
				"header-1": "700",
				"header-2": "700",
			},
			letterSpacing: {
				body: "-0.26px",
				"header-1": "-0.68px",
				"header-2": "-0.4px",
			},
			lineHeight: {
				body: "normal",
				"header-1": "normal",
				"header-2": "normal",
			},
		},
	},
	plugins: [],
};
export default config;
