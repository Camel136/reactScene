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
        <Canvas shadows>
          <Perf />
          <House />
        </Canvas>
      </div>

      <footer className="section footer">Outros elementos</footer>
    </div>
  );
}

export default App;
