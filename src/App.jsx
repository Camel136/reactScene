import './App.css';
import { Canvas } from '@react-three/fiber';
import House from './components/house';
// import { Perf } from 'r3f-perf';
import FlashLight from './components/flashLight';

// npm run lint -- --fix

function App() {
  // //castShadow e receiveshadow (fazer ou receber sombra)
  // let teste = '';
  // setTimeout(() => {
  //   {
  //     teste = 'Vc ja viu o que existe no escuro ';
  //     console.log('........a...');
  //   }
  // }, 2000);
  return (
    <div className="app">
      <header className="section header"></header>

      <div className="section canvas-container">
        <Canvas
          shadows
          camera={{
            position: [5, 1.6, 14], // [x, y, z]
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          {/* <Perf /> */}
          <House />
          <FlashLight />
        </Canvas>
      </div>

      <footer className="section footer"></footer>
    </div>
  );
}

export default App;
