import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Blog: NextPage = props => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className="text-3xl font-bold underline">
			{JSON.stringify(props.todo)}
		</div>
	);
};

export async function getStaticPaths() {
	const todos = await fetch(
		'https://jsonplaceholder.typicode.com/todos'
	).then(res => res.json());

	const paths = todos.map(todo => ({
		params: {
			slug: todo.id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${params.slug}`
	);
	const todo = await res.json();

	return { props: { todo } };
}

export default Blog;
