import React from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const name = user?.name;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <div className='profile-section'>
      <div className='profile-name'>Hii, {name}</div>
      <div className='profile-items'>
        <Link to="/account/account">My Account</Link>
      </div>
      <div className='profile-items'>
        <Link to="/wishlist" >My Wishlist</Link>
      </div>
      <div className='profile-items'>
        <Link to="/account/order" >My orders</Link>
      </div>
      <div className='profile-items'>
        <button type='submit' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile