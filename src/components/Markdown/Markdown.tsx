import { useEffect, useState } from 'react';

import markdownToHtml from '@helpers/markdownToHtml';

type Props = {
	content: string;
	className?: string;
};

const Markdown: React.FC<Props> = ({ className, content }) => {
	const [html, setHtml] = useState('');

	useEffect(() => {
		(async () => {
			const rawHtml = await markdownToHtml(content);
			setHtml(rawHtml);
		})();
	}, [content]);

	return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
