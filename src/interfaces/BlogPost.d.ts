interface BlogBase {
	id: number;
	title: string;
	content: string;
	cover_image: string;
	slug: string;
	date_created: string;
}

export type BlogContent = BlogBase;
export type BlogPreview = Omit<BlogBase, 'content'>;
