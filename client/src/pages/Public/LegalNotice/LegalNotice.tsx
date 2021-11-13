import { FC } from 'react';
import Heading from '../../../components/Heading/Heading';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

import classes from './LegalNotice.module.scss';

export interface LegalNoticeProps {}

const LegalNotice: FC<LegalNoticeProps> = () => {
  useScrollToTop();

  return (
    <section className={classes.Container}>
      <Heading tag="h1">Mentions légales</Heading>
      <Heading tag="h2">Edition</Heading>
      <p>
        Directeur de la publication : Olivia PAUl
        <br />
        Coordonnées :
        <address>
          BrownSkin Beauty
          <br />
          15 rue de la mare aux moines
          <br />
          91350 GRIGNY
          <br />
        </address>
      </p>
      <Heading tag="h2">Hébergement et réalisation du site</Heading>
      <p>
        Le site www.brownskinbeauty.fr est hébergé par la société Hostinger:
        <br />
        adresse <br />
        Conception, design et développements: www.jimsagency.fr
      </p>
      <Heading tag="h2">Législation</Heading>
      <p>
        Droit d’auteur et propriété intellectuelle Selon la loi du 11 mars 1957 (art.41) et du code
        de la propriété intellectuelle du 1er juillet 1992, le site internet www.brownskinbeauty.fr
        (textes, éléments graphiques, photographies, etc.) constitue une œuvre protégée en France
        par le Code de la Propriété intellectuelle, et à l’étranger par les conventions
        internationales en vigueur sur le droit d’auteur.
      </p>
      <Heading tag="h2">Données à caractère personnel</Heading>
      <p>
        En application de la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers
        et aux libertés, l’internaute dispose du droit d’opposition (art. 26 de la loi), d’accès
        (art. 34 à 38 de la loi) et de rectification.
        <br />
        Pour exercer ce droit vous pouvez vous adresser à :<br />
        <address>
          BrownSkin Beauty
          <br />
          15 rue de la mare aux moines
          <br />
          91350 GRIGNY
          <br />
        </address>
        <Heading tag="h2">Informations</Heading>
        <p>
          La présence des liens hypertextes vers d’autres sites internet n’engage pas la
          responsabilité de Brownskin Beauty. Ces liens ne sont là qu’à titre indicatif.
        </p>
      </p>
    </section>
  );
};

export default LegalNotice;
