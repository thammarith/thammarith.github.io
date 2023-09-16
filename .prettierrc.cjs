/** @type {import("prettier").Config} */
const config = {
	"printWidth": 120,
	"singleQuote": true,
	"useTabs": true,
	"overrides": [
		{
			"files": "**/*.astro",
			"options": {
				"parser": "astro"
			}
		}
	],
	"plugins": [require.resolve('prettier-plugin-astro')]
}

module.exports = config;
