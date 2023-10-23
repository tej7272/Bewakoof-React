import React from 'react'
import './ForgotPassword.css'

const ForgotPassword = () => {

    const user = JSON.parse(localStorage.getItem('user'));


    // useEffect(()=>{
    //     // setLoading(true);
    //     fetch('https://gnews.io/api/v4/top-headlines?category=sports&apikey=ea3bb3a33db10a8b7cc968ab6773b57e&max=10&lang=en')
    //     .then(response => response.json())
    //     .then(data => setNewsData(data))
    //     // setLoading(false);
    //   },[])


  return (
    <div className='forgot-password'>
        <div className='forgot-user'>
            <h3>{user?.email}</h3>
            <button >X</button>
        </div>
    </div>
  )
}

export default ForgotPassword