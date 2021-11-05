import { FC } from 'react';
import Cross from '../../Cross/Cross';

import classes from './CampaignBar.module.scss';

export interface CampaignBarProps {
  className?: string;
  onClick: () => void;
}

const CampaignBar: FC<CampaignBarProps> = ({ className, onClick }) => {
  const campaignBarTexts = [
    '“Oui à la beauté inclusive”',
    '“Parce que toutes les peaux méritent le bonheur”',
    '“Pour le respect de toutes les peaux”',
  ];
  return (
    <div className={`${classes.Container} ${className ?? ''}`}>
      <strong>{campaignBarTexts[0]}</strong>
      <Cross className={classes.Cross} onClick={onClick} />
    </div>
  );
};

export default CampaignBar;
