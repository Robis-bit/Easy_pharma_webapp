import React from 'react'
import Featuers from './Featuers'
import Hero from './Hero'
import Product from './Product'

const Home = () => {
  return (
    <div className='bg-[#611983]'>
      <Hero/>
      <Product/>
      <Featuers/>
    </div>
  )
}

export default Home