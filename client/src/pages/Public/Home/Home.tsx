import { FC, Key, useState } from 'react';
import { Helmet } from 'react-helmet';

import Carousel from '../../../components/Carousel/Carousel';
import FirstLab from './FirstLab/FirstLab';

import classes from './Home.module.scss';
import WhyInverst from './WhyInverst/WhyInverst';

import { carouselImages } from './data';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import WhyContact from './WhyContact/WhyContact';
import HomeServices from './HomeServices/HomeServices';
import FormulateDesires from '../../../components/FormulateDesires/FormulateDesires';
import { Link } from 'react-router-dom';
import HomeProducts from './HomeProducts/HomeProducts';
import LetsMeet from '../../../components/LetsMeet/LetsMeet';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { WEBSITE_NAME } from '../../../constants';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [state, setState] = useState({
    activeElement: carouselImages[0].id,
    carouselImages,
  });

  useScrollToTop();

  const carouselElementChangeHandler = (id: Key) => {
    setState((prevState) => ({ ...prevState, activeElement: id as string }));
  };

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Accueil | {WEBSITE_NAME} </title>
      </Helmet>
      <Carousel
        showArrowsOnHover
        showDotsOnHover
        duration={5000}
        onElementChange={carouselElementChangeHandler}
        className={classes.Carousel}
        autoplay
        pauseOnHover
        swipeable>
        {state.carouselImages.map((carouselImage) => (
          <CarouselImage
            className={classes.Carousel_Image}
            key={carouselImage.id}
            id={carouselImage.id}
            activeClass={state.activeElement === carouselImage.id ? classes.Active : ''}
            textContainerClass={carouselImage.textContainerClass}>
            <FormulateDesires />
            <figcaption>
              <strong>{carouselImage.text}</strong>
              <Link to={carouselImage.href}>En savoir plus</Link>
            </figcaption>
          </CarouselImage>
        ))}
      </Carousel>
      <section className={classes.FirstSection}>
        <FirstLab />
        <WhyInverst />
        <WhyContact />
      </section>
      <HomeServices />
      <HomeProducts />
      <LetsMeet>
        <p>
          Besoin d’aide sur la formulation de vos produits ? Échangeons ensemble avec joie et bonne
          humeur.
        </p>
        <p>Remplissez le formulaire et je reviendrais vers vous.</p>
      </LetsMeet>
    </div>
  );
};

export default Home;
