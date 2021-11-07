import { FC } from 'react';

import classes from './News.module.scss';

export interface NewsProps {}

const News: FC<NewsProps> = () => {
	return (
		<div className={classes.Container}>News Component</div>
	);
}

export default News;