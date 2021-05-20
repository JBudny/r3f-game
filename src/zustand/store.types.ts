import { CharacterActionName } from '../components/3DModels/Character/Character.types'

export type AnimationState = {
	animation: CharacterActionName
	setAnimation: (animation: CharacterActionName) => void
}
