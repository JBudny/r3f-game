import create from 'zustand'

import { AnimationState } from './store.types'

export const useStore = create<AnimationState>((set) => ({
	animation: 'Run',
	setAnimation: (newAnimation) => set(() => ({ animation: newAnimation }))
}))
