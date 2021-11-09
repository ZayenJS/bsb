import { FC } from 'react';
import { useDrawer } from '../../hooks/useDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Navigation from '../Header/Navigation/Navigation';

import classes from './Drawer.module.scss';
import Cross from '../Cross/Cross';

export interface DrawerProps {}

const Drawer: FC<DrawerProps> = () => {
  const { drawerVisible, changeDrawerStatus } = useDrawer();

  const closeDrawer = () => {
    changeDrawerStatus(false);
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
      </aside>
    </>
  );
};

export default Drawer;
