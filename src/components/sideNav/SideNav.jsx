import React from 'react';
import './SideNav.css';
import { Drawer } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import {GiNurseFemale, GiNurseMale} from 'react-icons/gi';

const SideNav = (props) => {

    const user = JSON.parse(localStorage.getItem('user'));

    

    const { open, setOpen } = props;
    const navigate = useNavigate();

    const handleLogout = (e) =>{
            e.preventDefault();
            setOpen(false);
        localStorage.removeItem('user');
        console.log(user?.token);
    }

    const handleLogin = ()=>{
        navigate('/login');
        setOpen(false);
    }

    const handleLoginSignup = ()=>{
        navigate('/login');
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className='sideNav-container'>
                {user?.token ? (<div className='sideNav-user'>Hello {user?.name}</div>) :
                    <div className='sideNav-user'>
                        <h1>Welcome Guest</h1>
                        <button onClick={handleLoginSignup}>Login / Sign Up</button>
                    </div>
                }
                <hr />
                <div className='sideNav-shops'>
                    <span>SHOP IN</span>

                    <Link to='/men' onClick={()=>setOpen(false)}>
                        <div className='sideNav-category'>
                            <h3>Men</h3>
                            <GiNurseMale />
                        </div>
                    </Link>

                    <Link to='/women' onClick={()=>setOpen(false)} >
                        <div className='sideNav-category'>
                            <h3>Women</h3>
                            <GiNurseFemale />
                        </div>
                    </Link>

                    <Link to='/mobile-cover' onClick={()=>setOpen(false)} >
                        <div className='sideNav-category'>
                            <h3>All Items</h3>
                        </div>
                    </Link>

                </div>

                <hr />

                {user?.token ? (<><div className='sideNav-profile'>
                    <span>My Profile</span>
                    <Link to='/account' onClick={()=>setOpen(false)}>
                        My account
                    </Link>
                    <Link to='/orders' onClick={()=>setOpen(false)}>
                        My orders
                    </Link>
                    <Link to='/wishlist' onClick={()=>setOpen(false)}>
                        My wishlist
                    </Link>
                    <Link to='/cart' onClick={()=>setOpen(false)}>
                        My cart
                    </Link>
                </div>
                   <hr /></>
                ) : <></>}
                <div className='sideNav-btn' >
                    {user?.token ? <button onClick={handleLogout}>Logout</button> :
                    <button onClick={handleLogin}>Login</button>}
                </div>
            </div>
        </Drawer>
    )
}

export default SideNav