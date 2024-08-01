import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: 'class', // Enable dark mode with class strategy
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				text: '#000000',
				background: '#FFFFFF',
				primary: 'green',
				secondary: '#b4b4f3',
				accent: '#232F3E',
			},
		},
	},
	plugins: [],
};
export default config;
