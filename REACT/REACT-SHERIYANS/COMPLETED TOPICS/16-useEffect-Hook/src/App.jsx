import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [Num, setNum] = useState(0)
  const [Num2, setNum2] = useState(0)
  useEffect(function(){
    console.log('use effect is running ');
    },[Num])

  return (
    <>
      <h1> {Num} </h1>
      <h1> {Num2}</h1>
      <button onClick={()=>{
        setNum(Num+1)
      }}
      onMouseEnter={()=>{
          setNum2(Num2+1)
      }}
      >
          

      </button>
    </>
  )
}

export default App
