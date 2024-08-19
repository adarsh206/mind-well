/* eslint-disable no-unused-vars */
import React from 'react'
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import {fadeIn} from "../utils/animationVariants.js";

const Hero = () => {
  return (
    <section id='home' className='bg-heoBg text-white flex items-center pt-28 md:h-screen'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        <motion.div 
         variants={fadeIn('right', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='md:w-1/2 h-full -mt-44 md:mt-2'>
                    <img src={heroImg} alt='hero image' className='w-full object-scale-down h-screen'/>
            </motion.div>

            <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='md:w-1/2 -mt-40 md:mt-24'>
                <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug  bg-gradient-to-r from-green-600 via-amber-500 to-pink-600 text-transparent bg-clip-text'>Start Your Journey to Mental Wellness</h1>
                <p className='text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better , we improve our focus, and we are kinder to
                    ourselves. Let us walk you through our basics in our new mindful guide on how to meditate.
                </p>
                <button className='bg-orange-600 text-white py-3.5 px-8 font-medium rounded-md hover:bg-orange-700'>
                    <a href='#contact' className='flex gap-1 items-center'>
                       <span>Get Started</span> 
                       <IoArrowForwardCircleSharp />
                    </a>    
                </button>
            </motion.div>

           
        </div>
    </section>
  )
}

export default Hero