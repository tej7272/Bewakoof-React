import React from 'react'
import './WishlistCard.css'
import { BiSolidStar } from 'react-icons/bi'
import { PiShoppingBagOpenLight } from 'react-icons/pi'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../services/cartSlice';
import { deleteFromWishlist } from '../../../services/wishlistSlice';
import { useGetWishlistItemsQuery } from '../../../services/productApi';
import { toast } from 'react-toastify';

const WishlistCard = (props) => {
    const ratings = (3 + Math.random() * 2).toFixed(1);

    const { refetch } = useGetWishlistItemsQuery();

    const { products } = props;
    const productId = products._id;
    const dispatch = useDispatch();

    const handleCartButton = async (e) => {
        e.preventDefault();

        try {
            const actionResult = await dispatch(addToCart({productId,quantity: 1}));
            if (addToCart.fulfilled.match(actionResult)) {
                toast.success(actionResult.payload.message);

            } else {
                toast.error(`${actionResult.error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        await dispatch(deleteFromWishlist(productId));
        await refetch();
    }

    const handleDeleteWishlist = async () => {

        try {
            const actionResult = await dispatch(deleteFromWishlist(productId));
            if (deleteFromWishlist.fulfilled.match(actionResult)) {
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
        <div className='wishlist-card'>

            <div className='wishlist-card-img'>
                <div className='wishlist-img'>
                    <img src={products?.displayImage} alt='' className='wishlist-img-tag' />
                </div>
                <div className='ratingTag'>
                    <BiSolidStar style={{ color: '#ffc700' }} />
                    <span> {ratings}</span>
                </div>
            </div>

            <div className='wishlist-card-details'>
                <div className='d-flex'>
                    <div className='wishlist-naming'>
                        <h3>Bewakoof®</h3>
                        <h2>{products.name}</h2>
                    </div>

                    <div className='wishlist-icon'>
                        <img src="https://images.bewakoof.com/web/crossBtnIcon.svg" loading="lazy" alt="cancel_img" className="wishlist-remove-icon" style={{ width: '24px' }} title='Remove Item' onClick={handleDeleteWishlist} />
                    </div>
                </div>

                <div className='productPrice'>
                    <span>₹</span>{products.price}
                </div>
                <button type='submit' className='cartBtn' onClick={handleCartButton}><PiShoppingBagOpenLight /> ADD TO BAG</button>
            </div>

        </div>
    )
}

export default WishlistCard