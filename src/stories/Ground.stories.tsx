import { Meta, Story } from '@storybook/react'
import React from 'react'

import { GroundProps } from '../components/3DModels/Ground/Ground.types'
import { GroundWithPreload } from '../components/3DModels/Ground/GroundWithPreload'
import { StoryCanvas } from '../devUtils/StoryCanvas'

export default {
	title: 'R3F-Game/3DModels/Ground',
	component: GroundWithPreload
} as Meta

const Template: Story<GroundProps> = (args: GroundProps) => {
	return (
		<StoryCanvas>
			<GroundWithPreload {...args} />
		</StoryCanvas>
	)
}

export const Default = Template.bind({})
Default.args = {
	color: '#2d190d'
}
