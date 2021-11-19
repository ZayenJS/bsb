import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../../../constants';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import Bio from './Bio/Bio';
import CompanyValues from './CompanyValues/CompanyValues';

import classes from './Presentation.module.scss';

export interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => {
  useScrollToTop();

  return (
    <div className={classes.Container}>
      <Helmet>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-156091955-1"></script>
        <script src="public/js/google-analytics.min.js" defer></script>
        <title>Présentation | {WEBSITE_NAME} </title>
      </Helmet>
      <Bio />
      <CompanyValues />
    </div>
  );
};

export default Presentation;
