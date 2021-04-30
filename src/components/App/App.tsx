import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../ErrorFallback/ErrorFallback'

const App: React.FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Canvas shadows>
				<ambientLight intensity />
				<directionalLight castShadow intensity={2} />
			</Canvas>
		</ErrorBoundary>
	)
}

export default App
