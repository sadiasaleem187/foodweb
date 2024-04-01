import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div className='relative min-h-screen px-8'>
        <Image className='lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10' src="/hero2.png" width={1000} height={600} alt="hero bg"></Image>
        <Navbar />
        <div className='container h-[calc(100vh-125px)] grid items-center '>
            <div className='space-y-4 bg-[#ffffff98] w-fit p-4'>
                <p className='uppercase font-medium'>Wide options of choice </p>
                <h2 className='text-4xl sm:text-6xl font-bold'>
                    Delicious <span className='text-red-600'>Food</span>
                </h2>
                <p className='text-gray-700 text-[14px] sm:text-[16px]'>Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful,
                <br/>
                 pleasant, enjoyable, appealing, enchanting, charming and hihgly pleasant to the taste. You would not call delicious that what is tasteless or unpleasant.<br />
                    What are waiting for?</p>
                    <button className='bg-red-600 text-white px-6 py-2 rounded-3xl text-[14px] sm:text=[16px]'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Hero