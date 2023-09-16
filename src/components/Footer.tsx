import type { Component } from 'solid-js';

import Link from './Link';

const Footer: Component = () => (
	<footer class="px-8 py-16 sm:px-16 bg-slate-900 flex flex-grow-0 items-center justify-center">
		<div class="w-full max-w-[72ch] text-white font-['Figtree']">
			<h2 class="text-slate-100 font-['Poppins'] font-semibold text-3xl">thammarith.dev</h2>

			<div id="licence" class="font-text mt-12 text-slate-300">
				<div class="flex gap-1">
					<i class="text-2xl fa-brands fa-creative-commons" />
					<i class="text-2xl fa-brands fa-creative-commons-by" />
					<i class="text-2xl fa-brands fa-creative-commons-sa" />
				</div>
				<p class="mt-2">©&nbsp;2023 Thammarith Likittheerameth</p>
				<p>
					Licensed under the{' '}
					<Link href="https://creativecommons.org/licenses/by-sa/4.0">
						Creative Commons Attribution-ShareAlike 4.0 International Licence
					</Link>
				</p>
				<p class="mt-4">
					<Link href="https://github.com/thammarith/thammarith.github.io">Source code freely available on GitHub</Link> under the <Link href="https://github.com/thammarith/thammarith.github.io/blob/master/LICENCE">GNU General Public Licence v3.0</Link>
					<br />
					Crafted using <Link href="https://astro.build">Astro</Link> with love, care, passion, and occasional despair
				</p>
			</div>
		</div>
	</footer>
	// <a
	// 	class={[
	// 		'flex items-center justify-center',
	// 		'h-12 w-12 rounded',
	// 		'hover:bg-white invert hover:invert-0',
	// 		'transition'
	// 	].join(' ')}
	// 	href={getSocialLink(props.social)}
	// 	title={props.social}
	// >
	// 	<img class="w-7" src={getSocialIcon(props.social)} alt={props.social} />
	// </a>
);

export default Footer;
