import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo-contain ma4 mt0'>
      <Tilt className='tilt br2 shadow-2'>
        <div style={{ height: '150px', width: '150px'}} className='pa3'>
          <img src={brain} alt='Brain' style={{paddingTop: '20px'}}/>
        </div>
    </Tilt>
    </div>
  )
}

export default Logo