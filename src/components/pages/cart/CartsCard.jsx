import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../../../services/cartSlice';
import { useGetCartItemsQuery } from '../../../services/productApi';
import { toast } from 'react-toastify';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToWishlist } from '../../../services/wishlistSlice';

const CartsCard = (props) => {

  const { product, quantity } = props;

  const productId = product._id;
  const dispatch = useDispatch();


  const { refetch } = useGetCartItemsQuery();

  const price = product.price*quantity;
  const addedPrice = 400*quantity;

  const totalPrice = price + addedPrice;
  const discount = parseInt(addedPrice / totalPrice * 100);

  const handleIncrease = async (e) => {
    e.preventDefault();
    const productQuantity = 1;

    try {
      await dispatch(addToCart({ productId, quantity: productQuantity }));
    } catch (error) {
      console.error('Error:', error);
    }

    await refetch();

  }


  const handleDecrease = async (e) => {
    e.preventDefault();
    const productQuantity = -1;

    try {
      if (quantity > 1) {
        await dispatch(addToCart({ productId, quantity: productQuantity }));
      }

      else {
        toast.error(`Item quantity should be atleast 1 `);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    await refetch();

  }


  const handleAddToWishlist = async (e) => {
    e.preventDefault();

    try {
      const actionResult = await dispatch(addToWishlist(productId));
      if (addToWishlist.fulfilled.match(actionResult)) {
        toast.success(actionResult.payload.message);
        await dispatch(deleteFromCart(productId));


      } else {
        toast.error(`${actionResult.error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    await refetch();

  }



  const handleRemoveCartItem = async (e) => {
    e.preventDefault();

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
          <h2>₹{price} <span style={{ textDecoration: 'line-through', fontSize: '14px', marginLeft: '5px', }}>₹{totalPrice} </span></h2>
          <span>You got {discount}% discount</span>
          <div className='cart-quantity'>
            <h2>Qty :</h2>
            <button className='quantity-btn' onClick={handleDecrease}><FaMinus style={{ color: 'red', fontSize: '17px' }} /></button>
            <span style={{ fontSize: '15px', color: 'black', margin:'0 3px'}}>{quantity}</span>
            <button className='quantity-btn' onClick={handleIncrease}>< FaPlus style={{ color: 'green', fontSize: '17px' }} /></button>

          </div>
        </div>
        <div className='cart-image'>
          <img src={product.displayImage} alt="cart item" />
        </div>
      </div>
      <button type='submit' onClick={handleRemoveCartItem}>Remove</button>
      <button type='submit' onClick={handleAddToWishlist}>Move to Wishlist</button>
    </div>
  )
}

export default CartsCard