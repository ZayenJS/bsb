import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import classes from './WhyInverst.module.scss';

export interface WhyInverstProps {}

const WhyInverst: FC<WhyInverstProps> = () => {
  return (
    <div className={classes.Container}>
      <Heading tag="h2" uppercased>
        Pourquoi investir dans les cosmétiques éthniques
      </Heading>
      <p>
        Aujourd’hui on trouve beaucoup plus de produits de beauté multiethniques dans le commerce.
        Cependant, le lancement d’une marque peut décourager les entrepreneurs du secteur, qui
        peuvent rencontrer les obstacles suivants: manque de statistiques, peu de formulation
        adaptée aux besoins de la peau noire et les cheveux crépus,…
      </p>
      <p>
        Et pourtant, les consommatrices afro-caribéennes dépensent plus en produits capillaires que
        les femmes caucasiennes: 80€ par mois, soit presque 1000€ l’année. De plus en plus
        exigeantes, ces dernières souhaitent des soins de qualité avec une composition claire et une
        formulation adéquate.
      </p>
      <p>
        BrownSkin Beauty vous aide à réaliser votre rêve: celui de créer des produits spécialement
        dédiés à la beauté ethnique, made in France. Parce que nos peaux et nos cheveux méritent
        d’être traités de la meilleure façon, nous vous accompagnerons avec plaisir dans votre
        projet.
      </p>
      <cite>“Révélez la beauté multiethnique dans le monde“</cite>
    </div>
  );
};

export default WhyInverst;
