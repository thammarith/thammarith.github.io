module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
	},
	plugins: [
		// plug-ins
		'gatsby-plugin-image',
		'gatsby-plugin-mdx',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'G-CTSYFBBWFF',
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				postCssPlugins: [
					require('tailwindcss'),
					// require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
				],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		// transformers
		'gatsby-transformer-sharp',
		// sources
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
