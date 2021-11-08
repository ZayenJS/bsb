import { FC } from 'react';
import Partners from './Partners/Partners';

import elikya from '../../../assets/images/news/elikya.jpg';
import glennys from '../../../assets/images/news/glennys.jpg';
import aFreeCurl from '../../../assets/images/news/a-free-curl.jpeg';
import musoya from '../../../assets/images/news/musoya.jpeg';
import tropicalMoon from '../../../assets/images/news/tropical-moon.jpeg';
import ewany from '../../../assets/images/news/ewany.jpeg';

import actubeauty from '../../../assets/images/news/actubeauty-150x150.jpg';
import specialchem from '../../../assets/images/news/specialchem-150x150.jpeg';

import classes from './News.module.scss';
import Heading from '../../../components/Heading/Heading';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../../../constants';

export interface NewsProps {}

const News: FC<NewsProps> = () => {
  useScrollToTop();

  const partners = [
    { name: 'Elikya', image: elikya },
    { name: "Glenny's", image: glennys },
    { name: 'A free curl', image: aFreeCurl },
    { name: 'Musoya', image: musoya },
    { name: 'Tropical moon', image: tropicalMoon },
    { name: 'Ewany', image: ewany },
  ];

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Actualités | {WEBSITE_NAME} </title>
      </Helmet>
      <Partners brands={partners} />
      <section>
        <Heading tag="h2" uppercased>
          Ils parlent de nous
        </Heading>

        <div className={classes.Articles}>
          <article>
            <Heading tag="h3">Actubeauty</Heading>
            <div>
              <a
                href={
                  'https://www.actubeauty.com/brownskin-beauty-la-societe-francaise-specialisee-dans-la-formulation-des-produits-cosmetiques-pour-la-peau-noire/'
                }
                target="_blank"
                rel="noopener noreferrer">
                <img src={actubeauty} alt="" />
              </a>
            </div>
            <p>Article sur les prémices de BrownSkin Beauty</p>
          </article>
          <article>
            <Heading tag="h3">SpecialChem</Heading>
            <div>
              <a
                href={
                  'https://cosmetics.specialchem.com/tech-library/article/key-considerations-while-formulating-for-dark-skin'
                }
                target="_blank"
                rel="noopener noreferrer">
                <img src={specialchem} alt="" />
              </a>
            </div>
            <p>Article sur la formulation des cosmétiques dédiés à la beauté étnique</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default News;
