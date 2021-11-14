import { FC } from 'react';

import classes from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className, disabled }) => (
  <button disabled={disabled} className={`${classes.Container} ${className ?? ''}`}>
    {children}
  </button>
);

export default Button;
