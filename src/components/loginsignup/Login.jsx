import React, { useState } from 'react'
import './Login.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/authSlice';
import ForgotPassword from './ForgotPassword';

const Login = () => {

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);
  const [toastClass, setToastClass] = useState("");

  const imageUrlOpen='https://images.bewakoof.com/web/eye-open-1616575719.png';
  const imageUrlClose='https://images.bewakoof.com/web/eye-closed-1616575718.png';
  
  const dispatch = useDispatch();
  const location = useLocation();

  const handleTogglePassword = ()  =>{
    if(togglePassword){
      setTogglePassword(false);
    }
    else{
      setTogglePassword(true);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let loginData = {
      email,
      password,
      appType: 'ecommerce'
    }

    const redirectPath =
      new URLSearchParams(location.search).get('redirectPath') || '/';
  

    dispatch(loginUser(loginData))
      .then((result) => {

        if (result.payload) {
          setEmail('');
          setPassword('');
          setToastMessage("User login successful");
          setToastClass("formToastSuccess");
          setTimeout(() => {
            setToastMessage('');
          }, 5000);
          window.location.href = redirectPath;

        }
        else {
          setEmail('');
          setPassword('');
          setToastMessage(result.error.message);
          setToastClass("formToastError");
          setTimeout(() => {
            setToastMessage('');
          }, 5000);
        }
      })
  }

  return (
    <div className='loginWrapper'>
      <div className='mob-pass-wrap'>
        <div className='otp-desk-view-wrap'>
          <div className='body container'>

            <div className='mob-pass-body'>
              {toastMessage && <span id="mob_toast_error" className={`formToast ${toastClass}`}>
                <span>{toastMessage}.</span>
              </span>}
              <h2>Log in to your account</h2>
              <form name="loginForm" noValidate="" autoComplete="off">

                <div className="xgroup">
                  <input autoComplete="off" className="" id="email_input" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="xgroup input-mob-pass">
                  <input autoComplete="off" id="mob_password" type={togglePassword ? "password" : ""} name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="password">Password</label>
                  <div className="show-pass-icon-toggle" >
                    <img src={togglePassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick = {handleTogglePassword}/>
                  </div>
                </div>

                <div className="forgotPassword">
                  <button type="button" id="web_forgot_password_link" onClick={()=>setOpen(true)}>Forgot Password?</button>
                </div>

                <ForgotPassword open={open} setOpen={setOpen}/>

                <button id="mob_login_password_submit" type="submit" className="loginSubmit loginSubmit-disable" onClick={handleLogin}>Login</button>
              </form>
              <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login