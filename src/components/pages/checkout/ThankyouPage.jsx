import React from 'react'
import './ThankyouPage.css'
import {HiBadgeCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const ThankyouPage = () => {

    const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='thankyou-container'>
        <HiBadgeCheck color='#00e9bf' style={{fontSize:"40px"}}/>
        <h2>Your order has been place</h2>
        <span>Thank you for Shopping</span>
        <div className='thankyou-btn'>
            <button type="submit" onClick={()=>navigate('/')}>Go to Home</button>
            <button type="submit" onClick={()=>navigate('/cart')}>Go To Cart</button>
        </div>
        </div>
    </div>
  )
}

export default ThankyouPage