import { FC } from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useTopBar } from '../../hooks/useTopBar';

import classes from './TopArrow.module.scss';

export interface TopArrowProps {}

const TopArrow: FC<TopArrowProps> = () => {
  const scrollToTop = useScrollToTop(false);
  const isTopBarVisible = useTopBar();

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`${classes.Container} ${isTopBarVisible ? classes.Visible : ''}`}></button>
  );
};

export default TopArrow;
