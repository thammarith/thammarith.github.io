import React from 'react';
import cx from 'classnames';

import { GenericBlock } from '@constants/classNames';
import { directus, licenceContent, licenceSource, nextJs, socialGitHub, socialInstagram, socialLinkedIn, socialMedium, socialTwitter, sourceUrl } from '@constants/links';
import Markdown from '@components/Markdown/Markdown';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id={styles.Footer} className="bg-slate-900">
			<div className={cx(GenericBlock, 'pt-16 pb-8')}>
				<h2 className="text-slate-100 font-heading font-normal text-4xl">thammarith.dev</h2>

				<div className="mt-2 text-slate-200">
					<a href={socialLinkedIn} className={styles.SocialButton}>
						<i className="fab fa-linkedin-in"></i>
					</a>
					<a href={socialTwitter} className={styles.SocialButton}>
						<i className="fab fa-twitter"></i>
					</a>
					<a href={socialGitHub} className={styles.SocialButton}>
						<i className="fab fa-github"></i>
					</a>
					<a href={socialInstagram} className={styles.SocialButton}>
						<i className="fab fa-instagram"></i>
					</a>
					<a href={socialMedium} className={styles.SocialButton}>
						<i className="fab fa-medium-m"></i>
					</a>
				</div>

				<div id="licence" className="text-slate-500 text-sm font-text mt-16 tracking-tight">
					<div className="mt-2">
						<i className="text-2xl mr-2 fa-brands fa-creative-commons"></i>
						<i className="text-2xl mr-2 fa-brands fa-creative-commons-by"></i>
						<i className="text-2xl mr-2 fa-brands fa-creative-commons-sa"></i>
					</div>
					<div className="mt-2">
						<Markdown content={`©&nbsp;${currentYear} Thammarith Likittheerameth`} />
						<Markdown content={`Licensed under the [Creative Commons Attribution-ShareAlike 4.0 International Licence](${licenceContent})`} />
					</div>
				</div>

				<div className="text-slate-500 text-sm font-text mt-4 tracking-tight">
					<Markdown content={`[Source code freely available on GitHub](${sourceUrl}) under the [GNU General Public Licence v3.0](${licenceSource})`} />
					<Markdown content={`Crafted using [Next.js](${nextJs}), [Directus](${directus}) with love, care, passion, and sometimes frustration`} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
