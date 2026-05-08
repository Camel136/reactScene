import './App.css';
import { Canvas } from '@react-three/fiber';
import House from './components/house';
import { Perf } from 'r3f-perf';
// npm run lint -- --fix

function App() {
  //castShadow e receiveshadow (fazer ou receber sombra)

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
        </Canvas>
      </div>

      <footer className="section footer"></footer>
    </div>
  );
}

export default App;
