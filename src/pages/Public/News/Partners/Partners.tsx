import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';
import ImageGallery from '../../../../components/ImageGallery/ImageGallery';

import classes from './Partners.module.scss';

export interface PartnersProps {
  brands: { name: string; image: string }[];
}

const Partners: FC<PartnersProps> = ({ brands }) => {
  return (
    <section className={classes.Container}>
      <Heading tag="h1" uppercased>
        Ils travaillent avec nous
      </Heading>
      <ImageGallery
        columns={3}
        rows={2}
        spacing={[2, 2]}
        images={brands.map((brand) => brand.image)}
      />
    </section>
  );
};

export default Partners;
