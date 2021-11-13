import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Carousel from '../../../../components/Carousel/Carousel';
import CarouselImage from '../../../../components/CarouselImage/CarouselImage';
import Heading from '../../../../components/Heading/Heading';

import classes from './HomeServices.module.scss';

export interface HomeServicesProps {}

const HomeServices: FC<HomeServicesProps> = () => {
  return (
    <section className={classes.Container}>
      <Heading tag="h2" uppercased>
        Services
      </Heading>
      <p>
        Vous avez besoin d’aide dans le domaine de la cosmétique, BrownSkin Beauty suit chaque étape
        de la création de vos produits, du développement à la petite fabrication.
      </p>
      <Carousel
        onElementChange={() => ''}
        autoplay
        showArrows
        slide
        showDots
        pauseOnHover
        className={classes.Carousel}
        duration={2500}
        swipeable>
        <CarouselImage
          tag="a"
          href="/services"
          key={uuidv4()}
          id={uuidv4()}
          className={classes.Carousel_Image}
        />
        <CarouselImage
          tag="a"
          href="/services"
          key={uuidv4()}
          id={uuidv4()}
          className={classes.Carousel_Image}
        />
        <CarouselImage
          tag="a"
          href="/services"
          key={uuidv4()}
          id={uuidv4()}
          className={classes.Carousel_Image}
        />
      </Carousel>
    </section>
  );
};

export default HomeServices;
