import { apiUrl } from '@constants/urls';

type Query = Record<string, string>;

const ITEMS_ARTICLES = '/items/articles';

export const fetchData = async (path: string, query?: Query) => {
	const url = apiUrl + path + '?' + new URLSearchParams(query);

	console.log(`Info: fetching ${url}`);

	try {
		const res = await fetch(url);
		const json = await res.json();

		if (json.errors) {
			console.error(json.errors);
			throw new Error('Failed to fetch API');
		}

		return json.data;
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const getBlogPreviews = async () =>
	await fetchData(ITEMS_ARTICLES, {
		fields: 'id,title,cover_image,slug,date_created',
		'filter[status][_eq]': 'published',
	});

export const getBlogContents = async () =>
	await fetchData(ITEMS_ARTICLES, {
		fields: 'id,title,content,cover_image,slug,date_created',
		'filter[status][_eq]': 'published',
	});

export const getBlogContentsById = async (id: number) => await fetchData(`${ITEMS_ARTICLES}/${id}`);
