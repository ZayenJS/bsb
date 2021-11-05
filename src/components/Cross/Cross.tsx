import { FC } from 'react';

import classes from './Cross.module.scss';

export interface CrossProps {
  className?: string;
  onClick: () => void;
}

const Cross: FC<CrossProps> = ({ className, onClick }) => {
  return <div onClick={onClick} className={`${classes.Container} ${className ?? ''}`}></div>;
};

export default Cross;
