import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../../../constants';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

import classes from './Services.module.scss';
import ServicesDetails from './ServicesDetails/ServicesDetails';

export interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  useScrollToTop();

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Services | {WEBSITE_NAME} </title>
      </Helmet>
      <figure></figure>
      <ServicesDetails />
    </div>
  );
};

export default Services;
