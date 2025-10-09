import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let[counter, setCounter] = useState(10); 

  let addValue =  ()=>{
    console.log("clicked" , counter);
    setCounter(counter+1)
    
  }




  return(
    <>
      <h1> MY MISERABLE MIND </h1>
      <h3> counter value = {counter}</h3>

      <button
        onClick={addValue}>ADD VAL 
      </button> 
      <br></br>
      <br></br>
      <button>DEC VAL </button>





    </>
  )
}

export default App
