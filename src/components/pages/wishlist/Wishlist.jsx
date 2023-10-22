import React, { useEffect } from 'react'
import './Wishlist.css'
import { Link } from 'react-router-dom'
import WishlistCard from './WishlistCard'
import { useGetWishlistItemsQuery } from '../../../services/productApi'
import Loader from '../../../loader/Loader'

const Wishlist = () => {

  const { data, isLoading, refetch } = useGetWishlistItemsQuery();

  const wishlistData = data?.data?.items

  useEffect(() => {

    refetch();

  }, [refetch])


  return (
    <div>
      {isLoading ? (<Loader />) : (
      <div className='container' style={{ padding: '30px 0px' }}>
        {wishlistData?.length === 0 ? (<div className='wishlist-empty'>
          <img src='https://images.bewakoof.com/web/wishlistEmpty.svg' alt='empty wishlist' />
          <h3>Hey! Your wishlist is empty.</h3>
          <p>Save your favourites here and make them yours soon!</p>
          <Link to='/'>SHOP NOW</Link>
        </div>) : (

          <div className='product-container'>
            <h2 style={{marginBottom:'25px'}}>My Wishlist</h2>
            <div className='product-card-container'>
              {wishlistData?.map((items, index) => (
                <WishlistCard key={index} {...items} />
              ))}
            </div>

          </div>
        )}

      </div>
      )}

    </div>
  )
}

export default Wishlist