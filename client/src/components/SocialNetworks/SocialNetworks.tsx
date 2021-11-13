import { FC } from 'react';

import classes from './SocialNetworks.module.scss';

export interface SocialNetworksProps {
  displayHeading?: boolean;
  size?: 'Small' | 'Medium' | 'Big';
  className?: string;
}

const SocialNetworks: FC<SocialNetworksProps> = ({
  className,
  displayHeading = false,
  size = 'Medium',
}) => {
  return (
    <div className={`${classes.Container} ${className ?? ''}`}>
      {displayHeading && <strong>Suivez nous sur les réseaux !</strong>}
      <ul>
        <li role="img">
          <a
            className={`${classes.Facebook} ${classes[size]}`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/BrownSkinBeautybsb">
            <span></span>
          </a>
        </li>
        <li role="img">
          <a
            className={`${classes.Instagram} ${classes[size]}`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/brownskinbeauty_bsb">
            <span></span>
          </a>
        </li>
        <li role="img">
          <a
            className={`${classes.Linkedin} ${classes[size]}`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/brownskin-beauty/">
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworks;
