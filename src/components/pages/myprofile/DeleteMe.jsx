import React, { useState } from 'react'
import { Dialog } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteMyAccount } from '../../../services/authSlice';

const DeleteMe = (props) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const { open, setOpen } = props;

    const imageUrlOpen = 'https://images.bewakoof.com/web/eye-open-1616575719.png';
    const imageUrlClose = 'https://images.bewakoof.com/web/eye-closed-1616575718.png';

    const [togglePassword, setTogglePassword] = useState(true);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        let deleteData = {
            name: user?.name,
            email: user?.email,
            password: password,
        }
        await dispatch(deleteMyAccount(deleteData))

        setPassword('');
        toast.success("Account deleted successfully");
        setOpen(false);
        await localStorage.removeItem('user');
    }



    const handleTogglePassword = () => {
        if (togglePassword) {
            setTogglePassword(false);
        }
        else {
            setTogglePassword(true);
        }
    }


    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleCloseModal}>
            <div className='update-password' style={{height:'250px'}}>
                <div className='forgot-user'>
                    <div>
                        <h3>Delete My Account</h3>
                        <span>{user?.email}</span>
                    </div>
                    <button onClick={() => setOpen(false)}><AiFillCloseCircle /></button>
                </div>

                <div className='update-password-box'>
                    <form>
                        <div className='password-box' style={{marginTop:'40px'}}>
                            <label>Password</label>
                            <input type={togglePassword ? 'password' : 'text'} value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                            <div className="toggle-show-password" >
                                <img src={togglePassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick={handleTogglePassword} />
                            </div>
                        </div>
                        <hr />
                        <button onClick={handleUpdatePassword}>Delete Account</button>
                    </form>
                </div>
            </div>

        </Dialog>
    )
}

export default DeleteMe