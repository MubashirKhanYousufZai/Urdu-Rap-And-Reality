import React from 'react'
import Home from './components/home/page'
import Rappers from './components/blog/rappers/page'
import Producers from './components/blog/producers/page'
import Bands from './components/blog/bands/page'
import Albums from './components/albums/page'

const page = () => {
  return (
    <div>
      <Home/>
      <Rappers/>
      <Producers/>
      <Bands/>
      <Albums/>
    </div>
  )
}

export default page
