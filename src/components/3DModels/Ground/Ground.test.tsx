import * as drei from '@react-three/drei'
import { GLTFStructureLoader } from '@react-three/gltfjsx'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import fs from 'fs/promises'
import path from 'path'
import React, { Suspense } from 'react'
import { Color } from 'three'

import { Ground } from './Ground'

test('The ground mesh should change its color when the color prop is provided', async () => {
	const absolutePath = path.resolve('src/blenderFiles/gltf/Ground/Ground.gltf')
	const data = await fs.readFile(absolutePath)
	const loader = new GLTFStructureLoader()
	const gltf: any = await new Promise((res: any) => loader.parse(data, '', res))

	jest.spyOn(drei, 'useGLTF').mockImplementation(() => {
		const { scene } = gltf

		return {
			...gltf,
			materials: {
				GroundMaterial: scene.children[0].material
			},
			nodes: {
				Ground: {
					geometry: {}
				}
			}
		}
	})

	const providedColor = '#ffffff'
	const expectedColor = new Color(providedColor)
	const renderer = await ReactThreeTestRenderer.create(
		<Suspense fallback={null}>
			<Ground color={providedColor} />
		</Suspense>
	)
	const wrapper = renderer.scene.children[0].children[0]
	const { _fiber: fiber } = wrapper

	expect(fiber.type).toEqual('Mesh')
	expect(fiber.name).toEqual('Ground')
	expect(fiber.material.color).toEqual(expectedColor)
})
