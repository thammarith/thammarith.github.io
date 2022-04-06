const fileSources = [
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'blogs',
			path: './src/contents/blogs',
		},
		__key: 'blogs',
	},
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
];

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
	},
	plugins: [
		// plug-ins
		'gatsby-plugin-image',
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
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.md', '.mdx'],
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				postCssPlugins: [
					require('tailwindcss'),
					require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
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
		...fileSources,
	],
};
