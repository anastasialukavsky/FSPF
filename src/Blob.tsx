import * as THREE from 'three';
import { useControls } from 'leva';
import { useEnvironment } from '@react-three/drei';
import { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Blob() {
  const materialProps = useControls({
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 3 },
    wireframe: false,
    fog: true,
    color: '#2732E7',
    clearcoat: { value: 1, max: 1, min: 0 },
    vertexColors: true,
    opacity: { value: 0, max: 1, min: 0 },
    // attenuationColor: '#0xfffff',
    // clearcoatRoughness: {value: .1, min: 0, max:1},
    // transmission: {value: .1, max: 1, min: 0},
    // thickness: {value: 1, max:1, min: 0},
    // sheen: {value: 1, max: 1, min: 0}
  });

  // const lightControls = useControls({
  //   intensity: { value: 1, max: 30, min: -10 },
  //   color: '#2732E7',
  // });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight.position.x += 20;
  dirLight.position.y += 20;
  dirLight.position.z += 20;
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  const d = 10;
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;
  dirLight.position.z = -25;

  let target = new THREE.Object3D();
  target.position.z = -30;
  dirLight.target = target;
  dirLight.target.updateMatrixWorld();

  dirLight.shadow.camera.lookAt(0, 0, -30);
  scene.add(dirLight);

  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);
  // const envMap = useEnvironment({ files: '/test.hdr' });

  const textureLoader = new THREE.TextureLoader();
  const base = textureLoader.load('./Water_002_COLOR.jpg');
  const normal = textureLoader.load('./Water_002_NORM.jpg');
  // const height = textureLoader.load('./Metal_006_height.png');
  const roughness = textureLoader.load('./Water_002_ROUGH.jpg');
  const ao = textureLoader.load('./Water_002_OCC.jpg');

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1.5, 252, 580, 580);


  
  // const geometry = new THREE.BufferGeometry();

  // const radius = 1; // Sphere radius
  // const widthSegments = 32;
  // const heightSegments = 16;
  // const geometry = new THREE.BufferGeometry().fromGeometry(
  //   new THREE.SphereGeometry(radius, widthSegments, heightSegments)
  // );

  const material = new THREE.MeshStandardMaterial({
    ...materialProps,
    // envMap: envMap,
    map: base,
    roughnessMap: roughness,
    aoMap: ao,
    normalMap: normal,
  });

  const sphere = new THREE.Mesh(geometry, material);
  sphere.receiveShadow = true;
  sphere.castShadow = true;
  scene.add(sphere);

  camera.position.z = 5;
  const count: number = geometry.attributes.position.count;
  const damping = 0.25;
  const position_clone = JSON.parse(
    JSON.stringify(geometry.attributes.position.array)
  ) as Float32Array;
  const normals_clone = JSON.parse(
    JSON.stringify(geometry.attributes.normal.array)
  ) as Float32Array;

  function animate() {
    const now = Date.now() / 900;

    // iterate all vertices
    for (let i = 0; i < count; i++) {
      // indices
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // use uvs to calculate wave
      const uX = geometry.attributes.uv.getX(i) * Math.PI * 16;
      const uY = geometry.attributes.uv.getY(i) * Math.PI * 16;

      // calculate current vertex wave height
      const xangle = uX + now;
      const xsin = Math.sin(xangle) * damping;
      const yangle = uY + now;
      const ycos = Math.cos(yangle) * damping;

      // set new position
      geometry.attributes.position.setX(
        i,
        position_clone[ix] + normals_clone[ix] * (xsin + ycos)
      );
      geometry.attributes.position.setY(
        i,
        position_clone[iy] + normals_clone[iy] * (xsin + ycos)
      );
      geometry.attributes.position.setZ(
        i,
        position_clone[iz] + normals_clone[iz] * (xsin + ycos)
      );
    }
    geometry.computeVertexNormals();
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  // return () => {
  //   scene.remove(sphere);
  //   renderer.dispose();
  //   document.body.removeChild(renderer.domElement);
  // }

  return null;
}
