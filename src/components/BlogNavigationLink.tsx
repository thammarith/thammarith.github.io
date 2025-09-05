import type { Component } from 'solid-js';
import { ChevronLeft, ChevronRight } from 'lucide-solid';
import { buildBlogUrl } from 'src/utils/urlUtils';

type BlogEntry = {
	id: string;
	data: {
		title: string;
		subtitle?: string;
	};
};

type Props = {
	entry: BlogEntry;
	direction: 'previous' | 'next';
	siteUrl?: string;
};

const BlogNavigationLink: Component<Props> = (props) => {
	const isNext = props.direction === 'next';
	const label = isNext ? 'Next' : 'Previous';

	return (
		<div class={["flex-1 font-['Noto_Sans_Thai_Looped'] flex flex-col", isNext ? 'items-end text-right' : 'items-start text-left'].join(' ')}>
			<div class="text-sm text-gray-500 mb-2 flex items-end">
				{!isNext && <ChevronLeft size={16} />}
				{label}
				{isNext && <ChevronRight size={16} />}
			</div>
			<a
				href={buildBlogUrl(props.siteUrl, props.entry.id)}
				class="block group transition-colors hover:text-space-orange"
			>
				<div class="text-lg font-medium font-heading">
					{props.entry.data.title}
				</div>
				{props.entry.data.subtitle && (
					<div class="text-sm text-gray-600 mt-1">
						{props.entry.data.subtitle}
					</div>
				)}
			</a>
		</div>
	);
};

export default BlogNavigationLink;
