import './App.css'
// import { useState } from 'react';

function App() {

let counter = 10 ; 

const addValue = () => {
  console.log("add value",(Math.random()*10));
  counter = counter+1 ; 
  console.log("dfsf");
  
}



  return (
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
