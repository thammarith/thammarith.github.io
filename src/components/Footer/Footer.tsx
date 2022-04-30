import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsSa, faGithub, faInstagram, faLinkedinIn, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { GenericBlock } from '@constants/classNames';
import { directus, licenceContent, licenceSource, nextJs, socialGitHub, socialInstagram, socialLinkedIn, socialMedium, socialTwitter, sourceUrl } from '@constants/urls';
import Markdown from '@components/Markdown/Markdown';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id={styles.Footer} className="bg-slate-900">
			<div className={cx(GenericBlock, 'pt-16 pb-32')}>
				<h2 className="text-slate-100 font-heading font-normal text-4xl">thammarith.dev</h2>

				<div className="mt-2 text-slate-200 flex items-center">
					<a href={socialLinkedIn} aria-label="LinkedIn" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faLinkedinIn} className="h-6" />
					</a>
					<a href={socialTwitter} aria-label="Twitter" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faTwitter} className="h-6" />
					</a>
					<a href={socialGitHub} aria-label="GitHub" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faGithub} className="h-6" />
					</a>
					<a href={socialInstagram} aria-label="Instagram" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faInstagram} className="h-6" />
					</a>
					<a href={socialMedium} aria-label="Medium" className={styles.SocialButton}>
						<FontAwesomeIcon icon={faMediumM} className="h-6" />
					</a>
				</div>

				<div id="licence" className="text-slate-400 font-text mt-12 tracking-tight">
					<div className="mt-2 flex">
						<FontAwesomeIcon icon={faCreativeCommons} className="h-6 mr-2" />
						<FontAwesomeIcon icon={faCreativeCommonsBy} className="h-6 mr-2" />
						<FontAwesomeIcon icon={faCreativeCommonsSa} className="h-6 mr-2" />
					</div>
					<div className="mt-2">
						<Markdown content={`©&nbsp;${currentYear} Thammarith Likittheerameth`} />
						<Markdown content={`Licensed under the [Creative Commons Attribution-ShareAlike 4.0 International Licence](${licenceContent})`} />
					</div>
				</div>

				<div className="text-slate-400 font-text mt-4 tracking-tight">
					<Markdown content={`[Source code freely available on GitHub](${sourceUrl}) under the [GNU General Public Licence v3.0](${licenceSource})`} />
					<Markdown content={`Crafted using [Next.js](${nextJs}), [Directus](${directus}) with love, care, passion, and sometimes frustration`} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
