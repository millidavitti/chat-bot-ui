import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
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
				pallete: {
					platinum: "rgb(222, 225, 230)",
					seasalt: "rgb(248, 249, 250)",
					"grey-100": "rgb(54, 62, 100)",
					"picton-blue": "rgb(21, 171, 255)",
					"cool-grey": "rgb(144, 149, 161)",
					"electric-indigo": "rgb(109, 49, 237)",
					"eeirie-black": "rgb(23, 26, 31)",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
