import React, { useState } from 'react';
import './SingleProduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCartItemsQuery, useGetSingleProductQuery } from '../../../services/productApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../services/cartSlice';
import { addToWishlist } from '../../../services/wishlistSlice'
import Loader from '../../../loader/Loader';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { VscStarEmpty } from 'react-icons/vsc';
import { CgNotes } from 'react-icons/cg';
import { RiExchangeLine } from 'react-icons/ri';
import { BiSolidOffer } from 'react-icons/bi'
import { toast } from 'react-toastify';
import HandleResponse from '../../support/HandleResponse';

const SingleProduct = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;

    const [addSignOff, setAddSignOff] = useState("+");
    const [addSignDes, setAddSignDes] = useState("+");
    const [addSignEx, setAddSignEx] = useState("+");
    const [quantity, setQuantity] = useState();


    const { data, isLoading } = useGetSingleProductQuery(productId);
    const productData = data?.data;


    const { refetch } = useGetCartItemsQuery();

    const totalPrice = productData?.price + 400;
    const discount = parseInt(400 / totalPrice * 100);

    const [mainImage, setMainImage] = useState(productData?.displayImage);
    const sliceimages = productData?.images?.slice(0, 5);

    const currentLocation = window.location.pathname;

    const handleAddToCart = async (e) => {
        e.preventDefault();

        if (!token) {
            navigate(`/login?redirectPath=${currentLocation}`);
        }
        else {
            try {
                if (!quantity) {
                    toast.error("select product quantity first");
                } else {

                    const newQuantity = parseInt(quantity) + parseInt(productData?.quantityInCart || 0);

                    const actionResult = await dispatch(addToCart({ productId, quantity: newQuantity }));
                    if (addToCart.fulfilled.match(actionResult)) {
                        toast.success(actionResult.payload.message);

                    } else {
                        toast.error(actionResult.error.message);
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }

            await refetch();
        }
    };

    const handleAddToWishlist = async () => {
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

    const handleOffers = () => {
        if (addSignOff === "+") {
            setAddSignOff("-");
        }
        else {
            setAddSignOff("+");
        }
    }

    const handleDescription = () => {
        if (addSignDes === "+") {
            setAddSignDes("-");
        }
        else {
            setAddSignDes("+");
        }
    }

    const handleExchange = () => {
        if (addSignEx === "+") {
            setAddSignEx("-");
        }
        else {
            setAddSignEx("+");
        }
    }

    return (

        <>
            {isLoading ? <Loader /> : (
                <div className='container'>
                    <div className='contentBox'>
                        <div className='image-container'>
                            <div className='product-total-image hidden-xs'>
                                {sliceimages?.map((item, index) => {
                                    return (
                                        <div className='image-box' key={index}>
                                            <img src={item} alt='' onClick={() => setMainImage(item)} style={{ cursor: 'pointer' }} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='product-image'>
                                <div className='product-image-container'>
                                    <img src={mainImage ? mainImage : productData?.displayImage} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contentBox summary-container'>
                        <div className='description-container'>
                            <div className='description-content'>
                                <h2>{productData?.brand}</h2>
                                <h4>{productData?.name}</h4>
                                <h2>
                                    <span style={{ fontSize: '15px' }}>₹</span>
                                    {productData?.price}
                                    <span style={{ textDecoration: 'line-through', fontSize: '14px', marginLeft: '5px' }}>₹{totalPrice} </span>
                                    <span style={{ color: 'rgb(15, 186, 15)', fontSize: '15px', marginLeft: '5px', fontWeight: '550' }}>{discount}% OFF </span>
                                </h2>
                                <span style={{ fontSize: '14px' }}>Inclusive of all taxes</span>

                                <div style={{ margin: '8px 0' }}>
                                    <span className='seller-tag'>{productData?.sellerTag}</span>
                                    <span className='category'>{productData?.subCategory}</span>
                                    <span className='fabric'>100% COTTON</span>
                                </div>

                            </div>
                            <div className='tribe-offer'>
                                TriBe members get an extra discount of ₹50 and FREE shipping
                            </div>

                            <div style={{ padding: ' 4px', marginBottom: '8px' }}>
                                <div style={{ marginBottom: '10px' }}>Select Size </div>
                                {productData?.size?.map((element, index) => <div className='product-size' key={index} >{element}</div>)}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', padding: ' 4px' }}>
                                <div>Color :</div>
                                <div className='product-color' style={{ background: `${productData?.color}` }} title={`${productData?.color}`} ></div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', padding: ' 4px' }}>
                                <div>Quantity : </div>
                                <select className='product-select' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                    <option value="">Set Qty</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div className='functionBtn'>
                                <button type='submit' onClick={handleAddToCart} className='cartButton'><BsFillBagCheckFill style={{ marginRight: '3px' }} /> add to cart</button>
                                <button type='submit' onClick={handleAddToWishlist} className='wishlistButton'><AiFillHeart /> Wishlist</button>

                            </div>
                            <div className='item-offers'>
                                <div className='items-content'>
                                    <VscStarEmpty />
                                    <div style={{ width: '80%' }}>
                                        <h3>Offers</h3>
                                        <span>SAVE EXTRA WITH 2 OFFERS</span>
                                    </div>
                                    <button onClick={handleOffers}>{addSignOff}</button>
                                </div>

                                {addSignOff === '-' && <div style={{ fontSize: '13px', margin: '15px 4px' }}>
                                    <div style={{ padding: '8px 0' }}> <BiSolidOffer style={{ fontSize: '15px', color: 'rgb(51, 188, 51)' }} /> Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200</div>
                                    <div style={{ padding: '8px 0' }}><BiSolidOffer style={{ fontSize: '15px', color: 'rgb(51, 188, 51)' }} /> Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!</div>
                                </div>
                                }
                            </div>

                            <div className='item-offers'>
                                <div className='items-content'>
                                    <CgNotes />
                                    <div style={{ width: '80%' }}>
                                        <h3>Product Description</h3>
                                        <span>Manufacture, Care and Fit</span>
                                    </div>
                                    <button onClick={handleDescription}>{addSignDes}</button>
                                </div>
                                {addSignDes === '-' && <div style={{ fontSize: '13px', margin: '10px 4px' }} >
                                    <HandleResponse htmlContent={productData?.description} />
                                </div>}
                            </div>

                            <div className='item-offers' >
                                <div className='items-content'>
                                    <RiExchangeLine />
                                    <div style={{ width: '80%' }}>
                                        <h3>15 Days Returns & Exchange</h3>
                                        <span>Know about return & exchange policy</span>
                                    </div>
                                    <button onClick={handleExchange}>{addSignEx}</button>
                                </div>
                                {addSignEx === "-" && <div style={{ fontSize: '13px', margin: '15px 4px' }}>Easy returns upto 15 days of delivery. Exchange available on select pincodes</div>}
                            </div>

                            <div className='logos' style={{ marginTop: '10px' }}>
                                <div className='logos-image'>
                                    <img src='https://images.bewakoof.com/web/cart-badge-trust.svg' alt='offer' />
                                    <h3 className="ProductText">100% SECURE PAYMENTS</h3>
                                </div>

                                <div className='logos-image'>
                                    <img src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='offer' />
                                    <h3 className="ProductText">EASY RETURNS &amp; QUICK REFUNDS</h3>
                                </div>

                                <div className='logos-image'>
                                    <img src='https://images.bewakoof.com/web/Globe.svg' alt='offer' />
                                    <h3 className="ProductText">SHIPPING GLOBALLY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SingleProduct