import React from 'react'
// import './ForgotPassword.css'

import { Dialog } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { forgotPassword } from '../../services/authSlice';

const ForgotPassword = (props) => {

    const { open, setOpen } = props;

    const imageUrlOpen = 'https://images.bewakoof.com/web/eye-open-1616575719.png';
    const imageUrlClose = 'https://images.bewakoof.com/web/eye-closed-1616575718.png';

    const [togglePassword, setTogglePassword] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // useEffect(()=>{
    //     // setLoading(true);
    //     fetch('https://gnews.io/api/v4/top-headlines?category=sports&apikey=ea3bb3a33db10a8b7cc968ab6773b57e&max=10&lang=en')
    //     .then(response => response.json())
    //     .then(data => setNewsData(data))
    //     // setLoading(false);
    //   },[])

    
    const dispatch = useDispatch();


    const handleForgotPassword = (e) => {
        e.preventDefault();
        let forgotData = {
           name,
           email,
           password,
           appType : "ecommerce"
        }
        dispatch(forgotPassword(forgotData))
            .then((result) => {
                if (result.payload) {
                    setName('');
                    setEmail('');
                    setPassword('');
                    toast.success("Password updated successfully");
                    setOpen(false);
                }
                else {
                    setName('');
                    setEmail('');
                    setPassword('');
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

  const handleCloseModal = () => {
      setOpen(false)
  }


  return (
    <Dialog open={open} onClose={handleCloseModal}>
    <div className='update-password' style={{height:'350px'}}>
        <div className='forgot-user'>
            <div>
                <h3>Forgot password</h3>
            </div>
            <button onClick={() => setOpen(false)}><AiFillCloseCircle /></button>
        </div>

        <div className='update-password-box'>
            <form>
                <div className='password-box'>
                    <label>Name</label>
                    <input type='text' value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />  
                </div>
                <hr />
                <div className='password-box'>
                    <label>Email</label>
                    <input type='email' value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />  
                </div>
                <hr />
                <div className='password-box'>
                    <label>New password</label>
                    <input type={togglePassword ? 'password' : 'text'} value={password} placeholder="Enter new password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="toggle-show-password" >
                        <img src={togglePassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick={handleTogglePassword} />
                    </div>
                </div>
                <hr />
                <button onClick={handleForgotPassword}>Forgot password</button>
            </form>
        </div>
    </div>

</Dialog>
  )
}

export default ForgotPassword