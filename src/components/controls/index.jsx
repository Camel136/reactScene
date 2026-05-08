import {
  PointerLockControls,
  DeviceOrientationControls,
} from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function PointerLockControlsCustom() {
  const [isMobile, setIsMobile] = useState(false);

  const ANGLE = {
    DEG_30: Math.PI / 6,
    DEG_45: Math.PI / 4,
    DEG_60: Math.PI / 3,
    DEG_90: Math.PI / 2,
    DEG_180: Math.PI,
  };

  useEffect(() => {
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileDevice = mobileRegex.test(navigator.userAgent);

    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    setIsMobile(isMobileDevice || isTouchDevice);
  }, []);

  if (!isMobile) {
    return <PointerLockControls minPolarAngle={ANGLE.DEG_90} />;
  }

  return <DeviceOrientationControls />;
}
