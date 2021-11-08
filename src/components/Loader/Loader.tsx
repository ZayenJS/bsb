import { FC } from 'react';

import classes from './Loader.module.scss';

export interface LoaderProps {
  type?: 'initial' | 'dots';
}

const Loader: FC<LoaderProps> = ({ type = 'initial' }) => {
  switch (type) {
    case 'dots':
      return (
        <div className={classes.Loading_Dots}>
          <div className={classes.Dot}></div>
          <div className={classes.Dot}></div>
          <div className={classes.Dot}></div>
        </div>
      );
    default:
      return <div className={classes.Container}></div>;
  }
};

export default Loader;
