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

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Box />} />
            <Route path='/resident-page' element={<ResidentPage/>} />
            <Route path='/contact-us' element={<ContactUs/>} />
            
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
