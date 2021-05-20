import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

import CharacterGLTF from '../../../blenderFiles/gltf/Character/Character.gltf'
import {
	CharacterGLTFResult,
	CharacterProps,
	GLTFActions
} from './Character.types'

export const Character: React.FC<CharacterProps> = (props: CharacterProps) => {
	const group = useRef<THREE.Group>()
	const { nodes, materials, animations } = useGLTF(
		CharacterGLTF
	) as CharacterGLTFResult
	const { actions } = useAnimations<GLTFActions>(animations, group)

	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[-0.01, 0, 0]}>
				<primitive object={nodes.Root} />
				<primitive object={nodes.IKLedPoleL} />
				<primitive object={nodes.IKTargetL} />
				<primitive object={nodes.IKLedPoleR} />
				<primitive object={nodes.IKTargetR} />
				<skinnedMesh
					geometry={nodes.Body.geometry}
					material={materials['Material.004']}
					skeleton={nodes.Body.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Cape.geometry}
					material={materials['Material.007']}
					skeleton={nodes.Cape.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Cube011.geometry}
					material={materials['Material.009']}
					skeleton={nodes.Cube011.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Cube011_1.geometry}
					material={materials['Material.006']}
					skeleton={nodes.Cube011_1.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Cube011_2.geometry}
					material={materials['Material.005']}
					skeleton={nodes.Cube011_2.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Cube011_3.geometry}
					material={materials['Material.008']}
					skeleton={nodes.Cube011_3.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Hair.geometry}
					material={materials['Material.003']}
					skeleton={nodes.Hair.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Mouth.geometry}
					material={materials['Material.013']}
					skeleton={nodes.Mouth.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Shirt.geometry}
					material={materials.Material}
					skeleton={nodes.Shirt.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Shoes.geometry}
					material={materials['Material.002']}
					skeleton={nodes.Shoes.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Trousers.geometry}
					material={materials['Material.001']}
					skeleton={nodes.Trousers.skeleton}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/Character.gltf')
