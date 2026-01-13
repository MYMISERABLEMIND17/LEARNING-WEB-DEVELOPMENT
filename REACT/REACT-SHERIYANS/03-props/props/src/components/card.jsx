import React from 'react'

const card = (props) => {  
  return (
      
      <div className='card'>
          
        <image src = "https://images.unsplash.com/photo-1767958465025-75c050ab10c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"></image>
        <h1>{props.name } ,  {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>

      </div>
    
  )
}

export default card
