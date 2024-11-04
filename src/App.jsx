import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue=()=>{
    counter=counter+1
    setCounter(counter)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <> <h1>Hello! Dosto...</h1>
    <br />
    <br />
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button id="btn1" onClick={addValue}>Increment Value</button>
      <br/>
      <br/>
      <button  id ="btn2" onClick={removeValue}>Decrement Value</button>

    </>
  )
}

export default App
