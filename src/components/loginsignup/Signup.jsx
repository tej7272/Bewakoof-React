import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../services/authSlice';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastClass, setToastClass] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let signupData = {
      name,
      email,
      password,
      appType: 'ecommerce'
    }

      if (!email.includes('@gmail.com')) {
        setToastMessage("Enter a valid email");
        setToastClass("formToastError");
        setTimeout(() => {
          setToastMessage('');
        }, 6000);

      }
      else {

        if (password.length >= 5) {

          dispatch(signUpUser(signupData))
            .then((result) => {

              if (result.payload) {
                setName('');
                setEmail('');
                setPassword('');
                setToastMessage("User account created successfully");
                setToastClass("formToastSuccess");
                setTimeout(() => {
                  setToastMessage('');
                }, 6000);
                
                //  navigate('/quora')
              }
              else {
                setToastMessage(result.error.message);
                setToastClass("formToastError");
                setTimeout(() => {
                  setToastMessage('');
                }, 6000);
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
                  <span className="bar"></span>
                  <label htmlFor="name">Name</label>
                </div>

                <div className="xgroup">
                  <input autoComplete="off" className="" id="email_input" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <span className="bar"></span>
                  <label htmlFor="email">Email</label>
                </div>

                <div className="xgroup input-mob-pass">
                  <input autoComplete="off" id="mob_password" type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="bar"></span>
                  <label htmlFor="password">Password</label>
                  <div className="show-pass-icon-toggle">
                    <img src="https://images.bewakoof.com/web/eye-open-1616575719.png" alt="password_toggle" />
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