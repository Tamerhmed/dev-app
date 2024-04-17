/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-green': '#217377',
				'dark-green': '#17575B',
				'linear-green-1': '#04837C',
				'linear-green-2': '#5FAA6F',
				'light-lime': '#B5BD02',
			},
		},
	},
	plugins: [],
};
