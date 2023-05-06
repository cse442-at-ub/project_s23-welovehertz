import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import LoginNavbar from './components/loginNavbar'
import Login from './pages/loginbar';
import Homepage from './pages/homepage';
import Box from './pages/RegistrationPage';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ResidentPage from './pages/residential-page';
import ContactUs from './pages/profilePage';
import ProfilePage from './pages/profilePage';
import ErrorPage from './pages/errorPage';

function App() {  
  const [isLoggedin, setIsLoggedin] = useState(false);
  
  useEffect(() => {
    const cookie = document.cookie
    if (cookie.includes("currentUserCookie")) {
      setIsLoggedin(true)
    }
  }, [])

  const handleLogin = () => {
    setIsLoggedin(true);
  }


  return (
    <>
      <Router>
          {isLoggedin ? <LoginNavbar/> : <Navbar/>}
          <Routes>
            <Route path='/CSE442-542/2023-Spring/cse-442h/' element={<Homepage />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/login' element={<Login handleLogin={handleLogin}/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/register' element={<Box />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/:id' element={<ResidentPage/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/contact-us' element={<ContactUs/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/profile' element={<ProfilePage/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/error' element={<ErrorPage/>} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
