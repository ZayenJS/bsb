import { AnimationEvent, FC, useEffect, useState } from 'react';

import classes from './Notification.module.scss';

export interface NotificationProps {
  hasError: boolean;
  duration?: number;
  resetNotification: () => void;
}

interface NotificationState {
  className: string | null;
  isMounted: boolean;
}

const Notification: FC<NotificationProps> = ({
  duration = 2500,
  hasError,
  children,
  resetNotification,
}) => {
  const [state, setState] = useState<NotificationState>({
    className: `${classes.Visible} ${hasError ? classes.Error : classes.Success}`,
    isMounted: true,
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (state.isMounted) {
      timeout = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          className: `${hasError ? classes.Error : classes.Success} ${classes.Hidden}`,
          isMounted: false,
        }));
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [duration, hasError, state.isMounted]);

  const animationStartHandler = (event: AnimationEvent) => {
    const target = event.target as HTMLDivElement;

    if (target.classList.contains(classes.Visible))
      setState((prevState) => ({ ...prevState, isMounted: true }));
  };

  const animationEndHandler = (event: AnimationEvent) => {
    const target = event.target as HTMLDivElement;

    if (target.classList.contains(classes.Hidden)) resetNotification();
  };

  return (
    <div
      onAnimationStart={animationStartHandler}
      onAnimationEnd={animationEndHandler}
      className={`${classes.Container} ${state.className}`}>
      {children}
    </div>
  );
};

export default Notification;
