import { useGLTF } from '@react-three/drei'

import GroundGLTF from '../../../blenderFiles/gltf/Ground/Ground.gltf'
import { Ground } from './Ground'

export const GroundWithPreload = Ground

useGLTF.preload(GroundGLTF)
