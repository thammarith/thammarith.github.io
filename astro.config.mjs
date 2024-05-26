import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

import { externalAnchorPlugin } from './plugins/remark/externalLinks.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://thammarith.dev',
	integrations: [solidJs(), tailwind()],
	markdown: {
		remarkPlugins: [externalAnchorPlugin],
	},
});
