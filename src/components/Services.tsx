import React from 'react'
import Dash from './Dash'
import ServicesCard from './ServicesCard'


    const servicesdata=[
        {
            img:'/services__1.png',
            title:'Professional Kitchen',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe,'
        },{
            img:'/services__2.png',
            title:'Delivery',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe,'
        },{
            img:'/services__3.png',
            title:'wine List',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe,'
        },{
            img:'/services__4.png',
            title:'Free Wifi',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, modi veritatis nihil quidem minima, fugit saepe,'
        }
    ]
    const Services = () => {
  return (
    <div className='container pt-40 '>
        <div className='space-y-4 w-fit mx-auto  text-center '>
            <h2 className='text-4xl md:text-6xl font-bold'>
                Choose Best <span className='text-red-600'>Services</span>
            </h2>
            <p className='text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus quia magni expedita voluptate aperiam?
                <br />
                magni tempora animi saepe,  expedita?
            </p>
            <div className='w-fit mx-auto'>
                <Dash />
            </div>
        </div>
        <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>
        {servicesdata.map((item,index)=>( <ServicesCard key={index} img={item.img} title={item.title} desc={item.desc} />))}
        </div>
    </div>
  )
}

export default Services