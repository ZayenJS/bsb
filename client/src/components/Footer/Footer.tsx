import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import OwnerInfos from '../OwnerInfos/OwnerInfos';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

import classes from './Footer.module.scss';

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={classes.Container}>
      <div className={classes.Content}>
        <div className={classes.Top}>
          <Logo href="/" size="big" className={classes.Logo} />
          <SocialNetworks size="Medium" displayHeading />
        </div>
        <ul className={classes.Links}>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/politiques-de-confidentialite">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
