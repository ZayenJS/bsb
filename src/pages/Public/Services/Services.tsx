import { FC } from 'react';

import classes from './Services.module.scss';

export interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
	return (
		<div className={classes.Container}>Services Component</div>
	);
}

export default Services;