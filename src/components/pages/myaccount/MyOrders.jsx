import React from 'react'
import './MyOrders.css';
import { Link } from 'react-router-dom';


const MyOrders = () => {
  return (
    <div className='container'>
        <div className='orders-container'>
            <h1>My Orders</h1>
            <div className='order-empty'>
                <div><h3>Sadly, you haven't placed any orders till now.</h3></div>
                <div><img src='https://images.bewakoof.com/sizeguide/no-orders.png' alt='empty-bag' /></div>
                <div><Link to='/'>Continue Shopping</Link></div>
            </div>
        </div>
    </div>
  )
}

export default MyOrders