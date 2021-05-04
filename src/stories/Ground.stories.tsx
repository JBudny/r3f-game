import { Meta, Story } from '@storybook/react'
import React from 'react'

import Ground from '../components/3DModels/Ground'
import StoryCanvasWrapper from '../utils/StoryCanvasWrapper'

export default {
	title: 'R3F-Game/3DModels/Ground',
	component: Ground
} as Meta

const Template: Story = (args) => {
	return (
		<StoryCanvasWrapper>
			<Ground />
		</StoryCanvasWrapper>
	)
}

export const Default = Template.bind({})
Default.args = {
	error: new Error('Error message')
}
