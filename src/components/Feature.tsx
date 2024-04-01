import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='container pt-40 mt-[1rem] px-8'>
        <h2 className='text-6xl font-bold'>Our</h2>
        <h2 className='text-6xl font-bold pt-2'>Featured <span className='text-red-600'>food</span></h2>
        <p className='max-w-[550px] pt-10 text-gray-700'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, harum impedit id eius odio quia officia. Doloribus officia repudiandae quae ipsam enim sed soluta, eveniet assumenda impedit? Dolorum, itaque? Atque!
        </p>
        <Dash />
        <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
          <div className='w-fit m-auto self-end'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src='/grid__1.png' width={300} height={600} alt='grid image'/>
            <div className='space-y-4'>
              <Dash />
              <h2 className='font-medium text-xl'>Shrimp Salad</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe, fugiat mollitia consequuntur quae facere reiciendis repellat autem corporis neque eaque quas cupiditate eos! 
              </p>
            </div>
          </div>
          <div className='w-fit m-auto'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src='/grid__2.png' width={500} height={900} alt='grid image'/>
            <div className='space-y-4'>
              <Dash />
              <h2 className='font-medium text-xl'>Baked Apples</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe, fugiat mollitia consequuntur quae facere reiciendis repellat autem corporis neque eaque quas cupiditate eos! 
              </p>
            </div>
          </div>
          <div className='w-fit m-auto self-end'>
            <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl' src='/grid__3.png' width={300} height={600} alt='grid image'/>
            <div className='space-y-4'>
              <Dash />
              <h2 className='font-medium text-xl'>Cherries Chicken</h2>
              <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe, fugiat mollitia consequuntur quae facere reiciendis repellat autem corporis neque eaque quas cupiditate eos! 
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Feature