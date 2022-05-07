import type { NextPage } from 'next';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { GenericBlock } from '@constants/classNames';
import { socialGitHub, socialInstagram, socialLinkedIn, socialMedium, socialTwitter } from '@constants/urls';
import GlobalLayout from '@layouts/GlobalLayout';

import styles from './index.module.scss';
import ArticleCard from '@components/ArticleCard/ArticleCard';
import { getBlogPreviews } from 'src/apis/blogApi';
import { BlogPreview } from 'src/interfaces/BlogPost';

type Props = {
	blogPreviews: BlogPreview[];
};

const Home: NextPage<Props> = (props: Props) => {
	const ChevronDoubleDown = ({ className }: { className: string }) => (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" />
		</svg>
	);

	const IntroductionSection = () => (
		<section className="pt-12 pb-16 min-h-[32rem] bg-slate-900">
			<div className={cx(GenericBlock, 'pt-16')}>
				<h1 className="font-heading text-slate-100 text-[12vw] leading-[10vw] sm:text-6xl sm:leading-[3rem]">
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

				<div className="mt-6 text-slate-200 flex items-center">
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

				<div className="font-text text-slate-500 text-sm mt-24 flex items-center">
					<ChevronDoubleDown className="animate-bounce h-4 fill-slate-500" />
					<div className="ml-2 pb-1">Scroll down for about me, blog posts, and cat images</div>
				</div>
			</div>
		</section>
	);

	const LatestPostsSection = () => (
		<section className={cx(GenericBlock, 'pb-16')}>
			<h2 className="font-heading text-6xl mb-12 mt-8 md:mt-16">Latest from the Blog</h2>

			<ArticleCard
				slug="1"
				headingLevel="h3"
				title="ใช้ iPad x Raspberry Pi 4 แทนคอม เวิร์คหรือโวะ?"
				excerpt="เรื่องมันมีอยู่ว่า คอมผมแบตบวม จะไปส่งซ่อมเห็นเราคาแล้วก็บาย คอมราคาสองหมื่นต้น ๆ ราคาเปลี่ยนแบตที่ศูนย์ล่อไปแปดพันบาท! บ้าไปแล้ว! แต่ปัญหาก็คือต้องใช้คอม ไม่ใช้ก็ไม่ได้ ชีวิตติดโค้ด เลยนึกขึ้นได้ว่า..."
			/>
			<ArticleCard
				slug="1"
				headingLevel="h3"
				title="ถามแบบนี้สิได้คำตอบ"
				excerpt="จังหวะโคตรพอดี Raspberry Pi 4 ที่เคยสั่งไว้กับคีย์บอร์ด Keychron K3 ที่สั่งไว้ (และกว่าจะมาถึง...) ก็มาถึงในเวลาใกล้ ๆ กัน เลยได้เวลาจับมาลองเล่นดู..."
				textOnly
			/>
			<ArticleCard
				slug="1"
				headingLevel="h3"
				title="ถามแบบนี้สิได้คำตอบ"
				excerpt="จังหวะโคตรพอดี Raspberry Pi 4 ที่เคยสั่งไว้กับคีย์บอร์ด Keychron K3 ที่สั่งไว้ (และกว่าจะมาถึง...) ก็มาถึงในเวลาใกล้ ๆ กัน เลยได้เวลาจับมาลองเล่นดู..."
				textOnly
			/>
			<ArticleCard
				slug="1"
				headingLevel="h3"
				title="ถามแบบนี้สิได้คำตอบ"
				excerpt="จังหวะโคตรพอดี Raspberry Pi 4 ที่เคยสั่งไว้กับคีย์บอร์ด Keychron K3 ที่สั่งไว้ (และกว่าจะมาถึง...) ก็มาถึงในเวลาใกล้ ๆ กัน เลยได้เวลาจับมาลองเล่นดู..."
				textOnly
			/>
		</section>
	);

	return (
		<GlobalLayout withNavbar={false}>
			<IntroductionSection />
			<LatestPostsSection />
		</GlobalLayout>
	);
};

export async function getStaticProps() {
	const blogPreviews = await getBlogPreviews();
	console.log(blogPreviews)
	return { props: { blogPreviews } };
}

export default Home;
