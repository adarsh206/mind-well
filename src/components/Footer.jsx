/* eslint-disable no-unused-vars */
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';


const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
        <motion.div 
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
            <div className='space-y-6 mr-14'>
                <div className='flex items-center space-x-2'>
                <a href='/'>
                    <h1 className='text-green-600 text-xl font-bold w-32 h-auto'>Mind<span className='text-pink-600 text-xl font-bold'>Well</span></h1>
                </a>
                </div>
                <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam iur
                     aut consequatur suscipit eligendi veniam repudiandae eum aliquam, delectus            
                </p>
                <div className='flex space-x-4'>
                    <a href='#' className='bg-gray-200 text-pink-500 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaFacebook className='text-xl '/>
                    </a>
                    <a href='#' className='bg-gray-200 text-pink-500 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaTwitter className='text-xl '/>
                    </a>
                    <a href='#' className='bg-gray-200 text-pink-500 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaInstagram className='text-xl '/>
                    </a>
                    <a href='#' className='bg-gray-200 text-pink-500 rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaLinkedinIn className='text-xl '/>
                    </a>
                </div>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-3'>
                        <li><a href='#home' className='hover:underline text-gray-700'>Home</a></li>
                        <li><a href='#about' className='hover:underline text-gray-700'>About</a></li>
                        <li><a href='#services' className='hover:underline text-gray-700'>Services</a></li>
                        <li><a href='#contact' className='hover:underline text-gray-700'>Contact Us</a></li>               
                </ul>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Supports</h3>
                <ul className='space-y-3'>
                        <li><a href='#' className='hover:underline text-gray-700'>FAQs</a></li>
                        <li><a href='#' className='hover:underline text-gray-700'>Terms of Services</a></li>
                        <li><a href='#' className='hover:underline text-gray-700'>Privacy Policies</a></li>
                        <li><a href='#' className='hover:underline text-gray-700'>Support Center</a></li>               
                </ul>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt className='text-pink-500'/>
                            <p className='text-gray-700'>123 Street, City, Country</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-pink-500'/>
                            <p className='text-gray-700'>+123 456 7890</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className= 'text-pink-500'/>
                            <p className='text-gray-700'>Info@mindwell.com</p>
                        </li>                             
                </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer