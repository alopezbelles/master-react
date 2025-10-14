// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import MiPrimerEstado from './components/MostrarAño'
import MostrarAño from './components/MostrarAño'

function App() {
  // const [count, setCount] = useState(0)
  const actualYear = new Date().getFullYear();

  return (
    <>
      <div>        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>El estado en react</h1>
      {/* <MiPrimerEstado />    */}
      <MostrarAño año={actualYear} />

    </>
  )
}

export default App
