import type { Component } from 'solid-js';

import Link from './Link';

const ThaiWebRing = () => (
	<a class="block mt-12" href="https://webring.wonderful.software#thammarith.dev" title="วงแหวนเว็บ">
		<img class="w-8 h-8 opacity-80" alt="วงแหนเว็บ" src="https://webring.wonderful.software/webring.white.svg" />
	</a>
);

const Footer: Component = () => (
	<footer class="px-8 py-16 sm:px-16 bg-slate-900 flex flex-col flex-grow-0 items-center justify-center">
		<div class="relative w-full max-w-[72ch] text-white font-['Figtree']">
			<a
				href="/"
				class="inline-block px-4 py-2 -mx-4 -my-2 hover:bg-space-orange rounded transition"
			>
				<h2 class="text-slate-100 hover:text-white font-title font-semibold text-3xl">thammarith.dev</h2>
			</a>

			<div id="licence" class="font-text mt-12 text-slate-400">
				<div class="flex gap-1">
					<i class="text-2xl fa-brands fa-creative-commons" />
					<i class="text-2xl fa-brands fa-creative-commons-by" />
					<i class="text-2xl fa-brands fa-creative-commons-sa" />
				</div>
				<p class="mt-2">©&nbsp;{new Date().getFullYear()} Thammarith Likittheerameth</p>
				<p>
					Content licensed under the&nbsp;
					<Link href="https://creativecommons.org/licenses/by-sa/4.0">
						Creative Commons Attribution-ShareAlike 4.0 International Licence
					</Link> unless stated otherwise. <Link href="/licence">Royalties & how to reuse</Link>
				</p>
				<p class="mt-4">
					<Link href="https://github.com/thammarith/thammarith.github.io">
						Source code freely available on GitHub
					</Link>
					&nbsp;under the&nbsp;
					<Link href="https://github.com/thammarith/thammarith.github.io/blob/master/LICENCE">
						GNU General Public Licence v3.0
					</Link>
					<br />
					Crafted using <Link href="https://astro.build">Astro</Link> with love, care, passion, and occasional
					despair
				</p>
			</div>
		</div>
		<ThaiWebRing />
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
