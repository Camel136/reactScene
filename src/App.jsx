import './App.css';
import { Canvas } from '@react-three/fiber';
import House from './components/house';
// import { Perf } from 'r3f-perf';

import PointerLockControlsCustom from './components/controls';
import { useState } from 'react';
import FlashLight from './components/flashLight';
import TextCustom from './components/text';

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
          {/* Se não mudou o modo, mostra Orbit e a House. Se mudou, mostra apenas o PointerLock */}
          {!changeMode ? (
            <>
              {/* <OrbitControls
                makeDefault
                minPolarAngle={ANGLE.DEG_75}
                maxPolarAngle={-ANGLE.DEG_75}
                minAzimuthAngle={-ANGLE.DEG_30}
                maxAzimuthAngle={ANGLE.DEG_90}
              /> */}
              <PointerLockControlsCustom />

              <House />
              <TextCustom
                rot={[0, 1.7, 0]}
                pos={[-7, -2, 6]}
                text="aperte ESC pra sair "
                color="white"
              />
              <FlashLight />
            </>
          ) : (
            <>{/* <House /> */}</>
          )}
          {/* <Perf /> */}
        </Canvas>
      </div>

      <footer className="section footer"></footer>
    </div>
  );
}

export default App;
