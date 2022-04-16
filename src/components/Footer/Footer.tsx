import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const url = 'thammarith.dev';
	const httpUrl = `https://${url}`;
	const licenceUrl = 'https://creativecommons.org/licenses/by-sa/4.0';
	const sourceLicenceUrl = 'https://github.com/thammarith/thammarith.github.io/blob/master/LICENCE';

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 p-8 md:p-32 md:pt-16 md:pb-32 lg:px-80">
			<h2 className="text-slate-100 font-heading font-normal text-4xl">
				thammarith.dev
			</h2>

			<div className="mt-2 text-slate-200">
				<a className={styles.SocialButton} href="https://linkedin.com/in/thammarith"><i className="fab fa-linkedin-in"></i></a>
				<a className={styles.SocialButton} href="https://twitter.com/thammarith"><i className="fab fa-twitter"></i></a>
				<a className={styles.SocialButton} href="https://github.com/thammarith"><i className="fab fa-github"></i></a>
				<a className={styles.SocialButton} href="https://instagram.com/thammarith"><i className="fab fa-instagram"></i></a>
				<a className={styles.SocialButton} href="https://medium.com/@thammarith"><i className="fab fa-medium-m"></i></a>
			</div>


			<div id="licence" className="text-slate-500 text-sm font-text mt-16 tracking-tight">
				<div className="mt-2">
					<i className="text-2xl mr-2 fa-brands fa-creative-commons"></i>
					<i className="text-2xl mr-2 fa-brands fa-creative-commons-by"></i>
					<i className="text-2xl mr-2 fa-brands fa-creative-commons-sa"></i>
				</div>
				<div className="mt-2">
					©&nbsp;{currentYear} by Thammarith Likittheerameth
					<br />
					Licensed under the <a href={licenceUrl}>Creative Commons Attribution-ShareAlike 4.0 International Licence</a>
				</div>
			</div>

			<div className="text-slate-500 text-sm font-text mt-4 tracking-tight">
				Source code freely available on GitHub under the <a href={sourceLicenceUrl}>GNU General Public Licence v3.0</a>
				<br />
				Crafted using Astro, Directus with love, care, passion, and sometimes frustration
			</div>
		</footer>
	);
};

export default Footer;
