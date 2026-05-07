import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  TransformControls,
} from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
// https://gltf.report/

export default function House() {
  const { nodes } = useGLTF('./gltf/casaRegularJoin1.glb');
  //   console.log('...........', nodes.parede);
  //   atençao ao dar join no blender a ultima geomtria fica como ponto de origem
  const bakedTestureHouse = useTexture('./bake/bakedImage.jpg');
  bakedTestureHouse.flipY = false;

  // console.log('...........', nodes);

  const glassTableMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        transmission: 1.0,
        transparent: true,
        roughness: 0.0,
        metalness: 0.0,
        ior: 1.5,
        thickness: 0.6,
        attenuationColor: new THREE.Color(0x88ccee),
        attenuationDistance: 0.5,
        envMapIntensity: 1.5,
      }),
    []
  );

  // const transformRef = useRef();
  // const meshRef = useRef();

  // const getPosition = () => {
  //   const object = transformRef.current?.object;
  //   console.log('position obj', object?.position);
  // };

  nodes.vidro_mesa.position.x = 0.819228437991848;
  nodes.vidro_mesa.position.y = -8.817037406785715;
  nodes.vidro_mesa.position.z = 0.149929950065959;

  nodes.vidro_janela.position.x = 0.819228437991848;
  nodes.vidro_janela.position.y = -8.817037406785715;
  nodes.vidro_janela.position.z = 0.149929950065959;

  return (
    <>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 4} // limite inferior de rotação vertical (para cima)
        maxPolarAngle={Math.PI / 2} // limite superior de rotação vertical (para baixo)
        minAzimuthAngle={-Math.PI / 4} // limite esquerdo de rotação horizontal
        maxAzimuthAngle={Math.PI / 4} // limite direito de rotação horizontal
      />
      <color attach="background" args={['#000000']} />
      <Center>
        <mesh geometry={nodes.parede.geometry}>
          <meshBasicMaterial map={bakedTestureHouse} />
        </mesh>
      </Center>
      {/* <TransformControls
          ref={transformRef}
          onObjectChange={getPosition}
        > */}
      <mesh
        // ref={meshRef}
        geometry={nodes.vidro_mesa.geometry}
        material={glassTableMaterial}
        position={nodes.vidro_mesa.position}
        rotation={nodes.vidro_mesa.rotation}
        scale={nodes.vidro_mesa.scale}
      />

      <mesh
        material={glassTableMaterial}
        geometry={nodes.vidro_janela.geometry}
        position={nodes.vidro_janela.position}
        rotation={nodes.vidro_janela.rotation}
        scale={nodes.vidro_janela.scale}
      />
      {/* </TransformControls> */}
    </>
  );
}
