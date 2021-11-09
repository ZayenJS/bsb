import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTopBarVisibility } from '../store/actions';
import { State } from '../store/reducers';

export const useTopBar = () => {
  const { isTopBarVisible } = useSelector((state: State) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    const topBar = document.getElementById('top-bar');

    if (topBar) {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (!isIntersecting) {
          dispatch(changeTopBarVisibility({ visible: true }));
          return;
        }

        dispatch(changeTopBarVisibility({ visible: false }));
      });

      observer.observe(topBar);

      return () => {
        observer.unobserve(topBar);
      };
    }
  }, [dispatch]);

  return isTopBarVisible;
};
