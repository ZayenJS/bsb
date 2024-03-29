import { FC } from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../../components/Heading/Heading';
import { WEBSITE_NAME } from '../../../constants';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import ProductDetails from './ProductDetails/ProductDetails';

import classes from './Products.module.scss';

export interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  useScrollToTop();

  return (
    <div className={classes.Container}>
      <Helmet>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-156091955-1"></script>
        <script src="public/js/google-analytics.min.js" defer></script>
        <title>Produits | {WEBSITE_NAME} </title>
      </Helmet>
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
