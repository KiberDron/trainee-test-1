import * as React from 'react';
import { nanoid } from 'nanoid'

import Block from '../../../base/Block';
import Image from '../../../base/Image';
import SmokeText from '../../../base/SmokeText';

export default ({item, index, transform, locator}) => {
	const {
		body,
		domain,
		images,
		region,
		title,
		warning,
	} = item;

	let image_src;
	let image_width;
	let image_height;

	if (images[0]) {
		[image_src, image_width, image_height] = images[0];
	}

	const classes = [
		transform('teaser'),
	];

	if (image_src) {
		classes.push(transform('teaser_image'));
	}

	return (
		<Block className={classes.join(' ')}>

			<Block className={transform('title')}>
				{title}
			</Block>

			{image_src && (
				<Block className={transform('picture')}>
					<Image
						src={image_src}
						width={image_width}
						height={image_height}
						index={index}
						transform={transform}
						locator={locator}
					/>
				</Block>
			)}

			<Block className={transform('content')}>
				{body}
			</Block>

			{warning && (
				<Block className={transform('warning')}>
					<SmokeText transform={transform} locator={locator} index={nanoid()}>{warning}</SmokeText>
				</Block>
			)}

			<Block className={transform('contacts')}>

				<Block className={transform('contacts__item contacts__item_link')}>
					<SmokeText transform={transform} locator={locator} index={nanoid()}>{domain}</SmokeText>
				</Block>

				{region && (
					<Block className={transform('contacts__item')}>
						<SmokeText transform={transform} locator={locator} index={nanoid()}>{region}</SmokeText>
					</Block>
				)}
			</Block>
		</Block>
	);
};
