import { FC } from 'react';
import Bio from './Bio/Bio';
import CompanyValues from './CompanyValues/CompanyValues';

import classes from './Presentation.module.scss';

export interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => {
  return (
    <div className={classes.Container}>
      <Bio />
      <CompanyValues />
    </div>
  );
};

export default Presentation;
