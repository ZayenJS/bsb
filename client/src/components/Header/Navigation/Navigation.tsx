import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

export interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ className, onLinkClick }) => {
  const links = [
    {
      text: 'Accueil',
      href: '/',
    },
    {
      text: 'Presentation',
      href: '/presentation',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Produits',
      href: '/produits',
    },
    {
      text: 'Actualités',
      href: '/actualites',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <nav className={`${classes.Container} ${className ?? ''}`}>
      <ul className={classes.List}>
        {links.map(({ href, text }) => (
          <li key={href}>
            <NavLink
              onClick={onLinkClick}
              className={({ isActive }) => (isActive ? classes.Active : '')}
              to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
