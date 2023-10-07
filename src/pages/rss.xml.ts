import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (context: any) => {
	const blogEntries = await getCollection('blog');

	const entries = blogEntries.map((post) => ({
		title: post.data.title,
		pubDate: post.data.pubDate,
		description: post.data.excerpt,
		// customData: post.data.customData,
		link: `/blog/${post.slug}/`,
	}));

	return rss({
		title: 'Latest from thammarith.dev',
		description: 'See what Thammarith has finally wrote!',
		site: context.site,
		items: entries,
	});
};
