import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import imageLoader from '@helpers/imageLoader';

type Props = {
	title: string;
	coverImage?: string;
	excerpt?: string;
	withExcerpt?: boolean;
	textOnly?: boolean;
	headingLevel?: 'h2' | 'h3';
};

const ArticleCard: React.FC<Props> = (props: Props) => {
	if (props.textOnly) return <ArticleCardTextOnly {...props} />;
	return <ArticleCardWithImage {...props} />;
};

const ArticleCardWithImage: React.FC<Props> = ({ title, coverImage, excerpt, headingLevel, withExcerpt = true }: Props) => {
	const Heading = headingLevel ?? 'h2';

	return (
		<div className={cx('my-8 overflow-clip hover:cursor-pointer', 'flex flex-col h-auto', 'md:flex-row md:h-48')}>
			<div className="w-full aspect-video h-full relative md:w-1/2">
				<Image
					alt={title}
					src="https://placekitten.com/g/1000/1000"
					layout="fill"
					objectFit="cover"
					unoptimized={true}
					loader={imageLoader}
				/>
			</div>
			<div className="mt-4 md:w-1/2 md:mt-0 md:ml-8 md:h-full">
				<Heading className="font-heading text-4xl leading-9">{title}</Heading>
				{withExcerpt && <p className="mt-4 font-text text-lg">{excerpt}</p>}
			</div>
		</div>
	);
};

const ArticleCardTextOnly: React.FC<Props> = ({ title, excerpt, headingLevel, withExcerpt = true }: Props) => {
	const Heading = headingLevel ?? 'h2';

	return (
		<div className="my-8 hover:cursor-pointer">
			<Heading className="font-heading text-4xl leading-9">{title}</Heading>
			{withExcerpt && <p className="mt-4 font-text text-lg">{excerpt}</p>}
		</div>
	);
};

export default ArticleCard;
