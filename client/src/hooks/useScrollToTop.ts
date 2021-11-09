import { useEffect } from 'react';

export const useScrollToTop = (onComponentLoad: boolean = true) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (onComponentLoad) scrollToTop();
  }, [onComponentLoad]);

  return scrollToTop;
};
