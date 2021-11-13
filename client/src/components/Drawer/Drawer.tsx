import { FC } from 'react';
import { useDrawer } from '../../hooks/useDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Navigation from '../Header/Navigation/Navigation';

import classes from './Drawer.module.scss';
import Cross from '../Cross/Cross';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import { useBlockScroll } from '../../hooks/useBockScroll';

export interface DrawerProps {}

const Drawer: FC<DrawerProps> = () => {
  const { drawerVisible, changeDrawerStatus } = useDrawer();
  const { unblockScroll } = useBlockScroll();

  const closeDrawer = () => {
    changeDrawerStatus(false);
    unblockScroll();
  };
  return (
    <>
      <Backdrop visible={drawerVisible} onClick={closeDrawer} />
      <aside className={`${classes.Container} ${drawerVisible ? classes.Visible : ''}`}>
        <Cross onClick={closeDrawer} className={classes.Cross} />
        <div className={classes.Image_Container}>
          <strong>Brownskin Beauty</strong>
        </div>
        <Navigation onLinkClick={closeDrawer} className={classes.Navigation} />
        <SocialNetworks displayHeading className={classes.Social_Networks} />
      </aside>
    </>
  );
};

export default Drawer;
