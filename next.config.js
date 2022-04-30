/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['thammarith.dev', 'placekitten.com'],
		loader: 'custom',
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
