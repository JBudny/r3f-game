import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../ErrorFallback/ErrorFallback'

const App: React.FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Canvas
				shadows
				onCreated={({ gl }) =>
					gl.setSize(window.innerWidth, window.innerHeight, true)
				}
			>
				<color attach="background" args={['#F8F8F8']} />
				<ambientLight intensity />
				<directionalLight castShadow intensity={2} />
			</Canvas>
		</ErrorBoundary>
	)
}

export default App