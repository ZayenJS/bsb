import { FC } from 'react';

import classes from './Products.module.scss';

export interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
	return (
		<div className={classes.Container}>Products Component</div>
	);
}

export default Products;