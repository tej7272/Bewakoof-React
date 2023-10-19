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
  

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center"/>
      <Navbar />
      <div className='mainContainer'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:type' element={<Collection />} />
          <Route exact path='/:type/:productId' element={<SingleProduct />} />
          <Route exact path='/cart' element={<Carts />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

        </Routes>
        
      </div>
    </div>
  );
}

export default App;