import { FC } from 'react';

import classes from './Button.module.scss';

export interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => (
  <button className={`${classes.Container} ${className ?? ''}`}>{children}</button>
);

export default Button;
