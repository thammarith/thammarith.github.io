import React from 'react';
import cx from 'classnames';

import Logo from '@assets/logos/logo.png';
import { baseUrl, blogUrl } from '@constants/urls';

const Header: React.FC = () => (
	<header className="flex items-center justify-between p-8 max-w-3xl 2xl:max-w-[96rem] mx-auto">
		<a href={baseUrl} className="inline-flex w-24 justify-center -mx-9">
			<img
				alt="Thammarith's Blog"
				className="h-12"
				src={Logo}
				title="Homepage"
			/>
		</a>
		<nav>
			<ul className="block">
				{[
					['Home', baseUrl],
					['Blog', blogUrl],
				].map(([text, url], i) => (
					<li
						className={cx(
							'font-[Bitter] font-medium text-xl',
							'inline-block',
							'hover:text-orange-500',
							i !== 0 && 'ml-4'
						)}
						key={text}
					>
						<a href={url}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	</header>
);

export default Header;
