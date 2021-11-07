import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import product from '../../../../assets/images/home/product-150x150.jpg';
import madeInFrance from '../../../../assets/images/home/made-in-france-150x150.png';

import classes from './HomeProducts.module.scss';

export interface HomeProductsProps {}

const HomeProducts: FC<HomeProductsProps> = () => {
  return (
    <section className={classes.Container}>
      <Heading tag="h2" uppercased>
        Produits
      </Heading>
      <strong>soin, capillaire, maquillage, hygiène, solaire</strong>
      <em>Conventionnel ou naturel</em>
      <div>
        <img src={product} alt="illustration mettant en scène des produits cosmétiques" />
      </div>
      <div>
        <img src={madeInFrance} alt="logo made in france" />
      </div>
    </section>
  );
};

export default HomeProducts;
