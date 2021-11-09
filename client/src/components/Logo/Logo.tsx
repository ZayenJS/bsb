import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import classes from './Logo.module.scss';

export interface LogoProps {
  size?: 'small' | 'medium' | 'big';
  href?: string;
}

const Logo: FC<LogoProps> = ({ size, href }) => {
  let className = classes.Container;

  switch (size) {
    case 'small':
      className += ` ${classes.Small}`;
      break;
    case 'medium':
      className += ` ${classes.Medium}`;
      break;
    case 'big':
      className += ` ${classes.Big}`;
      break;
    default:
      break;
  }

  return href ? (
    <NavLink className={() => className} to={href}>
      <img src={logo} alt="" />
    </NavLink>
  ) : (
    <div className={className}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
