// This can be moved out to their own schemas
// https://docs.astro.build/en/guides/content-collections/#defining-multiple-collections
import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),
});

const workCollection = defineCollection({
	type: 'data',
	schema: z.object({
		slug: z.string(),
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
			})
		),
	}),
});

export const collections = {
	article: articleCollection,
	blog: blogCollection,
	work: workCollection,
};
