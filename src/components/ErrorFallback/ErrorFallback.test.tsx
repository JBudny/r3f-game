import { render, screen } from '@testing-library/react'
import React from 'react'

import ErrorFallback from './ErrorFallback'

test('ErrorFallback should display error header', () => {
	const error = new Error('test error')
	render(<ErrorFallback error={error} />)
	const header = screen.getByText('Error Header')
	expect(header).toBeDefined()
})

test('ErrorFallback should display error description', () => {
	const error = new Error('test error')
	render(<ErrorFallback error={error} />)
	const description = screen.getByText('Error description')
	expect(description).toBeDefined()
})

test('ErrorFallback should display error message', () => {
	const error = new Error('test error')
	render(<ErrorFallback error={error} />)
	const givenError = screen.getByText(error.message)
	expect(givenError).toBeDefined()
})
