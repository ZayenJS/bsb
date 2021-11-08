import { FC } from 'react';
import Heading from '../../../components/Heading/Heading';
import ProductDetails from './ProductDetails/ProductDetails';

import classes from './Products.module.scss';

export interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Image}>
        <div>
          <em>En quoi pouvons nous vous aider?</em>
          <Heading tag="h1" uppercased>
            Produits
          </Heading>
        </div>
      </div>
      <ProductDetails />
    </div>
  );
};

export default Products;
