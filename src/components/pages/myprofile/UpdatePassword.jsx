import React, { useState } from 'react'
import './UpdatePassword.css'
import { Dialog } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../../services/authSlice';
import { toast } from 'react-toastify';

const UpdatePassword = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { open, setOpen } = props;

    const imageUrlOpen = 'https://images.bewakoof.com/web/eye-open-1616575719.png';
    const imageUrlClose = 'https://images.bewakoof.com/web/eye-closed-1616575718.png';

    const [togglePassword, setTogglePassword] = useState(true);
    const [toggleNewPassword, setToggleNewPassword] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [curPassword, setCurPassword] = useState('');

    const dispatch = useDispatch();


    const handleUpdatePassword = (e) => {
        e.preventDefault();
        let updateData = {
            name: user.name,
            email: user.email,
            passwordCurrent: curPassword,
            password: newPassword
        }
        dispatch(updatePassword(updateData))
            .then((result) => {
                if (result.payload) {
                    setNewPassword('');
                    setCurPassword('');
                    toast.success("Password updated successfully");
                    setOpen(false);
                }
                else {
                    setNewPassword('');
                    setCurPassword('');
                    toast.error(result.error.message);

                }
            })

    }



    const handleTogglePassword = () => {
        if (togglePassword) {
            setTogglePassword(false);
        }
        else {
            setTogglePassword(true);
        }
    }
    const handleToggleNewPassword = () => {
        if (toggleNewPassword) {
            setToggleNewPassword(false);
        }
        else {
            setToggleNewPassword(true);
        }
    }

    const handleCloseModal = () => {
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleCloseModal}>
            <div className='update-password'>
                <div className='forgot-user'>
                    <div>
                        <h3>Change password</h3>
                        <span>{user?.email}</span>
                    </div>
                    <button onClick={() => setOpen(false)}><AiFillCloseCircle /></button>
                </div>

                <div className='update-password-box'>
                    <form>
                        <div className='password-box'>
                            <label>Enter your current password</label>
                            <input type={togglePassword ? 'password' : 'text'} value={curPassword} placeholder="Current password" onChange={(e) => setCurPassword(e.target.value)} />
                            <div className="toggle-show-password" >
                                <img src={togglePassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick={handleTogglePassword} />
                            </div>
                        </div>
                        <hr />
                        <div className='password-box'>
                            <label>Enter your new password</label>
                            <input type={toggleNewPassword ? 'password' : 'text'} value={newPassword} placeholder="New password" onChange={(e) => setNewPassword(e.target.value)} />
                            <div className="toggle-show-password" >
                                <img src={toggleNewPassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick={handleToggleNewPassword} />
                            </div>
                        </div>
                        <hr />
                        <button onClick={handleUpdatePassword}>Update password</button>
                    </form>
                </div>
            </div>

        </Dialog>
    )
}

export default UpdatePassword