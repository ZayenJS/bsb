import { FC } from 'react';

import classes from './Heading.module.scss';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  tag: HeadingType;
  uppercased?: boolean;
  underlined?: boolean;
}

const Heading: FC<HeadingProps> = ({ uppercased = false, underlined = false, tag, children }) => {
  const Tag = tag;

  return (
    <Tag
      className={classes.Container}
      style={{
        textTransform: uppercased ? 'uppercase' : 'none',
        textDecoration: underlined ? 'underline solid' : 'none',
      }}>
      {children}
    </Tag>
  );
};

export default Heading;
