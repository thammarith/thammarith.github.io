import type { Component } from 'solid-js';

export const socials = [
	'LinkedIn',
	'Twitter',
	'GitHub',
	'Instagram',
	'Medium',
] as const;

type Props = {
	social: typeof socials[number];
};

const getSocialLink = (social: Props['social']) => {
	const https = (_: string) => `https://${_}thammarith`;

	switch (social) {
		case 'GitHub': return https('github.com/');
		case 'Instagram': return https('instagram.com/');
		case 'LinkedIn': return https('linkedin.com/in/');
		case 'Medium': return https('medium.com/@');
		case 'Twitter': return https('twitter.com/');
	}
};

const getSocialIcon = (social: Props['social']) => {
	switch (social) {
		case 'GitHub': return 'github';
		case 'Instagram': return 'instagram';
		case 'LinkedIn': return 'linkedin-in';
		case 'Medium': return 'medium';
		case 'Twitter': return 'twitter';
	}
};

const SocialButton: Component<Props> = (props) => (
	<a
		class={[
			'flex items-center justify-center',
			'h-12 w-12 rounded',
			'text-white hover:bg-white hover:text-slate-900',
			'transition'
		].join(' ')}
		href={getSocialLink(props.social)}
		title={props.social}
	>
		<i class={`text-[1.75rem] fa-brands fa-${getSocialIcon(props.social)}`} />
	</a>
);

export default SocialButton;
