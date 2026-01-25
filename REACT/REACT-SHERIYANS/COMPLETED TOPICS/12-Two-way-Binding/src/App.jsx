
import './App.css'

function App() {
  const submitHandle = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div>
        <form onSubmit={(e) =>{
          submitHandle(e)
        }}>
          <input type='text'  placeholder='name' onChange={(e) =>{
            console.log(e.target.value)
          }}></input> 
          <br></br>
          <button type='submit' placeholder='submit'></button>
        </form>
      </div>
    </>
  )
}

export default App
