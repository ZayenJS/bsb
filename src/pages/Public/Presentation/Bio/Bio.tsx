import { FC, useEffect, useState } from 'react';
import Heading from '../../../../components/Heading/Heading';

import owner from '../../../../assets/images/presentation/FONDER-344x344.jpg';

import classes from './Bio.module.scss';
import Loader from '../../../../components/Loader/Loader';

export interface BioProps {}

const Bio: FC<BioProps> = () => {
  const [state, setState] = useState({ placeholderVisible: true });

  useEffect(() => {
    const timeout = setTimeout(
      () => setState((prevState) => ({ ...prevState, placeholderVisible: false })),
      750,
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className={classes.Container}>
      <Heading tag="h1" uppercased>
        Qui suis je?
      </Heading>
      <div className={classes.Image_Container}>
        {state.placeholderVisible && (
          <div className={classes.Placeholder}>
            <Loader />
          </div>
        )}
        <img src={owner} alt="Olivia Paul - fondatrice de Brownskin Beauty" />
      </div>
      <p>
        Je m’appelle Olivia Paul et je suis formulatrice cosmétique mais surtout la fondatrice de
        BrownSkin Beauty. C’est le premier laboratoire made in France qui travaille sur des formules
        destinées aux peaux noires, mates ou métissées. Passionnée par la chimie, j’ai intégré
        l’Escom puis obtenu mon diplôme d’ingénieure chimiste en 2010. J’ai acquis de solides
        connaissances et j’ai occupé les fonctions suivantes: Ingénieure R&D chez Chanel,
        responsable d’ateliers cosmétiques chez Aromazone et chargée de projet chez Elikya Beauty.
      </p>
      <p>
        J’ai décidé de créer BrownSkin Beauty en 2020 pour révolutionner le monde de la beauté afro
        et soutenir les marques de cosmétiques multiethniques. Forte de 10 ans d’expérience dans le
        domaine de la cosmétique, et plus de 8 années dans la formulation ethnique, je vous
        accompagne dans vos projets de A à Z.
      </p>
    </section>
  );
};

export default Bio;
