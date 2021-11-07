import { FC } from 'react';

import classes from './Button.module.scss';

export interface ButtonProps {}

const Button: FC<ButtonProps> = ({ children }) => (
  <button className={classes.Container}>{children}</button>
);

export default Button;
