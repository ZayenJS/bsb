import { FC } from 'react';

import './Presentation.css';

export interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => {
	return (
		<div className='presentation'>Presentation Component</div>
	);
}

export default Presentation;