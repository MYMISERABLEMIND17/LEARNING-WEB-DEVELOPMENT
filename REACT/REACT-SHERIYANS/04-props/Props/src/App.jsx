import './App.css'
import React from 'react'
import Card from './components/Card'

function App() {

  return (
  <div className='parent'>  
    <Card user='Sarthak' age={30} img="https://images.unsplash.com/photo-1756142040580-684257d38b61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500"/>
    <Card user ='Raju' age ={18} img="https://images.unsplash.com/photo-1743361707505-fa2d8da00e49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500"/>

  </div>
  )
}

export default App
