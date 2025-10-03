import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiComponente from './MiComponente.tsx'
import MiComponenteDos from './MiComponenteDos.tsx'
import MiComponenteTres from './MiComponenteTres.tsx'
import MiComponenteCuatro from './MiComponenteCuatro.tsx'
import EventosComponente from './EventosComponente.tsx'

function App() {
  const [count, setCount] = useState(0);
  const numero = 1234;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>      
      </div>
      <MiComponente nombre="Alex" />     
      <MiComponenteDos nombre="Alex" edad={35} />     
      <MiComponenteTres />     
      <MiComponenteCuatro 
        nombre={"Alex"}
        apellidos="García" 
        ficha={{altura: 1.75, peso: 70}}
      />    +
      <EventosComponente nombre={"Juan"} />
    </>
  )
}

export default App
