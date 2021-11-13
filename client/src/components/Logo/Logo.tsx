import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import classes from './Logo.module.scss';

export interface LogoProps {
  size?: 'small' | 'medium' | 'big';
  href?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ size, href, className }) => {
  let elementClassName = classes.Container;

  switch (size) {
    case 'small':
      elementClassName += ` ${classes.Small}`;
      break;
    case 'medium':
      elementClassName += ` ${classes.Medium}`;
      break;
    case 'big':
      elementClassName += ` ${classes.Big}`;
      break;
    default:
      break;
  }

  if (className) elementClassName += ` ${className}`;

  return href ? (
    <NavLink className={() => elementClassName} to={href}>
      <img src={logo} alt="" />
    </NavLink>
  ) : (
    <div className={elementClassName}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
