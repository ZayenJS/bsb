import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

export interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
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
    <nav className={classes.Container}>
      <ul className={classes.List}>
        {links.map(({ href, text }) => (
          <li key={href}>
            <NavLink className={({ isActive }) => (isActive ? classes.Active : '')} to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
