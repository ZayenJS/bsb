import { useEffect, useState } from 'react';
import { mediaQueries } from '../constants';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMobile = true;

    if (mediaQueries['small-width'].matches) {
      isMobile = false;
    }

    setIsMobile(isMobile);

    const handleSmallMQ = (event: MediaQueryListEvent) => {
      if (event.matches) {
        return setIsMobile(false);
      }

      return setIsMobile(true);
    };

    mediaQueries['small-width'].addEventListener('change', handleSmallMQ);

    return () => mediaQueries['small-width'].removeEventListener('change', handleSmallMQ);
  }, []);

  return isMobile;
};
