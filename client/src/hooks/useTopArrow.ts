import { useEffect, useState } from 'react';

export const useTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const element = document.getElementById('top');

    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];

        setShowArrow(!isIntersecting);
      },
      { rootMargin: '100px' },
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  });

  return showArrow;
};
