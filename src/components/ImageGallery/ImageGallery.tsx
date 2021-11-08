import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from './ImageGallery.module.scss';

export interface ImageGalleryProps {
  images: string[];
  columns?: number;
  rows?: number;
  spacing?: [number, number];
  className?: string;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  rows = 2,
  spacing = ['2rem', '2rem'],
  className,
}) => {
  return (
    <div
      className={classes.Container}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        rowGap: `${spacing[0]}rem`,
        columnGap: `${spacing[1]}rem`,
      }}>
      {images.map((image) => (
        <figure
          key={uuidv4()}
          className={`
					${className ?? ''}
					`}
          style={{ backgroundImage: `url(${image})` }}></figure>
      ))}
    </div>
  );
};

export default ImageGallery;
