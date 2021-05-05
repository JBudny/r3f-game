import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

import { GroundGLTFResult, GroundProps } from './Ground.types'

const path = './GLTFModels/Ground.gltf'

const Ground: React.FC<GroundProps> = ({ color, ...props }: GroundProps) => {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF(path) as GroundGLTFResult
	if (color) materials.GroundMaterial.color.set(color)

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<mesh
					name="Ground"
					castShadow
					receiveShadow
					geometry={nodes.Ground.geometry}
					material={materials.GroundMaterial}
					scale={[10, 10, 10]}
				/>
			</group>
		</group>
	)
}

export default Ground

useGLTF.preload(path)
