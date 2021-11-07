import { FC } from 'react';
import Heading from '../../../../components/Heading/Heading';

import image1 from '../../../../assets/images/services/scientifique-africain-travailleur-medical-technique-ou-de-l-etudiant-diplome-travaille-en-laboratoir-1-150x150.jpg';
import image2 from '../../../../assets/images/services/analysis-150x150.jpg';
import image3 from '../../../../assets/images/services/reglementation-150x150.png';
import image4 from '../../../../assets/images/services/production-150x150.jpg';

import classes from './ServicesDetails.module.scss';
import ServiceDetail from './ServiceDetail/ServiceDetail';

export interface ServicesDetailsProps {}

const ServicesDetails: FC<ServicesDetailsProps> = () => {
  return (
    <section className={classes.Container}>
      <Heading tag="h1" uppercased>
        Services
      </Heading>
      <p>
        Vous avez besoin d’aide dans le domaine de la cosmétique pour peaux noires, mates et
        métissés, BrownSkin Beauty suit chaque étape de la création de vos produits, du
        développement à la petite fabrication.
      </p>
      <ServiceDetail
        title="Recherche et conception"
        src={image1}
        list={[
          'Elaboration et rédaction du cahier des charges (il restranscrit avec précision vos attentes) et du rétroplanning',
          'Sourcing des matières premières: recherche de nouveau actif et de nouvelles matières innovantes en respectant votre budget et vos revendications',
          'Formulation et soumission: recherche de la formule optimale',
        ]}
        info="Je propose différentes possibilités en fonctions de vos besoins: formules sur mesure ou reformulation de vos produits existants"
      />
      <ServiceDetail
        title="Test et validation"
        src={image2}
        list={[
          'Suivi de stabilité et de compatibilité: c’est l’assurance de la stabilité et l’absence d’interactions avec le packaging final. Pour cela, on effectue un vieillissement accéléré du produit: 3 mois en haute température pour simuler 3 ans en température ambiante',
          'Evaluation de la sécurité et test nécessaire à la mise sur le marché du produit cosmétique (test d’innocuité, test microbiologique, test d’efficacité) ainsi qu’une évaluation toxicologique réalisé par un toxicologue indépendant',
        ]}
      />
      <ServiceDetail
        title="reglementaire"
        src={image3}
        list={[
          'Rédaction du DIP (Dossier Information Produit): c’est la carte d’identité du produit à tenir à disposition des autorités compétentes',
          'Enregistrement sur le portail européen',
          'Accompagnement dans la rédaction des packagings',
        ]}
      />
      <ServiceDetail
        title="Fabrication et conditionnement"
        src={image4}
        list={[
          'Transposition industriel avec fabrication d’un lot pilote de 5kg afin de vérifier le transfert industriel de la formule validée avec vous',
          'Production et conditionnement des différentes textures sans minimum de commande dans le packaging de votre choix: idéal pour réaliser des petites séries pour débuter',
        ]}
      />
    </section>
  );
};

export default ServicesDetails;
