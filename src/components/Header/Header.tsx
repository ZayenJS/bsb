import { FC, useState } from 'react';
import CampaignBar from './CampaignBar/CampaignBar';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import TopBar from './TopBar/TopBar';

import classes from './Header.module.scss';
import { useHideCampaignBar } from '../../hooks/useHideCampaignBar';
import { useTopBar } from '../../hooks/useTopBar';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [state, setState] = useState({ isMountedTopBarMounted: true });
  const { hideCampaignBar, isCampaignBarVisible } = useHideCampaignBar();

  const headerContentFixed = useTopBar();

  const clickHandler = () => {
    hideCampaignBar();
    setTimeout(
      () => setState((prevState) => ({ ...prevState, isMountedTopBarMounted: false })),
      500,
    );
  };

  return (
    <header className={classes.Container}>
      {state.isMountedTopBarMounted && (
        <CampaignBar
          onClick={clickHandler}
          className={`${classes.CampaignBar} ${
            isCampaignBarVisible ? '' : classes.CampaignBar_Hidden
          }`}
        />
      )}
      <TopBar />
      <div
        className={`${classes.Content_Container} ${
          isCampaignBarVisible ? '' : classes.CampaignBar_Hidden
        }  ${headerContentFixed ? classes.Fixed : ''}`}>
        <div className={classes.Content}>
          <Logo href="/" size="medium" />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
