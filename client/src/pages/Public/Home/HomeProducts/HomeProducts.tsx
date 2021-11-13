import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import product from '../../../../assets/images/home/product-150x150.jpg';
import madeInFrance from '../../../../assets/images/home/made-in-france-150x150.png';

import classes from './HomeProducts.module.scss';
import { Link } from 'react-router-dom';

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
        <Link to="/produits">
          <img
            loading="lazy"
            src={product}
            alt="illustration mettant en scène des produits cosmétiques"
          />
        </Link>
      </div>
      <div>
        <img loading="lazy" src={madeInFrance} alt="logo made in france" />
      </div>
    </section>
  );
};

export default HomeProducts;
