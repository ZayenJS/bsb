import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Heading from '../../../../../components/Heading/Heading';

import classes from './ServiceDetail.module.scss';

export interface ServiceDetailProps {
  title: string;
  src: string;
  list: string[];
  info?: string;
}

const ServiceDetail: FC<ServiceDetailProps> = ({ list, src, title, info }) => {
  return (
    <div className={classes.Container}>
      <Heading tag="h3" uppercased>
        {title}
      </Heading>
      <div className={classes.Image_Container}>
        <img src={src} alt="" />
      </div>
      <ul>
        {list.map((text) => (
          <li key={uuidv4()}>{text}</li>
        ))}
      </ul>
      {info && <p>{info}</p>}
    </div>
  );
};

export default ServiceDetail;
