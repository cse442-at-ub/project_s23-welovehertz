import React from 'react';
import Navbar from './components/navbar';
import Login from './pages/loginbar';
import Homepage from './pages/homepage';
import Box from './pages/RegistrationPage';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ResidentPage from './pages/residential-page';
import ContactUs from './pages/contact';
import ProfilePage from './pages/profilePage';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/CSE442-542/2023-Spring/cse-442h/' element={<Homepage />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/login' element={<Login />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/register' element={<Box />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/resident-page' element={<ResidentPage/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/contact-us' element={<ContactUs/>} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
