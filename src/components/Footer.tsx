import React from 'react'
import { BsPinterest, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container pt-8 mx-auto    '>
        <div className='grid md:grid-cols-3 gap-16  '>
            <div className='space-y-4 '>
                <h2 className='text-xl font-bold'>About Us</h2>
                  <ul className='spca-y-2'>
                <li>About Us</li>
                <li>Chefs</li>
                <li>Events</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='space-y-4'>
            <h2 className='text-xl font-bold'>The Restaurant</h2>
            <ul className='spca-y-2'>
                <li>About Us</li>
                <li>Chefs</li>
                <li>Events</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='flex gap-8 text-red-600 text-2xl pt-16'>
                <FaFacebook />
                <BsTwitter />
                <BsPinterest />
                <FaLinkedin />
            </div>
        </div>

    </div>
    


  )
}

export default Footer