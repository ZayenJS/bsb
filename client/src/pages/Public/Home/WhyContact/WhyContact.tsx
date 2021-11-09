import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import img from '../../../../assets/images/home/jeunes-femmes-techniques-de-scientifiques-d-assistants-medecins-africains-travaillent-dans-le-laboratoire-physique-recherche.jpg';

import classes from './WhyContact.module.scss';

export interface WhyContactProps {}

const WhyContact: FC<WhyContactProps> = () => {
  return (
    <div className={classes.Container}>
      <Heading tag="h2" uppercased>
        Pourquoi contacter Brownskin Beauty ?
      </Heading>
      <div className={classes.Content}>
        <div className={classes.Image_Container}>
          <img src={img} alt="jeunes femmes scientifiques travaillant" loading="lazy" />
        </div>
        <div>
          <p>Nous sommes faits pour travailler ensemble si:</p>
          <ul className={classes.Text}>
            <li>
              Vous souhaitez créer des produits de soin, de maquillage, d’hygiène corporelle ou
              capillaires
            </li>
            <li>
              Vous avez envie de créer un produit spécifique qui répond aux problèmes de la
              communauté multiethnique (alopécie, hyperpigmentation, tâches liées au blanchiment,
              acné…)
            </li>
            <li>
              Vous avez une idée de produits avec des ingrédients actifs bien précis mais vous ne
              savez pas comment vous lancer
            </li>
            <li>
              Vous avez déjà un projet bien défini mais vous essuyez des refus de la part des
              laboratoires classiques, qui ne comprennent pas les caractéristiques des peaux noires,
              mates, métisses ou des cheveux texturés.
            </li>
          </ul>
        </div>
      </div>
      <p>
        La chimie est une passion pour moi. C’est ainsi que l’on rend possible ce qui est
        impossible. Nous vous aiderons à rayonner et à révéler votre potentiel dans les cosmétiques,
        tout en respectant vos envies.
      </p>
      <p>
        Vous bénéficierez donc d’un accompagnement sur mesure, telle que la conception de vos
        produits en alliant les bienfaits de la pharmacopée africaine et en utilisant l’innovation
        R&D française.
      </p>
      <cite>“Parce que toutes les peaux méritent le bonheur“</cite>
    </div>
  );
};

export default WhyContact;
