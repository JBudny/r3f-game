import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
	nodes: {
		Ground: THREE.Mesh
	}
	materials: {
		GroundMaterial: THREE.MeshStandardMaterial
	}
}

const path = './GLTFModels/Ground.gltf'

const Ground = (props: JSX.IntrinsicElements['group']) => {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF(path) as GLTFResult

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
