import { Meta, Story } from '@storybook/react'
import React from 'react'

import { GroundProps } from '../components/3DModels/Ground/Ground.types'
import Ground from '../components/3DModels/Ground/GroundWithPreload'
import StoryCanvas from '../devUtils/StoryCanvas'

export default {
	title: 'R3F-Game/3DModels/Ground',
	component: Ground
} as Meta

const Template: Story<GroundProps> = (args: GroundProps) => {
	return (
		<StoryCanvas>
			<Ground {...args} />
		</StoryCanvas>
	)
}

export const Default = Template.bind({})
Default.args = {
	color: '#2d190d'
}
