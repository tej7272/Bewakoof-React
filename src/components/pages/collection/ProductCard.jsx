import React from 'react'
import './ProductCard.css'
import { BiSolidStar } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../services/wishlistSlice';
import { toast } from 'react-toastify';

const ProductCard = (props) => {
  const { name, displayImage, price, seller, sellerTag, _id } = props;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  const productId = _id;

  const { type } = useParams();
  const ratings = (3 + Math.random() * 2).toFixed(1);

  const dispatch = useDispatch();
  const handleAddWishlistItem = async () => {

    const currentLocation = window.location.pathname;

      if(!token){
        navigate(`/login?redirectPath=${currentLocation}`);
    }
    else{
    try {
        const actionResult = await dispatch(addToWishlist(productId));
        if (addToWishlist.fulfilled.match(actionResult)) {
            toast.success("Item is added to Wishlist");
          
        } else {
          toast.error(`${actionResult.error.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

  }

  const imageUrl = 'https://images.bewakoof.com/t1080/men-s-red-checked-shirt-591789-1683536121-1.jpg';
  return (
    <div className='productCard'>
      <Link to={`/${type}/${productId}`}>
        <div className='productCardImg'>
          <div className='productImg'>
            <img src={displayImage ? displayImage : imageUrl} alt='' className='productImgTag' />
          </div>
          <div className='productSellerTag'>
            <span>{sellerTag ? sellerTag : ""}</span>
          </div>
          <div className='ratingTag'>
            <BiSolidStar style={{ color: '#ffc700' }} />
            <span> {ratings}</span>
          </div>
        </div>
      </Link>

      <div className='productCardDetails'>
        <div className='d-flex'>
          <div className='productNaming'>
            <h3>{seller.name}</h3>
            <h2>{name}</h2>
          </div>

          <div className='wishlistIcon'>
            <img src='https://images.bewakoof.com/web/Wishlist.svg' alt='wishlist' onClick={handleAddWishlistItem} />
          </div>
        </div>

        <div className='productPrice'>
          <span>₹</span>{price}
        </div>
        <p></p>
      </div>

    </div>
  )
}

export default ProductCard