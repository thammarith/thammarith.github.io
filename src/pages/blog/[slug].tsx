import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getBlogContents, getBlogContentsById } from 'src/apis/blogApi';
import { BlogContent } from 'src/interfaces/BlogPost';

type Props = {
	content: BlogContent;
};

const Blog: NextPage<Props> = (props: Props) => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className="text-3xl font-bold underline">
			<article>
				<h1>{props.content.title}</h1>
				<section>{props.content.content}</section>
			</article>
			{/* {JSON.stringify((props as any).content)} */}
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const contents = await getBlogContents();

	const paths = contents.map((content: BlogContent) => ({
		params: {
			id: content.id,
			slug: content.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (props: any) => {
	console.log(props);
	const content = await getBlogContentsById(props.parmas.id);
	return { props: { content } };
};

export default Blog;
