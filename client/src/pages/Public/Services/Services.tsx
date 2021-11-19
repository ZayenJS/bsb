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
        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-156091955-1"></script>
        <script src="public/js/google-analytics.min.js" defer></script>
        <title>Services | {WEBSITE_NAME} </title>
      </Helmet>
      <figure></figure>
      <ServicesDetails />
    </div>
  );
};

export default Services;
