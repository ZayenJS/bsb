import { FC } from 'react';
import Heading from '../../../components/Heading/Heading';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

import classes from './PrivacyPolicy.module.scss';

export interface PrivacyPolicyProps {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  useScrollToTop();

  return (
    <section className={classes.Container}>
      <Heading tag="h1">Politique de confidentialité</Heading>
      <Heading tag="h2">Liens hypertextes et cookies</Heading>
      <p>
        Le site www.brownskinbeauty.fr contient un certain nombre de liens hypertextes vers d’autres
        sites (partenaires, informations …) mis en place avec l’autorisation du propriétaire du
        site. Cependant, le propriétaire du site n’a pas la possibilité de vérifier le contenu des
        sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques
        éventuels de contenus illicites.
      </p>
      <p>
        L’utilisateur est informé que lors de ses visites sur le site www.brownskinbeauty.fr un ou
        des cookies sont susceptibles de s’installer automatiquement sur son ordinateur. Un cookie
        est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais
        qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les
        données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont
        également vocation à permettre diverses mesures de fréquentation.
      </p>
      <p>
        Nous utilisons à des fins statistiques l’outil de mesure Google Analytics. Le service
        proposé par Google Inc. emploie, lorsque vous en avez donné l’accord, la technologie des
        cookies à des fins de mesure d’audience.
      </p>
      <p>
        Vous pouvez consulter les conditions générales de{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://marketingplatform.google.com/about/analytics/terms/fr/">
          Google Analytics.
        </a>
      </p>
      <Heading tag="h2">
        Protection des biens et des personnes – gestion des données personnelles
      </Heading>
      <p>
        Les informations recueillies par le biais de nos formulaires de contact sont enregistrées
        dans un fichier informatisé par Brownskin Beauty pour faciliter les échanges avec les
        prospects et clients de l’établissement.
      </p>
      <p>
        Elles sont destinées à tout gérant/employé de l’établissement susceptible d’avoir un échange
        téléphonique ou par messagerie électronique avec les personnes concernées, notamment pour
        répondre à leur demande.
      </p>
      <p>
        Aucune adresse IP n’est collectée lors de l’envoi d’un formulaire par le biais de notre site
        Internet.
      </p>
      <p>
        Les données collectées sont conservées pendant une durée maximale de 3 ans en cas de non
        conclusion d’un contrat avec notre société.
      </p>
      <p>
        Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978
        relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit
        d’accès, de rectification, de suppression et d’opposition aux données personnelles le
        concernant.
      </p>
      <p>Pour l’exercer, adressez votre demande par courrier à :</p>
      <address>
        BrownSkin Beauty
        <br />
        15 rue de la mare aux moines
        <br />
        91350 GRIGNY
        <br />
      </address>
      <p>
        La demande doit être écrite et signée, accompagnée d’une copie du titre d’identité avec
        signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être
        envoyée.
      </p>
      <p>
        Aucune information personnelle de l’utilisateur du site www.brownskinbeauty.fr n’est publiée
        à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à
        des tiers. Seule l’hypothèse du rachat du site www.brownskinbeauty.fr au propriétaire du
        site et de ses droits permettrait la transmission des dites informations à l’éventuel
        acquéreur qui serait à son tour tenu de la même obligation de conservation et de
        modification des données vis à vis de l’utilisateur du site www.brownskinbeauty.fr.
      </p>
      <p>
        Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998
        transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases
        de données.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
