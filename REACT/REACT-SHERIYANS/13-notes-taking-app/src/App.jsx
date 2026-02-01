import './App.css'
import { useState } from 'react'
function App() {
  
  const[Heading, setHeading] = useState('')
  const [Content, setContent] = useState('')
  const [Tasksarr, setTasksarr] = useState([])

  const submitHandler= (e)=>{
    e.preventDefault() 
    console.log(Heading , Content)
    setHeading('')
    setContent('')
    let copyTaskarr = [...Tasksarr] ;
    copyTaskarr.push({Heading , Content})
    console.log(copyTaskarr)
    setTasksarr(copyTaskarr)

  }

  

  

  return (
      <>
        <div className='w-screen h-screen bg-gray-500 flex'>
         {/* creating the left page  */}
          <div className=' w-1/2 h-screen bg-amber-600'>
              <form onSubmit={(e)=>{
                  submitHandler(e)
                }} 
                className='h-1/2 m-5 w-3/4 '  placeholder=' TITLE ' >
                <h1 className='font-extrabold text-5xl p-3 text-black'>Add Your Notes</h1>
                {/*  heading  */}
                <input className='w-full border-2 rounded-2xl p-2 m-2 text-xl font-bold' placeholder='HEADING'
                onChange={(e)=> {
                  setHeading(e.target.value)
                }}>
                </input>
                <textarea className=' w-full h-1/4 border-2 rounded-2xl p-2 m-2' placeholder='CONTENT'
                  onChange={(e)=>{
                      setContent(e.target.value)
                  }}>
                </textarea>
                <button className='bg-black w-full active:scale-95 active:bg-gray-900 border-2 border-black rounded-2xl p-2 m-2 text-white' 
                  > CREATE </button>
              </form>
              
          </div>
          {/* right side of the page  */}
          <div className=' w-1/2 h-screen bg-black'>
            <div className='w-full h-full m-5 p-8 flex gap-3 flex-wrap overflow-auto text-amber-50'>
              {Tasksarr.map (function(elem , idx){
                return(
                <div key={idx} className='    w-70 h-50  bg-amber-600 border-2 rounded-2xl p-3 '>
                  <h3 className=' font-bold text-gray-950 text-2xl'> {elem.Heading}</h3>
                  <h3 className=' font-bold text-gray-950 text-2xl'> {elem.Content}</h3>
                  {/* <button className='bg-red-900 p-2 rounded-2xl h-10 active:scale-95'>delete</button> */}
                </div> )                
              })}
              {/* <div className='w-70 h-50  bg-amber-600 border-2 rounded-2xl p-3'></div>   */}
            </div>
          </div>
        </div>
      </>
  )
}

export default App
