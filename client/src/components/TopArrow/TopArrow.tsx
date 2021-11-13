import { FC } from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useTopArrow } from '../../hooks/useTopArrow';

import classes from './TopArrow.module.scss';

export interface TopArrowProps {}

const TopArrow: FC<TopArrowProps> = () => {
  const scrollToTop = useScrollToTop(false);
  const showArrow = useTopArrow();

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`${classes.Container} ${showArrow ? classes.Visible : ''}`}></button>
  );
};

export default TopArrow;
