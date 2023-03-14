import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Home from './components/Home'
import Signup from './components/Signup';
import { Collapse } from "flowbite";
import Footer1 from './components/Footer1';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-gradient-to-tl from-black to-[#330c46]'>
      <Router>
        <Navbar />
        <div >
          <Routes>
            <Route exact path='/Signin' element={<Signin />} />
            <Route exact path='/Signup' element={<Signup />} />
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer1/>
      </Router>
    </div>
  )
}

export default App