import './App.css';
// import Signup from './components/loginsignup/Signup';
// import BottomHeader from './components/navbar/BottomHeader';
// import Login from './components/loginsignup/Login';
import Navbar from './components/navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mainContainer'>
      {/* <BottomHeader /> */}
      <Home />
{/* 
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes> */}
        
      </div>
    </div>
  );
}

export default App;