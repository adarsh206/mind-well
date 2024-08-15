/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
  <div className='font-primary overflow-x-hidden'>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Pricing />
    <Testimonial />
  </div>
  )
}

export default App