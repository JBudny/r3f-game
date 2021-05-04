import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const StoryCanvasWrapper = ({ children }: any) => {
	return (
		<Canvas
			camera={{ position: [0, 20, 0] }}
			shadows
			onCreated={({ gl }) =>
				gl.setSize(window.innerWidth, window.innerHeight, true)
			}
		>
			<OrbitControls />
			<color attach="background" args={['#F8F8F8']} />
			<ambientLight intensity={1} />
			<directionalLight castShadow intensity={2} />
			{children}
		</Canvas>
	)
}

export default StoryCanvasWrapper
