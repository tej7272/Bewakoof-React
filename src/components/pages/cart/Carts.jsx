import React, { useEffect } from 'react'
import './Carts.css';
import { Link } from 'react-router-dom';
import { useGetCartItemsQuery } from '../../../services/productApi';
import CartsCard from './CartsCard';
import Loader from '../../../loader/Loader';

const Carts = () => {

    const { data: cartData, refetch, isLoading } = useGetCartItemsQuery();

    const cartItems = cartData?.data?.items;

    useEffect(() => {

        refetch();
        
    }, [refetch])



    return (
        <>{isLoading ? <Loader /> : (

            <div className='container'>

                {cartData?.results === 0 ? (<div className='cart-empty'>
                    <img src='https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png' alt='bag' />
                    <h3>Nothing in the bag</h3>
                    <Link to='/'>Continue Shopping</Link>
                </div>) : (<div>
                    <h2>My Bag <span>{cartData?.results} item</span></h2>
                    <div className='product-details'>
                        <div className='product-box'>
                            {cartItems?.map((item, index) => (
                                <CartsCard key={index} {...item} />
                            ))}
                        </div>
                        <div className='product-summary'>
                            <h4>PRICE SUMMARY</h4>
                            <div>
                                <div className='item-pricing'>
                                    <span>Total MRP (Incl. of taxes)</span>
                                    <span>{cartData?.data?.totalPrice}</span>
                                </div>
                                <div className='item-pricing'>
                                    <span>Shipping Charges</span>
                                    <span className='shipping'>FREE</span>
                                </div>
                                <div className='item-pricing'>
                                    <span>Bag Discount</span>
                                    <span>₹0</span>
                                </div>
                                <div className='item-pricing'>
                                    <h3>Subtotal</h3>
                                    <h3>{cartData?.data?.totalPrice}</h3>
                                </div>
                            </div>
                            <div className='item-totaling'>
                                <div className='item-totaling-content'>
                                    <div >
                                        <span>Total</span>
                                        <h3><span>₹</span>{cartData?.data?.totalPrice}</h3>
                                    </div>
                                    <button>ADD ADDRESS</button>
                                </div>
                                <div className='logos'>
                                    <div className='logos-image'>
                                        <img src='https://images.bewakoof.com/web/cart-badge-trust.svg' alt='offer' />
                                        <h3 className="ProductText">100% SECURE PAYMENTS</h3>
                                    </div>

                                    <div className='logos-image'>
                                        <img src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='offer' />
                                        <h3 className="ProductText">EASY RETURNS &amp; QUICK REFUNDS</h3>
                                    </div>

                                    <div className='logos-image'>
                                        <img src='https://images.bewakoof.com/web/quality-check.svg' alt='offer' />
                                        <h3 className="ProductText">QUALITY ASSURANCE</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                )}

            </div>
        )}
        </>
    )
}

export default Carts