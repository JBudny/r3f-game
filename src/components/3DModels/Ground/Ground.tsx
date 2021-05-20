import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

import GroundGLTF from '../../../blenderFiles/gltf/Ground/Ground.gltf'
import { GroundGLTFResult, GroundProps } from './Ground.types'

const Ground: React.FC<GroundProps> = ({ color, ...props }: GroundProps) => {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF(GroundGLTF) as GroundGLTFResult
	if (color) materials.GroundMaterial.color.set(color)

	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				name="Ground"
				castShadow
				receiveShadow
				geometry={nodes.Ground.geometry}
				material={materials.GroundMaterial}
				position={[0, 0.2, 0]}
				scale={[10, 10, 10]}
			/>
		</group>
	)
}

export default Ground
