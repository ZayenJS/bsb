import { FC } from 'react';

import classes from './FormulateDesires.module.scss';

export interface FormulateDesiresProps {}

const FormulateDesires: FC<FormulateDesiresProps> = () => (
  <div className={classes.Container}>Formulez vos envies...</div>
);

export default FormulateDesires;
