import React from 'react'
import './MyOrders.css';
import { Link } from 'react-router-dom';
import { useGetOrderDetailsQuery } from '../../../services/productApi';
import Loader from '../../../loader/Loader';
import MyOrdersCard from './MyOrdersCard';


const MyOrders = () => {

  const { data: orderData, isLoading } = useGetOrderDetailsQuery();

  const orderItems = orderData?.data
  console.log("orderdata", orderItems)
  return (
    <>{isLoading ? <Loader /> : (
      <div className='container'>
        <div className='orders-container'>
          <div className='order-heading'>
            <h1>Your orders</h1>
            <h1>Total orders : {orderData?.results? orderData?.results:0}</h1>
          </div>
          {!orderData?.results ? (<div className='order-empty'>
            <div><img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg' alt='empty-bag' /></div>
            <div><h3>Sadly, you haven't placed any orders till now.</h3></div>
            <div><Link to='/'>Continue Shopping</Link></div>
          </div>)
          
          : (<div className='order-content'>
            {orderItems?.map((item, index) => (
              <MyOrdersCard key={index} {...item} />
            ))}
          </div>)
          }
        </div>
      </div>
    )}
    </>
  )
}

export default MyOrders