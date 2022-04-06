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
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	// purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./content/**/*.mdx"],
	theme: {
		fontFamily,
	},
	variants: {},
	plugins: [],
};
