import { useGLTF } from '@react-three/drei'

import CharacterGLTF from '../../../blenderFiles/gltf/Character/Character.gltf'
import { CharacterWrapper } from './CharacterWrapper'

export const CharacterWithPreload = CharacterWrapper

useGLTF.preload(CharacterGLTF)
