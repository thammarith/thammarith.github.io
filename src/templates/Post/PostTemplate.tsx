import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import GlobalLayout from '../../layouts/GlobalLayout/GlobalLayout';
import { POST } from '../../constants/ids';

import './PostTemplate.scss';

type graphqlProps = {
	data: {
		mdx: {
			id: string;
			body: string;
			frontmatter: {
				title: string;
			};
		};
	};
};

const PostTemplate: React.FC<graphqlProps> = (props) => {
	const {
		data: { mdx },
	} = props;

	return (
		<GlobalLayout>
			<article
				id={POST.ARTICLE}
				className="grid mx-8 mb-16 place-items-center"
			>
				<section id={POST.METADATA} className="mt-8">
					<h1
						id={POST.TITLE}
						className="font-heading font-normal text-5xl"
					>
						{mdx.frontmatter.title}
					</h1>
				</section>
				<section id={POST.CONTENT} className="mt-6">
					<MDXProvider>
						<MDXRenderer frontmatter={mdx.frontmatter}>
							{mdx.body}
						</MDXRenderer>
					</MDXProvider>
				</section>
			</article>
		</GlobalLayout>
	);
};

export default PostTemplate;

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`;
