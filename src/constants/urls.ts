import { DIRECTUS_URL, SITE_URL } from './envrionments';

const onlyPublised = 'filter[status][_eq]=published';

const forThumbnail = 'fields=id,title,cover_image,slug,date_created';

export const baseUrl = SITE_URL;
export const blogUrl = `${SITE_URL}/blog`;

export const allArticles = `${DIRECTUS_URL}/items/articles`;
export const allArticles_published = `${allArticles}?${onlyPublised}`;
export const allArticles_published_forThumbnail = `${allArticles}?${onlyPublised}&${forThumbnail}`;

export const getImageUrl = (id: string) => `${DIRECTUS_URL}/assets/${id}`
export const getBlogUrl = (base: string, slug: string) => `${base}/blog/${slug}`
