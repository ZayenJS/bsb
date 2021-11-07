import { FC } from 'react';
import Heading from '../../../components/Heading/Heading';
import LetsMeet from '../../../components/LetsMeet/LetsMeet';

import classes from './Contact.module.scss';

export interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Image}>
        <div>
          <Heading tag="h1" uppercased>
            Rencontrons-nous !
          </Heading>
          <a href="#message">Contact</a>
        </div>
      </div>
      <LetsMeet>
        <p>
          Chez Brown Skin Beauty, aucun projet n’est stupide ! Venez nous confier vos projets, et
          nous vous conseillerons de la meilleure façon.
        </p>
        <p>
          Besoin d’aide sur la formulation de vos produits ? Échangeons ensemble avec joie et bonne
          humeur.
        </p>
        <p>Remplissez le formulaire et nous reviendrons vers vous.</p>
      </LetsMeet>
    </div>
  );
};

export default Contact;
