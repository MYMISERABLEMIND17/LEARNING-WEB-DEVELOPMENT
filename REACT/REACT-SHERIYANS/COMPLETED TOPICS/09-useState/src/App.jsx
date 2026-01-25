
import { useState } from 'react'
import './App.css'

function App() {

  const [Num, setNum] = useState(0)

    function increaseNum() {
      setNum(Num+1)
  }
    function decreaseNum(){
      setNum(Num-1)
  }


  return (
    <>
      <h1>{Num}</h1>
      <button onClick={increaseNum}> increase </button>
      <button onClick={decreaseNum}> decrease </button>

    </>
  )
}

export default App
