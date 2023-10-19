import React from 'react'
import './Loader.css'
import loader from '../assest/Hourglass.gif'

const Loader = () => {
  return (
    <div className='contanier'>
        <div className='loader-class'>
            <img src={loader} alt='bewakoof loader' />
        </div>
    </div>
  )
}

export default Loader