import { Text3D } from '@react-three/drei';

export default function TextCustom({ pos, rot, text, color }) {
  return (
    <Text3D
      font="./fonts/Kelly_Slab/Kelly Slab_Regular.json"
      size={0.5}
      height={0.1}
      rotation={rot}
      position={pos}
    >
      {text}
      <meshBasicMaterial color={color} />
    </Text3D>
  );
}
