import { FC } from 'react';
import { useMobile } from '../../hooks/useMobile';

import classes from './OwnerInfos.module.scss';

export interface OwnerInfosProps {
  displayName?: boolean;
  displayMail?: boolean;
}

const OwnerInfos: FC<OwnerInfosProps> = ({ displayName = false, displayMail = false }) => {
  const isMobile = useMobile();

  return (
    <address className={classes.Container}>
      {displayName && <p>Mme Olivia PAUL</p>}
      <div>
        <span>15 rue de la mare aux moines</span>
        <span>91350 GRIGNY</span>
      </div>
      {isMobile ? (
        <a className={classes.Call} href="tel: 0646359024">
          Appeller
        </a>
      ) : (
        <span>+33(0)6 46 35 90 24</span>
      )}
      {displayMail && <span>oliviapaul@brownskinbeauty.fr</span>}
    </address>
  );
};

export default OwnerInfos;
