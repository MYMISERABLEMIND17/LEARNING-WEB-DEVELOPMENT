import './App.css'

function App() {
  
  // localStorage.setItem("namee" ,  "tom")
  // localStorage.setItem("age" , 18 )

  // localStorage.removeItem("namee")

  // let name = localStorage.getItem("namee")
  // console.log(name);
  
// --  now working with array 

  const user = {
    username:' tom ', 
    age :18 , 
    city : 'noida'
  }

  localStorage.setItem ('user' ,JSON.stringify(user))
  return (
    <>
      
    </>
  )
}

export default App
