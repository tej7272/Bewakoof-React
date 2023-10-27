import React from 'react'
import Roller from '../assest/Roller.gif';
import './LoaderHome.css'

const LoaderHome = () => {
  return (
    <div className='contanier'>
    <div className='roller-class'>
        <img src={Roller} alt='bewakoof loader' />
    </div>
</div>
  )
}

export default LoaderHome