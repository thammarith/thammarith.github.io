// This can be moved out to their own schemas
// https://docs.astro.build/en/guides/content-collections/#defining-multiple-collections
import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';
import { Locale } from 'src/constants/locale';
import { glob } from 'astro/loaders';

// const articleCollection = defineCollection({
// 	type: 'content',
// 	schema: z.object({
// 		title: z.string(),
// 		tags: z.array(z.string()),
// 		image: z.string().optional(),
// 	}),
// });

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			isDraft: z.boolean().optional().default(false),
			kicker: z.string().optional(),
			title: z.string(),
			subtitle: z.string().optional(),
			excerpt: z.string().optional(),
			tags: z.array(z.string()),
			cover: z
				.object({
					image: image(),
					alt: z.string(),
				})
				.optional(),
			pubDate: z.date(),
			lang: z.nativeEnum(Locale).optional().default(Locale.EN),
		}),
});

const workCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.yml', base: "./src/content/work" }),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string().optional(),
		location: z.string(),
		logo: z.string().optional(),
		positions: z.array(
			z.object({
				title: z.string(),
				startDate: z.date(),
				endDate: z.date().optional(),
				// description: z.string().optional(),
				// responsibilites: z.array(z.string()).optional(),
			}),
		),
	}),
});

export const collections = {
	// article: articleCollection,
	blog: blogCollection,
	work: workCollection,
};
