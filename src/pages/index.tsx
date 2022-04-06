import React from 'react';
import GlobalLayout from '../layouts/GlobalLayout/GlobalLayout';

const IndexPage: React.FC = () => {
	return (
		<GlobalLayout>
			<main>
				<h1 className="font-sans hover:font-heading">
					Hello, it's Thammarith!
				</h1>
			</main>
		</GlobalLayout>
	);
};

export default IndexPage;
