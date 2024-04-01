import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Menu from '@/components/Menu'

import React from 'react'
import Survey from '@/components/Survey'

const page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Survey />
    </div>
  )
}

export default page