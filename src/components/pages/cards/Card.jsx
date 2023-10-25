import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { addToWishlist } from '../../../services/wishlistSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Card = (props) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;

    const { displayImage, brand, name, price, _id } = props

    const productId = _id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddWishlistItem = async () => {
        const currentLocation = window.location.pathname;

        if (!token) {
            navigate(`/login?redirectPath=${currentLocation}`);
        }
        else {
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

    return (
        <div className='category-card'>
            <div className='category-card-content'>
                
                <div className='category-card-image'>
                    <Link to={`/item/${productId}`}>
                    <img src={displayImage} alt='category' />
                    </Link>
                </div>
                <div className='category-card-details'>
                    <div className='category-details-content'>
                        <h3 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{brand}</h3>
                        <AiOutlineHeart style={{ fontSize: '17px', cursor:'pointer' }} onClick={handleAddWishlistItem} />
                    </div>
                    <h4 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{name}</h4>
                    <h4><span>₹</span>{price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card