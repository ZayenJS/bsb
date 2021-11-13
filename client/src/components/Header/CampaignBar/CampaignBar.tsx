import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Cross from '../../Cross/Cross';

import classes from './CampaignBar.module.scss';

export interface CampaignBarProps {
  className?: string;
  onClick: () => void;
}

export interface CampaignBarText {
  id: string;
  text: string;
  className: string;
}

interface CampaignBarTextState {
  activeElId: string;
  campaignBarTexts: CampaignBarText[];
}

const CampaignBar: FC<CampaignBarProps> = ({ className, onClick }) => {
  const [state, setState] = useState<CampaignBarTextState>({
    activeElId: '',
    campaignBarTexts: [
      {
        id: uuidv4(),
        text: '“Oui à la beauté inclusive”',
        className: classes.Active,
      },
      {
        id: uuidv4(),
        text: '“Parce que toutes les peaux méritent le bonheur”',
        className: '',
      },
      {
        id: uuidv4(),
        text: '“Pour le respect de toutes les peaux”',
        className: '',
      },
    ],
  });

  useEffect(() => {
    if (!state.activeElId)
      setState((prevState) => ({ ...prevState, activeElId: state.campaignBarTexts[0].id }));
  }, [state.activeElId, state.campaignBarTexts]);

  useEffect(() => {
    const interval = setInterval(() => {
      const campaignBarTexts: CampaignBarText[] = JSON.parse(
        JSON.stringify(state.campaignBarTexts),
      ).map((el: CampaignBarText) => ({ ...el, className: '' }));

      const activeElementIndex = state.campaignBarTexts.findIndex(
        (el) => el.id === state.activeElId,
      );

      const currentElement = { ...campaignBarTexts[activeElementIndex], className: classes.Leave };
      const isLastElement = !campaignBarTexts[activeElementIndex + 1];
      const nextElementIndex = isLastElement ? 0 : activeElementIndex + 1;
      const nextElement = {
        ...campaignBarTexts[isLastElement ? 0 : activeElementIndex + 1],
        className: classes.Active,
      };
      campaignBarTexts[activeElementIndex] = currentElement;
      campaignBarTexts[nextElementIndex] = nextElement;

      setState((prevState) => ({ ...prevState, campaignBarTexts, activeElId: nextElement.id }));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [state.activeElId, state.campaignBarTexts]);

  return (
    <div id="campaign-bar" className={`${classes.Container} ${className ?? ''}`}>
      {state.campaignBarTexts.map((el) => (
        <strong className={el.className} key={uuidv4()}>
          {el.text}
        </strong>
      ))}
      <Cross className={classes.Cross} onClick={onClick} />
    </div>
  );
};

export default CampaignBar;
