import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import astroImagePlugin from "astro-imagetools/plugin";

export default defineConfig({
	integrations: [react(), tailwind()],
	vite: {
		plugins: [astroImagePlugin],
	},
	server: {
		tailwindConfig: './tailwind.config.js',
	},
});
