import type { ParentComponent } from 'solid-js';

type Props = {
	href: string;
	class?: string;
};

const Link: ParentComponent<Props> = (props) => (
	// we can use `classList` later
	<a href={props.href} class="underline decoration-dotted underline-offset-4 hover:text-white transition">
		{props.children}
	</a>
);

export default Link;
