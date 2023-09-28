import React, {useRef} from 'react'
import { IcosahedronGeometry, MeshStandardMaterial } from 'three';
import vertexShader from './shaders/vertexShader';

export default function Blob2() {
  const mesh = useRef(null);
  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial vertexShader={vertexShader} />
    </mesh>
  );
}
