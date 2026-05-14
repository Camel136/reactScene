import { PointerLockControls } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function PointerLockControlsCustom() {
  const [isMobile, setIsMobile] = useState(false);
  const { camera, gl } = useThree();

  // Referências para controle de toque
  const touchStart = useRef({ x: 0, y: 0 });
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'));

  const ANGLE = {
    DEG_90: Math.PI / 2,
  };

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    if (isTouchDevice) {
      const handleTouchStart = e => {
        touchStart.current = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        };
      };

      const handleTouchMove = e => {
        const sensitivity = 0.004;

        const deltaX = e.touches[0].pageX - touchStart.current.x;
        const deltaY = e.touches[0].pageY - touchStart.current.y;

        euler.current.setFromQuaternion(camera.quaternion);

        euler.current.y -= deltaX * sensitivity;
        euler.current.x -= deltaY * sensitivity;

        euler.current.x = Math.max(
          -ANGLE.DEG_90 + 0.1,
          Math.min(ANGLE.DEG_90 - 0.1, euler.current.x)
        );

        camera.quaternion.setFromEuler(euler.current);

        touchStart.current = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        };
      };

      gl.domElement.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
      gl.domElement.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });

      return () => {
        gl.domElement.removeEventListener('touchstart', handleTouchStart);
        gl.domElement.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMobile, camera, gl]);

  if (!isMobile) {
    return <PointerLockControls minPolarAngle={ANGLE.DEG_90} />;
  }

  return null;
}
