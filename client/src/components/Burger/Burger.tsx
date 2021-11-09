import { FC } from 'react';
import { useDrawer } from '../../hooks/useDrawer';

import classes from './Burger.module.scss';

export interface BurgerProps {}

const Burger: FC<BurgerProps> = () => {
  const { changeDrawerStatus } = useDrawer();
  return (
    <div onClick={() => changeDrawerStatus(true)} className={classes.Container}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
