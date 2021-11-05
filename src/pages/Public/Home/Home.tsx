import { FC } from 'react';

import classes from './Home.module.scss';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
	return (
		<div className={classes.Container}>Home Component</div>
	);
}

export default Home;