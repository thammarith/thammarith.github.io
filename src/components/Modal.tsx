import { onCleanup, onMount, type FlowComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

export type ModalProps = {
	onClose: () => any;
	classList?: string;
};

export const Modal: FlowComponent<ModalProps> = (props) => {
	let ref: HTMLDialogElement = undefined as unknown as HTMLDialogElement;

	const onClose = () => {
		document.querySelector('body')?.classList.remove('modal--open');
		props.onClose();
	};

	onMount(() => {
		document.querySelector('body')?.classList.add('modal--open');
		ref?.showModal();
		ref?.addEventListener('close', onClose);
	});

	onCleanup(() => {
		ref?.removeEventListener('close', onClose);
	});

	return (
		<Portal>
			<dialog
				class="fixed p-12 backdrop:backdrop-blur-sm rounded-md"
				classList={{
					[props.classList ?? '']: !!props.classList,
				}}
				ref={ref}
			>
				<button
					class="absolute top-4 right-4 opacity-50 hover:opacity-100 hover:text-red-500"
					title="Close"
					onClick={onClose}
				>
					<i class="fa-regular fa-xmark"></i>
				</button>
				{props.children}
			</dialog>
		</Portal>
	);
};
