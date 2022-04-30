import type { NextPage } from 'next';
import cx from 'classnames';

import { GenericBlock } from '@constants/classNames';
import GlobalLayout from '@layouts/GlobalLayout';

import Image from 'next/image';
import imageLoader from '@helpers/imageLoader';

const Home: NextPage = () => {
	const ChevronDoubleDown = ({ className }: { className: string }) => (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" />
		</svg>
	);

	return (
		<GlobalLayout withNavbar={false}>
			<section className="pt-16 min-h-[32rem] h-[90vh] bg-slate-900">
				<div className={cx(GenericBlock, 'pt-16')}>
					<h1 className="font-heading text-slate-100 text-6xl leading-[3rem]">
						Thammarith
						<br />
						Likittheerameth
					</h1>
					<div className="font-['Bitter'] text-slate-400 text-xl font-medium mt-6">Full-stack Software Engineer at Agoda</div>

					<div className="font-text text-slate-400 max-w-md mt-12">
						<p>
							Coding and having existential crisis concurrently
							{/* <!-- Most of the time, I'm debugging and fixing bug my yesterday's self has introduced unknowingly. --> */}
						</p>
						<p className="mt-3">
							My home is <code>localhost:3000</code> built with my handy tools: React, TypeScript, C#, SQL, bugs, and unintended features.
						</p>
					</div>

					<div className="mt-6 text-slate-200">
						<a className="SocialButton" href="https://linkedin.com/in/thammarith">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a className="SocialButton" href="https://twitter.com/thammarith">
							<i className="fab fa-twitter"></i>
						</a>
						<a className="SocialButton" href="https://github.com/thammarith">
							<i className="fab fa-github"></i>
						</a>
						<a className="SocialButton" href="https://instagram.com/thammarith">
							<i className="fab fa-instagram"></i>
						</a>
						<a className="SocialButton" href="https://medium.com/@thammarith">
							<i className="fab fa-medium-m"></i>
						</a>
					</div>

					<div className="font-text text-slate-500 text-sm mt-24 flex items-center">
						<ChevronDoubleDown className="animate-bounce h-4 fill-slate-500" />
						<div className="ml-2 pb-1">Scroll down for about me, blog posts, and cat images</div>
					</div>
				</div>
			</section>
		</GlobalLayout>
	);
};

export default Home;
