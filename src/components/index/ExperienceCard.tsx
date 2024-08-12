import { createSignal, type Component } from 'solid-js';

import AgodaLogo from '@assets/logos/agoda.svg';
import ViabusDark from '@assets/logos/viabus-wordmark-dark.svg';
import TedXMahidolU from '@assets/logos/tedx-mahidolu.svg';
import Empty from '@assets/logos/_empty.svg';

import { Modal, type ModalProps } from '@components/Modal';

type Position = {
	title: string;
	startDate: Date;
	endDate?: Date;
};

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
};

const formatServiceYear = (date?: Date) => date?.toLocaleDateString('en-gb', { dateStyle: 'long' }) ?? 'present';

const getServiceYear = (positions: Props['positions']) => {
	const [start, end] = [positions.at(-1)?.startDate?.getFullYear(), positions.at(0)?.endDate?.getFullYear()];
	if (start === end) return `${start}`;
	return `${start} – ${end ?? 'present'}`;
};

export const ExperienceDetail: Component<ModalProps & Props> = (props) => (
	<Modal onClose={props.onClose} classList="min-w-[48dvw]">
		<img src={getLogo(props.slug).src} alt={props.slug} class="max-h-8" />
		<div class="mt-4">
			{props.positions
				.sort((a, b) => b.startDate.valueOf() - a.startDate.valueOf())
				.map((position) => (
					<>
						<h2 class="mt-2 font-semibold">{position.title}</h2>
						<p>
							({formatServiceYear(position.startDate)}&ndash;{formatServiceYear(position.endDate)})
						</p>
					</>
				))}
		</div>
	</Modal>
);

export const ExperienceCard: Component<Props> = (props) => {
	const [isShowingDialogue, setIsShowingDialogue] = createSignal(false);

	const openDialogue = () => {
		setIsShowingDialogue(() => true);
	};
	const closeDialogue = () => {
		setIsShowingDialogue(() => false);
	};

	return (
		<>
			{isShowingDialogue() && <ExperienceDetail onClose={closeDialogue} {...props} />}
			<div class="flex-auto md:flex-1 shadow-md p-8 rounded hover:cursor-pointer" onClick={openDialogue}>
				<div class="flex gap-4 md:block">
					<div class="w-20 h-12 flex items-center justify-start">
						<img src={getLogo(props.slug).src} alt={props.slug} class="max-h-8" />
					</div>
					<div>
						<h3 class="font-semibold text-lg">{getPeakPosition(props.positions)}</h3>
						<p class="text-sm">{getServiceYear(props.positions)}</p>
					</div>
				</div>
			</div>
		</>
	);
};
