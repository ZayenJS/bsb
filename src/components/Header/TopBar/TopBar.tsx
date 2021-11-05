import { FC } from 'react';

import classes from './TopBar.module.scss';

export interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  return (
    <div className={classes.Container}>
      <ul>
        <li role="img">
          <a
            href="https://www.facebook.com/BrownSkinBeautybsb"
            target="_blank"
            rel="noopener noreferrer">
            <span className={classes.Facebook}></span>
          </a>
        </li>
        <li role="img">
          <a
            href="https://instagram.com/brownskinbeauty_bsb?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer">
            <span className={classes.Instagram}></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
