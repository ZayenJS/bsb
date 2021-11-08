import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ProductDetail from './ProductDetail/ProductDetail';

import care from '../../../../assets/images/products/care-150x150.jpg';
import nuxe from '../../../../assets/images/products/nuxe-visuel-150x150.jpg';
import hygiene from '../../../../assets/images/products/hygiene-150x150.jpeg';
import makeup from '../../../../assets/images/products/makeup-150x150.jpg';
import sun from '../../../../assets/images/products/sun-150x150.jpg';

import classes from './ProductDetails.module.scss';

export interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const products = [
    { title: 'Soin', src: care, content: <p>crème, gel, lotion, masque, gommage...</p> },
    {
      title: 'Capillaire',
      src: nuxe,
      content: <p>shampoing, après-shampoing, masque, leave-in, sérum, huile...</p>,
    },
    {
      title: 'Hygiène',
      src: hygiene,
      content: <p>gel douche, savon, nettoyant, démaquillant...</p>,
    },
    {
      title: 'Maquillage',
      src: makeup,
      content: (
        <ul>
          <li>
            <em>Teint:</em> fond de teint, poudre, blush, concealer...
          </li>
          <li>
            <em>Yeux:</em> eye-liner, mascara, fard à paupières...
          </li>
          <li>
            <em>Lèvres:</em> rouge à lèvre, gloss...
          </li>
        </ul>
      ),
    },
    { title: 'Solaire', src: sun, content: <p>crème, huile...</p> },
  ];

  return (
    <section className={classes.Container}>
      {products.map((product) => (
        <ProductDetail
          key={uuidv4()}
          title={product.title}
          src={product.src}
          content={product.content}
        />
      ))}
    </section>
  );
};

export default ProductDetails;
