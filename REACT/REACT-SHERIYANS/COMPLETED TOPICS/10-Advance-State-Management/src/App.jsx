
import { useState } from 'react'
import './App.css'

function App() {
  
  const [Arr, setArr] = useState([10, 20 ,30 ])

  const newArr = [...Arr]
  const pushInArr  = ()=>{
    newArr.push(50) 
    setArr(newArr)
  }

  return (
    <> 
      <h1 onClick={pushInArr} >{ Arr }</h1>
    </>
  )
}

export default App
