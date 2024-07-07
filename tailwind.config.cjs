/** @type {import('tailwindcss').Config} */
const baseSansSerif = ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'];

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// https://twitter.com/aleksliving/status/1794948623257440377
				'space-orange': '#ff4f00',
			},
			fontFamily: {
				title: ['Poppins', ...baseSansSerif],
				heading: ['Figtree', 'Anuphan', ...baseSansSerif],
			},
		},
	},
	plugins: [],
};
