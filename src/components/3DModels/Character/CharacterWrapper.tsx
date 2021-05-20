import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

import CharacterGLTF from '../../../blenderFiles/gltf/Character/Character.gltf'
import { useCharacterStore } from '../../../zustand/characterStore'
import { Character } from './Character'
import {
	CharacterActionName,
	CharacterGLTFResult,
	CharacterWrapperProps,
	GLTFActions
} from './Character.types'

export const CharacterWrapper: React.FC<CharacterWrapperProps> = (
	props: CharacterWrapperProps
) => {
	const animationRef = useRef(useCharacterStore.getState().animation)
	const group = useCharacterStore((state) => state.groupRef)
	const { nodes, materials, animations } = useGLTF(
		CharacterGLTF
	) as CharacterGLTFResult
	const { actions } = useAnimations<GLTFActions>(animations, group)

	useEffect(() =>
		useCharacterStore.subscribe(
			(animation: CharacterActionName) => {
				animationRef.current = animation

				return null
			},
			(state) => state.animation
		)
	)

	useEffect(() => {
		const { current: animation } = animationRef

		if (actions[animation]) actions[animation].play()
	})

	return (
		<Character
			characterWrapperProps={props}
			nodes={nodes}
			materials={materials}
		/>
	)
}
