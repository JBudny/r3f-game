import React from 'react'

import H1 from '../primitives/Headers.styles'
import { ErrorType } from './ErrorFallback.types'

const ErrorFallback: React.FC<ErrorType> = ({ error }: ErrorType) => {
	const { message } = error

	return (
		<div>
			<H1>Error Header</H1>
			<p>Error description</p>
			<p>{message}</p>
		</div>
	)
}

export default ErrorFallback
