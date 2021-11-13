import { FC } from 'react';
import { useBlockScroll } from '../../hooks/useBockScroll';
import { useDrawer } from '../../hooks/useDrawer';

import classes from './Burger.module.scss';

export interface BurgerProps {}

const Burger: FC<BurgerProps> = () => {
  const { changeDrawerStatus } = useDrawer();
  const { blockScroll } = useBlockScroll();

  const onClickHandler = () => {
    changeDrawerStatus(true);
    blockScroll();
  };

  return (
    <div onClick={onClickHandler} className={classes.Container}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
