import GlobalLayout from '@layouts/GlobalLayout';
import type { NextPage } from 'next';

import { GenericBlock } from '@constants/classNames';

const Home: NextPage = () => {
	return (
		<GlobalLayout>
			<div className={GenericBlock}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
				facere dolore dolores quam praesentium reiciendis tempora autem
				temporibus nisi sequi, consequuntur sit veniam modi neque? Et
				nam neque natus illum?
			</div>
		</GlobalLayout>
	);
};

export default Home;
