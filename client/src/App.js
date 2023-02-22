import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Collapse } from "flowbite";

const App = () => {
  return (
    <div className='relative h-screen bg-gradient-to-tl from-black to-[#330c46]'>
      <Router>
        <Navbar />
        <div >
          <Routes>
            <Route exact path='/' element={<Signin />} />
            <Route exact path='/Signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App