import { FC, useState } from 'react';
import CampaignBar from './CampaignBar/CampaignBar';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import TopBar from './TopBar/TopBar';

import classes from './Header.module.scss';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [state, setState] = useState({ isCampaignBarVisible: true });

  const hideCampaignBar = () =>
    setState((prevState) => ({ ...prevState, isCampaignBarVisible: false }));

  return (
    <header className={classes.Container}>
      <CampaignBar
        onClick={hideCampaignBar}
        className={`${classes.CampaignBar} ${
          state.isCampaignBarVisible ? '' : classes.CampaignBar_Hidden
        }`}
      />
      <TopBar />
      <div className={classes.Content_Container}>
        <div className={classes.Content}>
          <Logo href="/" size="medium" />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
