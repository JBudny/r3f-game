import { Meta, Story } from '@storybook/react'
import React from 'react'

import Ground from '../components/3DModels/Ground/Ground'
import { GroundProps } from '../components/3DModels/Ground/Ground.types'
import StoryCanvasWrapper from '../utils/StoryCanvasWrapper'

export default {
	title: 'R3F-Game/3DModels/Ground',
	component: Ground
} as Meta

const Template: Story<GroundProps> = (args: GroundProps) => {
	return (
		<StoryCanvasWrapper>
			<Ground {...args} />
		</StoryCanvasWrapper>
	)
}

export const Default = Template.bind({})
Default.args = {
	color: '#2d190d'
}
