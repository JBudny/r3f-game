import { Meta, Story } from '@storybook/react'
import React from 'react'

import { CharacterProps } from '../components/3DModels/Character/Character.types'
import { CharacterWithPreload } from '../components/3DModels/Character/CharacterWithPreload'
import { StoryCanvas } from '../devUtils/StoryCanvas'

export default {
	title: 'R3F-Game/3DModels/Character',
	component: CharacterWithPreload
} as Meta

const Template: Story<CharacterProps> = (args: CharacterProps) => {
	return (
		<StoryCanvas>
			<CharacterWithPreload {...args} />
		</StoryCanvas>
	)
}

export const Default = Template.bind({})
