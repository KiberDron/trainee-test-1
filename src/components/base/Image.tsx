import { updateStyle } from '@/utils/slotSheet';
import * as React from 'react';

export default (props) => {
	const {
		src,
		width,
		height,
		index,
		transform,
		locator
	} = props

	// Отрисовываем картинку через 'background-image' вместо тега <img>
	const style = {
		[`.${transform(`picture-${index}`)}`]: {
			'background-image': `url(${src})`,
			'width': `${width}px`,
			'height': `${height}px`
		}
	}

	updateStyle(null, locator, style)

	return (
		<div className={transform(`picture-${index}`)}></div>
	);
};
