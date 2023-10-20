import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import './MyAccount.css'
import { Link } from 'react-router-dom'

const MyAccount = () => {
    return (
        <div className='container'>
            <div className='account-container'>
                <h1>My Account</h1>
                <div className='account-elements'>
                    <div className='account-orders'>
                        <Link to="/orders">
                        <div className='account-heading'>
                            <h3>My Orders </h3>
                            <span className='arrow-icon'><IoIosArrowForward /></span>
                        </div>
                        <span>View, modify and track orders</span>
                        </Link>

                    </div>
                    <div className='account-separater'></div>

                    <div className='account-orders'>
                        <div className='account-heading'>
                            <h3>My Payments</h3>
                            <span className='arrow-icon'><IoIosArrowForward /></span>
                        </div>
                        <span>View and modify payment methods</span>

                    </div>

                    <div className='account-separater'></div>

                    <div className='account-orders'>
                        <div className='account-heading'>
                            <h3>My Wallet <span>Rs. 0</span></h3>
                            <span className='arrow-icon'><IoIosArrowForward /></span>
                        </div>
                        <span>Bewakoof Wallet History and redeemed gift cards</span>

                    </div>

                    <div className='account-separater'></div>

                    <div className='account-orders'>
                        <div className='account-heading'>
                            <h3>My Addresses </h3>
                            <span className='arrow-icon'><IoIosArrowForward /></span>
                        </div>
                        <span>Edit, add or remove addresses</span>

                    </div>

                    <div className='account-separater'></div>

                    <div className='account-orders'>
                        <div className='account-heading'>
                            <h3>My Profile</h3>
                            <span className='arrow-icon'><IoIosArrowForward /></span>
                        </div>
                        <span>Edit personal info, change password</span>

                    </div>


                </div>
                <div className='account-separater-bottom'></div>

                <div className='account-body'>
                    <div className='account-body-content'>
                        <h3>Buy something to get personalised recommendations.</h3>
                        <Link to="/">Continue Shopping</Link>
                    </div>
                    <div className='account-body-content'>
                        <img src='https://images.bewakoof.com/web/empty-account-1530180452.png' alt='empty-bag' />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default MyAccount