import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import classes from './CompanyValues.module.scss';

export interface CompanyValuesProps {}

const CompanyValues: FC<CompanyValuesProps> = () => {
  return (
    <section className={classes.Container}>
      <Heading tag="h2" uppercased>
        Nos valeurs
      </Heading>
      <Heading tag="h3" underlined>
        Bienveillance:
      </Heading>
      <p>
        Chez BrownSkin Beauty, aucun projet n’est stupide ! Venez me confier vos projets, et je vous
        conseillerai de la meilleure façon.
      </p>
      <Heading tag="h3" underlined>
        Ecoute & conseil:
      </Heading>
      <p>
        Je vous aiderai à trouver des solutions adaptées, quel que soit votre parcours (porteurs de
        projets, entreprise déjà lancée…) et votre projet. Je ferai des suivis personnalisés en
        fonction de vos besoins.
      </p>
      <Heading tag="h3" underlined>
        Accompagnement:
      </Heading>
      <p>
        Je resterai à vos côtés pour construire ensemble votre projet de création du produit de vos
        rêves.
      </p>
      <Heading tag="h3" underlined>
        Pédagogie
      </Heading>
      <p>Je ferai en sorte que vous compreniez toutes les étapes du processus de création</p>
    </section>
  );
};

export default CompanyValues;
