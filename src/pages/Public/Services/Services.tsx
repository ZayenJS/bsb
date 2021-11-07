import { FC } from 'react';

import classes from './Services.module.scss';
import ServicesDetails from './ServicesDetails/ServicesDetails';

export interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <div className={classes.Container}>
      <figure></figure>
      <ServicesDetails />
    </div>
  );
};

export default Services;
