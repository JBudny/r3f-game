import { useGLTF } from '@react-three/drei'

import GroundGLTF from '../../../blenderFiles/gltf/Ground/Ground.gltf'
import Ground from './Ground'

export default Ground

useGLTF.preload(GroundGLTF)
