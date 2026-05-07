import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  TransformControls,
} from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';
// https://gltf.report/

export default function House() {
  const { nodes } = useGLTF('/gltf/casaRegularJoin.glb');
  //   console.log('...........', nodes.parede);
  //   atençao ao dar join no blender a ultima geomtria fica como ponto de origem
  const bakedTestureHouse = useTexture('/bake/bakedImage.jpg');
  bakedTestureHouse.flipY = false;

  console.log('...........', nodes);

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

  //   const transformRef = useRef();
  //   const meshRef = useRef();

  //   const handleObjectChange = () => {
  //     const object = transformRef.current?.object;
  //     console.log('position from control:', object?.position);
  //   };

  return (
    <>
      <OrbitControls makeDefault />
      <group>
        <color attach="background" args={['#000000']} />
        <Center>
          <mesh geometry={nodes.parede.geometry}>
            <meshBasicMaterial map={bakedTestureHouse} />
          </mesh>
        </Center>
        {/* <PivotControls ref={meshRef} depthTest={false}> */}
        <TransformControls
        //   ref={transformRef} onObjectChange={handleObjectChange}
        >
          <mesh
            //   ref={meshRef}
            geometry={nodes.vidro_mesa.geometry}
            // material={glassTableMaterial}
            // position={[
            //   nodes.vidro_mesa.position.x,
            //   -nodes.vidro_mesa.position.y,
            //   nodes.vidro_mesa.position.z,
            // ]}
            position={nodes.vidro_mesa.position}
            rotation={nodes.vidro_mesa.rotation}
            scale={nodes.vidro_mesa.scale}
          >
            <meshBasicMaterial color="red" />
          </mesh>
        </TransformControls>
        {/* </PivotControls> */}
      </group>
    </>
  );
}
