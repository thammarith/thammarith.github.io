import React from 'react';

// import { Picture } from 'astro-imagetools/components';

interface Entry {
	id: string;
	title: string;
	slug: string;
	date_created: string;
	coverImage: string;
	url: string;
	mappedImage: { link: string; style: string; img: string };
}

interface Props {
	entries: Entry[];
}

const Card: React.FC<{ entry: Entry }> = (props: { entry: Entry }) => {
	// const [picture, setPicture] = useState(undefined);

	return (
		<a href={props.entry.url}>
			<div className="mb-8 hover:text-blue-600 hover:opacity-80">
				<div
					className="rounded overflow-hidden aspect-[16/9]"
					dangerouslySetInnerHTML={{
						__html: props.entry.mappedImage.img,
					}}
				/>
				<div className="font-heading text-2xl leading-none mt-4">
					<h3>{props.entry.title}</h3>
				</div>
				{/* {JSON.stringify(props.entry)} */}
			</div>
		</a>
	);
};

const BlogBlock: React.FC<Props> = (props: Props) => (
	<div className="grid grid-cols-3 gap-8">
		{props.entries.map((e) => (
			<Card key={e.id} entry={e} />
		))}
	</div>
);

export default BlogBlock;
