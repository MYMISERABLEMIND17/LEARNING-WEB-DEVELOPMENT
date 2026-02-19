import axios from 'axios'
import './App.css'

function App() {

  async function getdata(){
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
    
    
  }
  return (
    <>
      <div className='bg-black h-screen'> 
        <button className='h-15 w-40 p-3.5 bg-green-600 active:scale-95  m-3 rounded-3xl'
        onClick={getdata}
        > Hello </button>

      </div>
    </>
  )
}

export default App
