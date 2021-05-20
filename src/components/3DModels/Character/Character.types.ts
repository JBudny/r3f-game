import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export type CharacterGLTFResult = GLTF & {
	nodes: {
		Body: THREE.SkinnedMesh
		Cape: THREE.SkinnedMesh
		Cube011: THREE.SkinnedMesh
		Cube011_1: THREE.SkinnedMesh
		Cube011_2: THREE.SkinnedMesh
		Cube011_3: THREE.SkinnedMesh
		Hair: THREE.SkinnedMesh
		Mouth: THREE.SkinnedMesh
		Shirt: THREE.SkinnedMesh
		Shoes: THREE.SkinnedMesh
		Trousers: THREE.SkinnedMesh
		Root: THREE.Bone
		IKLedPoleL: THREE.Bone
		IKTargetL: THREE.Bone
		IKLedPoleR: THREE.Bone
		IKTargetR: THREE.Bone
	}
	materials: {
		['Material.004']: THREE.MeshStandardMaterial
		['Material.007']: THREE.MeshStandardMaterial
		['Material.009']: THREE.MeshStandardMaterial
		['Material.006']: THREE.MeshStandardMaterial
		['Material.005']: THREE.MeshStandardMaterial
		['Material.008']: THREE.MeshStandardMaterial
		['Material.003']: THREE.MeshStandardMaterial
		['Material.013']: THREE.MeshStandardMaterial
		Material: THREE.MeshStandardMaterial
		['Material.002']: THREE.MeshStandardMaterial
		['Material.001']: THREE.MeshStandardMaterial
	}
}

export type CharacterProps = JSX.IntrinsicElements['group']

type ActionName = '0TPose' | 'Idle' | 'Run'

export type GLTFActions = Record<ActionName, THREE.AnimationAction>
