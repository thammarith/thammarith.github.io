import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@components/NavBar/NavBar'));
const Footer = dynamic(() => import('@components/Footer/Footer'));

type Props = {
	withNavbar?: boolean;
	children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = (props: Props) => (
	<>
		<Head>
			<title>thammarith.dev</title>
			<meta name="description" content="thammarith.dev" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		{(props.withNavbar ?? true) && <NavBar />}

		<main>{props.children}</main>

		<Footer />
	</>
);

export default GlobalLayout;
