import * as React from 'react';

import {storiesOf} from '@storybook/react';

import RenderComponent from '../.storybook/components/RenderComponent';

import TestComponent from '../.storybook/components/TestComponent';

const stories = storiesOf('components', module);

stories
	.add('left', () => (
		<RenderComponent/>
	))
	.add('test', () => (
		<TestComponent/>
	))
