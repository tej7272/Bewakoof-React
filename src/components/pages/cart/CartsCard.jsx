import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../services/cartSlice';
import { useGetCartItemsQuery } from '../../../services/productApi';
import { toast } from 'react-toastify';

const CartsCard = (props) => {

  const { product } = props;

  const productId = product._id;
  const dispatch = useDispatch();

  const { refetch } = useGetCartItemsQuery();

  const handleRemoveCartItem = async () => {

    try {
      const actionResult = await dispatch(deleteFromCart(productId));
      if (deleteFromCart.fulfilled.match(actionResult)) {
        toast.success(actionResult.payload.message);

      } else {
        toast.error(actionResult.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    await refetch();
  }
  return (
    <div className='product-content-box'>
      <div className='item-details'>
        <div>
          <h4>{product.name}</h4>
          <h2>₹{product.price}</h2>
          <span>You saved ₹650!</span>
        </div>
        <div className='cart-image'>
          <img src={product.displayImage} alt="cart item" />
        </div>
      </div>
      <button type='submit' onClick={handleRemoveCartItem}>Remove</button>
    </div>
  )
}

export default CartsCard