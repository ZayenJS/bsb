import { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mediaQueries } from '../constants';
import { changeTopBarVisibility, GlobalActions } from '../store/actions';
import { State } from '../store/reducers';

export const useTopBar = () => {
  const { isTopBarVisible } = useSelector((state: State) => state.global);
  const dispatch = useDispatch();

  const observeElement = (element: Element, dispatch: Dispatch<GlobalActions>) => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        dispatch(changeTopBarVisibility({ visible: true }));
        return;
      }
      dispatch(changeTopBarVisibility({ visible: false }));
    });
    observer.observe(element);

    return observer;
  };

  useEffect(() => {
    let element: HTMLElement | null = null;
    let observer: IntersectionObserver;

    element = document.getElementById('campaign-bar');
    if (mediaQueries['large-width'].matches) {
      element = document.getElementById('top-bar');
    }
    if (element) observer = observeElement(element, dispatch);

    mediaQueries['large-width'].addEventListener('change', (event) => {
      element = document.getElementById('campaign-bar');

      if (event.matches) {
        element = document.getElementById('top-bar');
      }

      if (element) observer = observeElement(element, dispatch);
    });

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [dispatch]);

  return isTopBarVisible;
};
