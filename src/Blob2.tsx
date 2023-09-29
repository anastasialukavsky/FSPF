import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AmbientLight, IcosahedronGeometry, Mesh, MeshStandardMaterial, ShaderMaterial } from 'three';
import vertexShader from './shaders/vertexShader';
import fragmentShader from './shaders/fragmentShader';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useControls } from 'leva';
import * as THREE from 'three';

export default function Blob2() {
  const mesh = useRef<Mesh | null>(null);
  const hover = useRef(false);

  const materialProps = useControls({
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 3 },
    wireframe: false,
    fog: true,
    color: '#2732E7',
    clearcoat: { value: 1, max: 1, min: 0 },
    vertexColors: true,
    opacity: { value: 1, min: 0, max: 1, step: 0.01, label: 'Opacity' },
    // attenuationColor: '#0xfffff',
    // clearcoatRoughness: {value: .1, min: 0, max:1},
    // transmission: {value: .1, max: 1, min: 0},
    // thickness: {value: 1, max:1, min: 0},
    // sheen: {value: 1, max: 1, min: 0}
  });


  // const [opacity, setOpacity] = useState(1);

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.5 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;
        // material.opacity = materialProps.opacity;
        // material.transparent = materialProps.opacity < 1;
       material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });


// useEffect(() => {
//   if (mesh.current) {
//     const material = mesh.current.material as ShaderMaterial;
//     material.opacity = materialProps.opacity;
//     material.transparent = materialProps.opacity < 1;
//   }
// }, [materialProps.opacity]);

  
  return (
    <mesh
      ref={mesh}
      scale={1.5}
     
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        {...materialProps}
      />
    </mesh>
  );
}
