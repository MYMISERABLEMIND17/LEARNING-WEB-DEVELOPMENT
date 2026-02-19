import axios from 'axios'
import './App.css'

function App() {
  // this is async function 
  // async function getData(){
  //   const resp =  await fetch('https://official-joke-api.appspot.com/random_joke')
  //   console.log(resp);
  // }

  const getData = async () =>{
    const resp  =await axios.get('https://official-joke-api.appspot.com/random_joke')
    console.log(resp.data.setup);
    console.log(resp.data.punchline);
    
  }

  return (
    <>
      <button onClick={getData}>tell me a joke </button>
    
    </>
  )
}

export default App
