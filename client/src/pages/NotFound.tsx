import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../constants';

export interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  return (
    <>
      <Helmet>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-156091955-1"></script>
        <script src="public/js/google-analytics.min.js" defer></script>
        <title>Page introuvable | {WEBSITE_NAME}</title>
      </Helmet>
      <div>NotFound Component</div>
    </>
  );
};

export default NotFound;
