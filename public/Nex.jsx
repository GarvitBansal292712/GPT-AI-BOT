/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 nex.gltf 
Author: Sycho-ATH (https://sketchfab.com/Sycho-ATH)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/roblox-magic-sphere-406d9bcc53bf4009ac164d37d543e3eb
Title: Roblox Magic Sphere
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Users/garvi/Projects/AI API CHAT BOT PROJECT/public/nex.gltf")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Meshpart2Mtl} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Meshpart3Mtl} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Meshpart1Mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('/Users/garvi/Projects/AI API CHAT BOT PROJECT/public/nex.gltf')