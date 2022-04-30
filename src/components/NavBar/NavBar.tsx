import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import Logo from '@assets/logos/logo.png';
import { GenericBlock } from '@constants/classNames';
import { baseUrl, blogUrl } from '@constants/urls';
import imageLoader from '@helpers/imageLoader';

const Header: React.FC = () => (
	<header className={cx(GenericBlock, 'flex items-center justify-between p-8')}>
		<a href={baseUrl} className="inline-flex w-24 justify-center -mx-9 h-12 relative">
			<Image
				alt="Logo of the website"
				className="h-12"
				src={Logo}
				title="Homepage"
				layout="fill" // required
				objectFit="contain"
				loader={imageLoader}
			/>
		</a>
		<nav>
			<ul className="block">
				{[
					['Home', baseUrl],
					['Blog', blogUrl],
				].map(([text, url], i) => (
					<li className={cx('font-[Bitter] font-medium text-xl', 'inline-block', 'hover:text-orange-500', i !== 0 && 'ml-4')} key={text}>
						<a href={url}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	</header>
);

export default Header;
