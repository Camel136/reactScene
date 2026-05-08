import { PointerLockControls } from '@react-three/drei';

export default function PointerLockControlsCustom() {
  const ANGLE = {
    DEG_30: Math.PI / 6, // 30 g
    DEG_45: Math.PI / 4, // 45 g
    DEG_60: Math.PI / 3, // 60 g
    DEG_90: Math.PI / 2, // 90 g
    DEG_180: Math.PI, // 180 g
  };

  return <PointerLockControls minPolarAngle={ANGLE.DEG_90} />;
}
