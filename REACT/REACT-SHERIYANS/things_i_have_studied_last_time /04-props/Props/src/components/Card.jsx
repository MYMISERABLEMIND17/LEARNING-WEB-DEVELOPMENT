import React from 'react'

function Card(props){

  return (
    <div>
      <div className='card'>
        <img className='image'  src = {props.img}/>
        <h1>{props.user}-{props.age}</h1>
        <h3 className='about'>Lorem ipsum, dolor sit amee dolore dolorem, explicabo sint earum, nisi placeat? Atque q</h3>
        <button  className='button'>About Me </button>
      </div>
    </div>
  )
}

export default Card
