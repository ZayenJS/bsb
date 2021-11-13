import { FC } from 'react';
import SocialNetworks from '../../SocialNetworks/SocialNetworks';

import classes from './TopBar.module.scss';

export interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  return (
    <div id="top-bar" className={classes.Container}>
      <SocialNetworks size="Small" className={classes.Social_Networks} />
    </div>
  );
};

export default TopBar;
