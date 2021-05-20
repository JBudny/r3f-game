import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React, { Suspense } from 'react'

import { StoryCanvasProps } from './StoryCanvas.types'

const StoryCanvas: React.FC<StoryCanvasProps> = ({
	children
}: StoryCanvasProps) => {
	return (
		<Canvas
			camera={{ position: [0, 20, 0] }}
			shadows
			onCreated={({ gl }) =>
				gl.setSize(window.innerWidth, window.innerHeight, true)
			}
		>
			<Perf openByDefault />
			<OrbitControls />
			<color attach="background" args={['#F8F8F8']} />
			<ambientLight intensity={1} />
			<directionalLight castShadow intensity={2} />
			<Suspense fallback={null}>{children}</Suspense>
		</Canvas>
	)
}

export default StoryCanvas
