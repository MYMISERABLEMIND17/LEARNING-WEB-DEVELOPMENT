import React from 'react'

function card(props) {
  return (
    <>
      
      
      <div className='parent'>

        <div className='level1'>
          <img className='profilepic' src ={props.logo} ></img>
          <div className='save'> 
            <div className='saveicon'></div>
            <div className='savetext'> Save</div>
          </div> 
        </div>


        <div className='level2'>

          <div className='level2a'>
            <p className='companyname'>{props.name}</p>
            <div className='durationleft'>{props.duration}</div>
          </div>

          <div className='level2b'>
            <p className='role'> {props.role}</p>
          </div>

          <div className='level2c'>
            <div className='time'> {props.time} </div>
            <div className='post'> {props.level}</div>
          </div>
        </div>


        <div className='level3'>
          <div className='about'>
            <div className='money'> {props.money}</div>
            <p classname ='location'> {props.location}</p>
          </div>
          <button className='btn'> Apply Now</button>
        </div>

      </div>      
    </>
  )
}

export default card
