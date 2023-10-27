import './App.css';
import Signup from './components/loginsignup/Signup';
import Login from './components/loginsignup/Login';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Collection from './components/pages/collection/Collection';
import SingleProduct from './components/pages/singleProduct/SingleProduct';
import Wishlist from './components/pages/wishlist/Wishlist';
import Carts from './components/pages/cart/Carts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyAccount from './components/pages/myaccount/MyAccount';
import MyOrders from './components/pages/myaccount/MyOrders';
import Checkout from './components/pages/checkout/Checkout';
import ThankyouPage from './components/pages/checkout/ThankyouPage';
import { createContext, useState } from 'react';
import MyProfile from './components/pages/myprofile/MyProfile';
import HomeSinglePage from './components/pages/singleProduct/HomeSinglePage';

export const SearchContext = createContext();

function App() {


  const [searchTerm, setSearchTerm] = useState();


  return (
    <SearchContext.Provider  value={{ searchTerm, setSearchTerm }} >
    <div className="App">
      <ToastContainer position="top-center"/>
      <Navbar />
      <div className='mainContainer'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:type' element={<Collection />} />
          <Route exact path='/:type/:productId' element={<SingleProduct />} />
          <Route exact path='/items/category/:productId' element={<HomeSinglePage />} />
          <Route exact path='/cart' element={<Carts />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path='/account' element={<MyAccount />} />
          <Route exact path='/orders' element={<MyOrders />} />
          <Route exact path='/myprofile' element={<MyProfile />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/thankyou' element={<ThankyouPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </SearchContext.Provider>
  );
}

export default App;