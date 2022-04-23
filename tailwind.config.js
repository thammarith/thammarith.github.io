const fontFamily = {
	heading: [
		'"FC Friday"',
		'"Sukhumvit Set"',
		'"SF Pro TH"',
		'"SF Pro Display"',
		'"SF Pro Icons"',
		'"Helvetica Neue"',
		'Helvetica',
		'Arial',
		'sans-serif',
	],
	text: [
		'"CS PraJad"',
		'"SF Pro Display"',
		'"SF Pro Icons"',
		'"Helvetica Neue"',
		'Helvetica',
		'Arial',
		'sans-serif',
	],
};

module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {},
		fontFamily,
	},
	plugins: [],
};
