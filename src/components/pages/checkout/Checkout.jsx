import React, { useState } from 'react'
import './Checkout.css'
import { useGetCartItemsQuery } from '../../../services/productApi'
import Loader from '../../../loader/Loader';
import { useDispatch } from 'react-redux';
import { orderItems } from '../../../services/orderSlice';
import { toast } from 'react-toastify';
import { deleteFromCart } from '../../../services/cartSlice';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

    const [errors, setErrors] = useState({});
    const [addressError, setAddressError] = useState('');
    const [address, setAddress] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');


    const { data: cartData, isLoading } = useGetCartItemsQuery();
    const cartItems = cartData?.data?.items;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 2);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedFutureDate = futureDate.toLocaleDateString('en-US', options);

    const validateForm = () => {
        const newErrors = {};

        if (!cardNumber.match(/^\d{4} \d{4} \d{4} \d{4}$/)) {
            newErrors.cardNumber = 'Enter a valid 16-digit card number.';
        }

        if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
            newErrors.expiryDate = 'Enter a valid expiry date in MM/YY format.';
        }

        if (!cvv.match(/^\d{3}$/)) {
            newErrors.cvv = 'Enter a valid 3-digit CVV.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const numericValue = value.replace(/\D/g, '');
        let formattedValue = ''

        if (name === 'cardNumber') {
            for (let i = 0; i < numericValue.length; i += 4) {
                formattedValue += numericValue.slice(i, i + 4) + ' ';
            }

            formattedValue = formattedValue.trim();

            setCardNumber(formattedValue);

        } else if (name === 'expiryDate') {
            setExpiryDate(value);
        } else if (name === 'cvv') {
            setCvv(numericValue);
        }
    };


    const handleSaveAddress = (e) => {
        e.preventDefault();
        if (!street || !city || !state || !country || !zipcode) {
            setAddressError("All Fields must be filled")
            setTimeout(() => {
                setAddressError('')
            }, 5000)
        }
        else {
            setAddressError('');
            toast.success("Address saved")
            setAddress({
                "street": street,
                "city": city,
                "state": state,
                "country": country,
                "zipCode": zipcode
            })
        }

    }

    const handlePayNow = async (e) => {

        e.preventDefault();
        if (!address) {
            toast.error("Enter your delivery address")
        } else {

            if (validateForm()) {
                for (const item of cartItems) {
                    const productId = item.product?._id;
                    const quantity = item.quantity;

                    const orderData = {
                        productId,
                        quantity,
                        addressType: "HOME",
                        address,
                    };

                    try {
                        const actionResult = await dispatch(orderItems(orderData));
                        if (orderItems.fulfilled.match(actionResult)) {
                            toast.success(actionResult.payload.message);
                            await dispatch(deleteFromCart(productId))
                        } else {
                            toast.error(actionResult.error.message);
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }
                navigate("/thankyou")
            }
        }
    }


    return (
        <>{isLoading ? <Loader /> : (
            <div className='container'>
                <div className='checkout-container'>
                    <div className='product-summary checkout-summary'>
                        <div>
                            <h3 >You are paying for these items</h3>
                            {cartItems?.map((item, index) => (<div key={index} className='item-pricing' style={{ paddingTop: '0' }}>
                                <div className='checkout-image'>
                                    <img src={item.product?.displayImage} alt='' />
                                    <span>{item.quantity}</span>
                                </div>
                                <div style={{ width: '85%', overflow: 'hidden' }}>
                                    <span >{item.product?.name}</span>
                                    <h5>Estimated delivery by <span style={{ color: 'green' }}> {formattedFutureDate}</span> </h5>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div>
                            <h4>PRICE SUMMARY ({cartData?.results}) Items</h4>
                            <div>
                                <div className='item-pricing'>
                                    <span>Total MRP (Incl. of taxes)</span>
                                    <span>₹{cartData?.data?.totalPrice}</span>
                                </div>
                                <div className='item-pricing'>
                                    <span>Shipping Charges</span>
                                    <span className='shipping'>FREE</span>
                                </div>
                                <div className='item-pricing'>
                                    <span>Bag Discount</span>
                                    <span>₹0</span>
                                </div>
                            </div>
                            <div className='item-totaling' style={{ padding: '10px 0px' }}>
                                <div className='item-pricing'>
                                    <span>Final amount</span>
                                    <h3><span>₹</span>{cartData?.data?.totalPrice}</h3>
                                </div>
                                <div className='logos' style={{ padding: '0 15px' }}>
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

                    <div className='checkout-address'>
                        <h2 style={{ marginBottom: '10px' }}>Enter your address</h2>
                        <form>
                            <div className='checkout-form-content'>
                                <label>Street:</label>
                                <input type='text' placeholder='Enter your street' value={street} onChange={(e) => setStreet(e.target.value)} />
                            </div>
                            <div className='checkout-form-content'>
                                <label>City:</label>
                                <input type='text' placeholder='Enter your city' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className='checkout-form-content'>
                                <label>State:</label>
                                <input type='text' placeholder='Enter your state' value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                            <div className='checkout-form-content'>
                                <label>Country:</label>
                                <input type='text' placeholder='Enter your country' value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <div className='checkout-form-content'>
                                <label>Zipcode:</label>
                                <input type='text' placeholder='Enter your zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                            </div>

                            {addressError && <div className='checkout-form-content'>
                                <p className='error'>{addressError}</p>
                            </div>}
                            <div className='checkout-form-content'>
                                <button type='submit' onClick={handleSaveAddress}>Save Address</button>
                            </div>

                        </form>
                    </div>

                    <div className='checkout-payment'>
                        <h2 style={{ marginBottom: '10px' }} >Enter Credit Card Details</h2>
                        <form>
                            <div className='checkout-payment-content'>
                                <label htmlFor='cardNumber'>Card Number:</label>
                                <input type='text' name='cardNumber' id='cardNumber' placeholder='0000-0000-0000-0000' value={cardNumber} onChange={handleInputChange} maxLength="19" />
                            </div>

                            {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}

                            <div className='checkout-payment-content'>
                                <label htmlFor='expiryDate'>Expiry Date (MM/YY):</label>
                                <input type='text' id='expiryDate' name='expiryDate' placeholder='mm/yy' value={expiryDate} onChange={handleInputChange} maxLength="5" />
                            </div>

                            {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}

                            <div className='checkout-payment-content'>
                                <label htmlFor='cvv'>CVV:</label>
                                <input type='text' name='cvv' id='cvv' placeholder='000' value={cvv} onChange={handleInputChange} maxLength="3" />
                            </div>

                            {errors.cvv && <div className="error">{errors.cvv}</div>}

                            <div className='checkout-form-content'>
                                <button type='submit' onClick={handlePayNow}>Pay Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Checkout