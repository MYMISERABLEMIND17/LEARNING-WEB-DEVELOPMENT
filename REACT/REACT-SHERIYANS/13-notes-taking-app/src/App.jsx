import './App.css'
import { useState } from 'react'
function App() {
  const [Heading, setHeading] = useState('')

  return (
      <>
        <div className='w-screen h-screen bg-gray-500 flex'>
         {/* creating the left page  */}
          <div className=' w-1/2 h-screen bg-amber-600'>
              <div className='h-1/2 m-5 w-1/2 '  placeholder=' TITLE '>
                {/*  */}
                <input className='w-full border-2 rounded-2xl p-2 m-2 text-xl font-bold' placeholder='HEADING' onChange={(e) => setHeading(console.log(e.target.value))} ></input>
                <textarea className=' w-full h-1/4 border-2 rounded-2xl p-2 m-2' placeholder='CONTENT'></textarea>
                <button className='bg-black w-full border-2  rounded-2xl p-2 m-2 text-white'  > CREATE </button>
              </div>
              
          </div>
          {/* right side of the page  */}
          <div className=' w-1/2 h-screen bg-gray-900'>
            <div className='w-full h-full m-5 p-8 flex gap-3 flex-wrap'  >
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
              <div className='w-70 h-50  bg-amber-800 border-2 rounded-2xl p-3'> heloo </div>  
            </div>
          </div>
        </div>
      </>
  )
}

export default App
