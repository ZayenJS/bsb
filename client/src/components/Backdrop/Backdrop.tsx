import { FC } from 'react';

import classes from './Backdrop.module.scss';

export interface BackdropProps {
  visible: boolean;
  onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = ({ visible, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${classes.Container} ${visible ? classes.Visible : ''}`}></div>
  );
};

export default Backdrop;
