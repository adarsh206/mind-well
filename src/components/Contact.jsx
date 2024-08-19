/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name, 
      email,
      phone,
      country,
      message
    }
    
    if(!data){
      alert("Please fill all the fields");
      return;
    }
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  }

  return (
    <div className='bg-heoBg flex items-center justify-center py-28 px-8' id='contact'>
        <motion.div 
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
              <div className='space-y-8'>
                  <h2 className='text-4xl font-bold font-secondary mb-4
                  bg-gradient-to-r from-green-600 via-amber-500 to-pink-600 text-transparent bg-clip-text'>Make an Appointment</h2>
                  <div className='grid grid-col-1 md:grid-cols-2 gap-8 text-white'>
                    <div className='flex items-start gap-4'>
                      <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaUserAlt className='text-primary'/>
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>24 Hour Services</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>  

                    <div className='flex items-start gap-4'>
                      <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaEnvelope className='text-primary'/>
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Expert Therapist</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div> 

                    <div className='flex items-start gap-4'>
                      <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaPhoneAlt  className='text-primary'/>
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>High Quality Care</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div> 

                    <div className='flex items-start gap-4'>
                      <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaGlobe className='text-primary'/>
                      </div>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div> 

                  </div>
              </div>

              <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                  <h3 className='text-2xl font-bold mb-4 text-center'>Book Appointment</h3>
                  <form onSubmit={handleSubmit} className='space-y-8 '>
                    <div className='flex sm:flex-row flex-col gap-4'>
                      <input onChange={e => setName(e.target.value)} 
                      type='text' placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                      shadow'/>
                      <input onChange={e => setEmail(e.target.value)} 
                      type='email' placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                      shadow'/>
                    </div>

                    <div className='flex sm:flex-row flex-col gap-4'>
                      <input onChange={e => setPhone(e.target.value)} 
                      type='tel' placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                      shadow'/>
                      <input onChange={e => setCountry(e.target.value)} 
                      type='text' placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                      shadow'/>
                    </div>
                    <textarea rows="5" onChange={e => setMessage(e.target.value)} 
                    placeholder='Write your message here...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
                      shadow'>
                    </textarea>
                    <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80'>Send Message</button>
                  </form>
              </div>
            </div>
        </motion.div>
        {
          showModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                <h2>Thank You!</h2>
                <p>Thank You, {name}, for submitting you query.</p>
                <button onClick={closeModal}
                className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Contact