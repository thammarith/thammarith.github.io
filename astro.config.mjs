import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import { externalAnchorPlugin } from './plugins/remark/externalLinks.mjs'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://thammarith.dev',
	integrations: [solidJs()],
	markdown: {
		remarkPlugins: [externalAnchorPlugin],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
