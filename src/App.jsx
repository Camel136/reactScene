import './App.css';
import { Canvas } from '@react-three/fiber';
import House from './components/house';
// import { Perf } from 'r3f-perf';
import { useGLTF, useTexture, Center, OrbitControls } from '@react-three/drei';
import PointerLockControlsCustom from './components/controls';
import { useEffect, useState } from 'react';
// import FlashLight from './components/flashLight';

// npm run lint -- --fix

function App() {
  // //castShadow e receiveshadow (fazer ou receber sombra)

  const ANGLE = {
    DEG_30: Math.PI / 6,
    DEG_45: Math.PI / 4,
    DEG_60: Math.PI / 3,
    DEG_90: Math.PI / 2,
    DEG_75: Math.PI / 2.4,
    DEG_180: Math.PI,
  };

  // 180/ deg = graus

  const [changeMode, setChangeMode] = useState(false);
  const positionCam = [5, 1.6, 14];

  console.log('...........', Math.PI / 2);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setChangeMode(true);
  //     console.log('........aqui...');
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="app">
      <header className="section header"></header>

      <div className="section canvas-container">
        <Canvas
          shadows
          camera={{
            position: positionCam,
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          {/* ate fazer luz apagar defpois colocar o pointer lock */}
          {/* Se não mudou o modo, mostra Orbit e a House. Se mudou, mostra apenas o PointerLock */}
          {!changeMode ? (
            <>
              <OrbitControls
                makeDefault
                minPolarAngle={ANGLE.DEG_75}
                maxPolarAngle={-ANGLE.DEG_75}
                minAzimuthAngle={-ANGLE.DEG_30}
                maxAzimuthAngle={ANGLE.DEG_90}
              />
              <House />
            </>
          ) : (
            <>
              <PointerLockControlsCustom />
              <FlashLight />
            </>
          )}
          {/* <Perf /> */}
        </Canvas>
      </div>

      <footer className="section footer"></footer>
    </div>
  );
}

export default App;
