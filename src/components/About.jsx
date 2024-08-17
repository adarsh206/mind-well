/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import thumnailImg from "../assets/video-thumbnail.webp"
import { IoPlay } from 'react-icons/io5';

const About = () => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  }

  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
        <div className='md:w-1/2 w-full mb-8 md:mb-0'>
          {
            !isVideoPlaying ? (
              <div className='relative'>
                <img src={thumnailImg} alt='video thumbnail' className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
                <button onClick={handleVideoPlay}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'>
                    <IoPlay className='size-12text-white'/>
                </button>
              </div>
            ) : (null)
          }
        </div>
        <div className='md:w-1/2 w-full'>
          Right Side
        </div>
        </div>

        {
          isVideoPlaying && (
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/AOHT-YiOeQA?si=TcfO6rDEQomtgodh?autoplay=1" 
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowfullscreen className='rounded-lg ml-36'>
              </iframe>
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export default About