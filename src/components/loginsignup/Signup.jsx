import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../services/authSlice';
import { toast } from 'react-toastify';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [toastClass, setToastClass] = useState("");


  const imageUrlOpen = 'https://images.bewakoof.com/web/eye-open-1616575719.png';
  const imageUrlClose = 'https://images.bewakoof.com/web/eye-closed-1616575718.png';

  const handleTogglePassword = () => {
    if (togglePassword) {
      setTogglePassword(false);
    }
    else {
      setTogglePassword(true);
    }
  }

  const dispatch = useDispatch();
  const location = useLocation();


  const handleSubmit = (e) => {
    e.preventDefault();
    let signupData = {
      name,
      email,
      password,
      appType: 'ecommerce'
    }

    const redirectPath =
      new URLSearchParams(location.search).get('redirectPath') || '/';

    if (!email.includes('@gmail.com')) {
      setToastMessage("Enter a valid email");
      setToastClass("formToastError");
      setTimeout(() => {
        setToastMessage('');
      }, 5000);

    }
    else {

      if (password.length >= 5) {

        dispatch(signUpUser(signupData))
          .then((result) => {

            if (result.payload) {
              setName('');
              setEmail('');
              setPassword('');
              toast.success("User account created successfully");
              window.location.href = redirectPath; 
            }
            else {
              setToastMessage(result.error.message);
              setToastClass("formToastError");
              setTimeout(() => {
                setToastMessage('');
              }, 5000);
            }
          })
      }
      else {
        setToastMessage("Password must be at least 5 characters long");
        setToastClass("formToastError");
        setTimeout(() => {
          setToastMessage('');
        }, 6000);
      }
    }
  }

  return (
    <div className='loginWrapper'>
      <div className='mob-pass-wrap'>
        <div className='otp-desk-view-wrap'>
          <div className='body container'>

            <div className='mob-pass-body'>
              {toastMessage && <span id="mob_toast_error" className={`formToast ${toastClass}`}>
                <span>{toastMessage}</span>
              </span>}
              <h2>Create an account</h2>
              <form name="SignupForm" noValidate="" autoComplete="off" onSubmit={handleSubmit}>

                <div className="xgroup">
                  <input autoComplete="off" className="" id="name_input" type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="xgroup">
                  <input autoComplete="off" className="" id="email_input" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="xgroup input-mob-pass">
                  <input autoComplete="off" id="mob_password" type={togglePassword ? "password" : ""} name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="password">Password</label>
                  <div className="show-pass-icon-toggle" >
                    <img src={togglePassword ? imageUrlOpen : imageUrlClose} alt="password_toggle" onClick={handleTogglePassword} />
                  </div>
                </div>

                <button id="mob_login_password_submit" type="submit" className="loginSubmit loginSubmit-disable" >Sign Up</button>
              </form>
              <span>Existing User? <Link to='/login'>Log In</Link></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup