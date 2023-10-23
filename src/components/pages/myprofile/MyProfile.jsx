import React, { useState } from 'react'
import './MyProfile.css'
import { useNavigate } from 'react-router-dom';
import UpdatePassword from './UpdatePassword';
import {MdDelete} from 'react-icons/md'
import DeleteMe from './DeleteMe';

const MyProfile = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token

    const [open, setOpen] = useState(false);
    const [deleteMe, setDeleteMe] = useState(false);

    const navigate = useNavigate();


    const handleOpenPassword = () => {
        setOpen(true);
    }
    const handleOpenDeleteMe = () => {
        setDeleteMe(true);
    }

    return (
        <div className='container'>
            <h1 className='user-heading'>My Profile</h1>
            {!token ? <div className='user-login-box'>
                <h2>You are not logged in.</h2>
                <div className='thankyou-btn' style={{ marginTop: '20px' }}>
                    <button type="submit" onClick={() => navigate('/')}>Go to Home</button>
                    <button type="submit" onClick={() => navigate('/login')}>Go to Login</button>
                </div>
            </div> : <div className='user-profile'>
                <span>Name</span>
                <h2>{user?.name}</h2>
                <hr />
                <span>Email Id</span>
                <h2>{user?.email}</h2>

                <hr />
                <form>
                    <div className='password-box'>
                        <label>Password</label>
                        <input type='password' value='password' disabled />

                    </div>
                </form>

                <hr />
                <div className='delete-btns'>
                <button className='forget-btn' onClick={handleOpenPassword}>Change password</button>
               
                <button  className='forget-btn' onClick={handleOpenDeleteMe}><MdDelete /> Delete Account</button>
                </div>

                <UpdatePassword open={open} setOpen={setOpen} />
                <DeleteMe open={deleteMe} setOpen={setDeleteMe} />

            </div>
            }
        </div>
    )
}

export default MyProfile