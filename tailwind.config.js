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
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		fontFamily,
	},
	plugins: [],
};
