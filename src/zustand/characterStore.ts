import create from 'zustand'

import { CharacterStore, GroupRef } from './characterStore.types'

export const useCharacterStore = create<CharacterStore>((set) => ({
	groupRef: { current: undefined },
	animation: 'Run',
	setGroupRef: (groupRef: GroupRef) => set(() => ({ groupRef })),
	setAnimation: (animation) => set(() => ({ animation }))
}))
