import React from 'react'

const Card = () => {
    return (
    <div>
        <div className='card'>
            <div className='top'>
                <img className='image' src='https://imgs.search.brave.com/bZ-lYSs5AZc6gHsaH6wLDsUjiWKN5s2auLRVQlw_6bM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzg5/LzM2MF9GXzI5NDUx/ODk0MF9GQmZ3Wncz/MEhuV0JWOXB6RHA2/RUV2OXUxODVKTDZY/US5qcGc'/>
                <button className='save'>Save</button>
            </div>
            <div className='center'>
                <h4 className='company'>Amazon</h4>
                <div className='job'> Senior UI/UX designer </div>
            </div>  
            <div className='bottom'>
                <div className='time'>Part-Time</div>
                <div className='type'>Senior Level</div>
            </div>
            <button  className='apply'>Apply Now !</button>
        </div>
    </div>
    )
}

export default Card
