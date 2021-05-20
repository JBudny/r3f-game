import { MutableRefObject } from 'react'

import { CharacterActionName } from '../components/3DModels/Character/Character.types'

export type GroupRef = MutableRefObject<THREE.Group | undefined>

export type CharacterStore = {
	groupRef: GroupRef
	animation: CharacterActionName
	setGroupRef: (groupRef: GroupRef) => void
	setAnimation: (animation: CharacterActionName) => void
}
