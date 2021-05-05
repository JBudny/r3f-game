import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export type GroundGLTFResult = GLTF & {
	nodes: {
		Ground: THREE.Mesh
	}
	materials: {
		GroundMaterial: THREE.MeshStandardMaterial
	}
}

export type GroundProps = JSX.IntrinsicElements['group'] & {
	color?: string
}
