import { FC, useEffect, useState } from 'react';

import classes from './TopArrow.module.scss';

export interface TopArrowProps {}

const TopArrow: FC<TopArrowProps> = () => {
  const [state, setState] = useState({ isVisible: false });

  useEffect(() => {
    const topBar = document.getElementById('top-bar');

    if (topBar) {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (!isIntersecting) {
          setState((prevState) => ({ ...prevState, isVisible: true }));
          return;
        }

        setState((prevState) => ({ ...prevState, isVisible: false }));
      });

      observer.observe(topBar);

      return () => {
        observer.unobserve(topBar);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`${classes.Container} ${state.isVisible ? classes.Visible : ''}`}></button>
  );
};

export default TopArrow;
