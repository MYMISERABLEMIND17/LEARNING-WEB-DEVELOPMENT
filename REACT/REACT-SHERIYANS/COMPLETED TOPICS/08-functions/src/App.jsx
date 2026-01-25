
function App() {
  function btnclick(){
    console.log("button clicked");
  }
  return (
    <>
      <button onClick={btnclick}> click me</button>
      <input type="text" placeholder="type here"
        onChange={function(prop){
          console.log(prop.target.value);
        }}></input>

          
    </>
  )
}

export default App
