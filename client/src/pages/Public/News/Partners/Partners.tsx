import { FC, useEffect, useState } from 'react';
import Heading from '../../../../components/Heading/Heading';
import ImageGallery from '../../../../components/ImageGallery/ImageGallery';
import { mediaQueries } from '../../../../constants';

import classes from './Partners.module.scss';

export interface PartnersProps {
  brands: { name: string; image: string }[];
}

interface PartnersState {
  rows: number;
  columns: number;
  spacing: [number, number];
}

const Partners: FC<PartnersProps> = ({ brands }) => {
  const [state, setState] = useState<PartnersState>({
    rows: 3,
    columns: 2,
    spacing: [0, 0],
  });

  useEffect(() => {
    if (mediaQueries['medium-width'].matches) {
      setState((prevState) => ({ ...prevState, rows: 2, columns: 3, spacing: [2, 2] }));
    }
  }, []);

  useEffect(() => {
    const mediumMQHandler = (event: MediaQueryListEvent) => {
      if (event.matches) {
        return setState((prevState) => ({ ...prevState, rows: 2, columns: 3, spacing: [2, 2] }));
      }

      return setState((prevState) => ({ ...prevState, rows: 3, columns: 2, spacing: [0, 0] }));
    };

    mediaQueries['medium-width'].addEventListener('change', mediumMQHandler);

    return () => mediaQueries['medium-width'].removeEventListener('change', mediumMQHandler);
  }, []);

  return (
    <section className={classes.Container}>
      <Heading tag="h1" uppercased>
        Ils travaillent avec nous
      </Heading>
      <ImageGallery
        columns={state.columns}
        rows={state.rows}
        spacing={state.spacing}
        images={brands.map((brand) => brand.image)}
      />
    </section>
  );
};

export default Partners;
