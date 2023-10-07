import type { Component } from 'solid-js';

import AgodaLogo from '@assets/logos/agoda.svg'
import ViabusDark from '@assets/logos/viabus-wordmark-dark.svg'
import TedXMahidolU from '@assets/logos/tedx-mahidolu.svg'
import Empty from '@assets/logos/_empty.svg';

type Position = {
	title: string;
	startDate: Date;
	endDate?: Date;
}

type Props = {
	positions: Position[];
	slug: string;
};

const getPeakPosition = (positions: Props['positions']) => positions.at(0)?.title ?? 'Software Engineer';

const getLogo = (slug: Props['slug']): ImageMetadata => {
	const is = (name: string) => slug === name;
	if (is('agoda')) return AgodaLogo;
	if (is('viabus')) return ViabusDark;
	if (is('tedxmahidolu')) return TedXMahidolU;
	return Empty;
}

const getServiceYear = (positions: Props['positions']) => {
	const [start, end] = [positions.at(-1)?.startDate?.getFullYear(), positions.at(0)?.endDate?.getFullYear()]
	if (start === end) return `${start}`;
	return`${start} – ${end ?? 'Present'}`;
}

export const ExperienceCard: Component<Props> = (props) => (
	<div class="flex-auto md:flex-1 shadow-lg p-8 rounded">
		<div class="flex gap-4 md:block">
			<div class="w-20 h-12 flex items-center justify-start">
				<img src={getLogo(props.slug).src} class="max-h-8" />
			</div>
			<div>
				<h4 class="font-semibold text-lg">{getPeakPosition(props.positions)}</h4>
				<p class="text-sm">{getServiceYear(props.positions)}</p>
			</div>
		</div>
	</div>
);
