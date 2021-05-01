import { Meta, Story } from '@storybook/react'
import React from 'react'

import ErrorFallback from '../components/ErrorFallback/ErrorFallback'
import { ErrorType } from '../components/ErrorFallback/ErrorFallback.types'

export default {
	title: 'R3F-Game/ErrorFallback',
	component: ErrorFallback
} as Meta

const Template: Story<ErrorType> = (args: ErrorType) => {
	const { error } = args

	return <ErrorFallback error={error} />
}

export const Default = Template.bind({})
Default.args = {
	error: new Error('Error message')
}
