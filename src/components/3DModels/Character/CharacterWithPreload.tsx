import { useGLTF } from '@react-three/drei'

import CharacterGLTF from '../../../blenderFiles/gltf/Character/Character.gltf'
import { Character } from './Character'

export const CharacterWithPreload = Character

useGLTF.preload(CharacterGLTF)
