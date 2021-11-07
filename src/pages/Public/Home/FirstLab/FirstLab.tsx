import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import classes from './FirstLab.module.scss';

export interface FirstLabProps {}

const FirstLab: FC<FirstLabProps> = () => {
  return (
    <div className={classes.Container}>
      <div>
        <Heading tag="h1" uppercased>
          1er laboratoire français de formulation cosmétique dédié à la beauté éthnique
        </Heading>
        <p className={classes.Subtitle}>
          BrownSkin Beauty souhaite accompagner ses clients particuliers ou professionnels en
          apportant une expertise cosmétique pour les peaux noires, mates et métissées
        </p>
      </div>
      <div className={classes.Images}>
        <article>
          <figure>
            <div></div>
            <figcaption>
              Pour lancer votre propre marque de cosmétique correspondant à vos besoins et valeurs
            </figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <div></div>
            <figcaption>Optimiser la création et le développement de vos produits</figcaption>
          </figure>
        </article>
        <article>
          <figure>
            <div></div>
            <figcaption>
              Résoudre les problèmes de formulation, de réglementaire ou encore de fabrications
              produit
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  );
};

export default FirstLab;
