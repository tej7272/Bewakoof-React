import React from 'react'
import './MyOrdersCard.css'


const MyOrdersCard = (props) => {

  const {order, createdAt} = props;
  const orderDetails = order?.items[0]?.product
  const MRP = orderDetails?.price + 400;
  const discount = parseInt(400/MRP*100);


  const { format } = require("date-fns");
const inputDate = new Date(createdAt);
const formattedDate = format(inputDate, "dd MMMM, yyyy");


  return (
    <div className='order-item'>
      <div className='order-image'>
        <img src={orderDetails?.displayImage} alt='order'/>

      </div>
      <div className='order-box'>
        <h3 className="order-box-content">{orderDetails?.name}</h3> 
        <h4 className="order-box-content">Order placed On <span>{formattedDate}</span></h4>
        <h4 className="order-box-content">Price : ₹ {orderDetails?.price}</h4>
        <h5 className="order-box-content">(Incl.all Taxes)</h5>

        <hr className="order-box-content"/>
        <h4 className="order-box-content" style={{textDecoration: 'line-through'}}>MRP ₹ {MRP}</h4>
        <span>You got {discount}% OFF</span>

      </div>
    </div>
  )
}

export default MyOrdersCard