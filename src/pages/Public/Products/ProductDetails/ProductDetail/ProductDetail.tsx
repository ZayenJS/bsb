import { FC } from 'react';
import Heading from '../../../../../components/Heading/Heading';

import classes from './ProductDetail.module.scss';

export interface ProductDetailProps {
  title: string;
  src: string;
  content: JSX.Element;
}

const ProductDetail: FC<ProductDetailProps> = ({ content, src, title }) => {
  return (
    <article className={classes.Container}>
      <header>
        <Heading tag="h2">{title}</Heading>
        <div className={classes.Img}>
          <img src={src} alt="" />
        </div>
      </header>
      {content}
    </article>
  );
};

export default ProductDetail;
