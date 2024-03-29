import { FC, Key } from 'react';
import { Link } from 'react-router-dom';

import classes from './CarouselImage.module.scss';

export interface CarouselImageProps {
  id: Key;
  className?: string;
  activeClass?: string;
  textContainerClass?: string;
  tag?: keyof JSX.IntrinsicElements;
  href?: string;
}

const CarouselImage: FC<CarouselImageProps> = ({
  id,
  textContainerClass,
  activeClass,
  className,
  children,
  tag = 'figure',
  href,
}) => {
  if (href && tag === 'a') {
    return (
      <Link to={href} className={className ?? ''}>
        <div
          className={`${classes.Text_Container} ${activeClass ?? ''} ${textContainerClass ?? ''} `}>
          {children}
        </div>
      </Link>
    );
  }

  const Tag = tag;

  return (
    <Tag key={id} className={className ?? ''}>
      <div
        className={`${classes.Text_Container} ${activeClass ?? ''} ${textContainerClass ?? ''} `}>
        {children}
      </div>
    </Tag>
  );
};

export default CarouselImage;
