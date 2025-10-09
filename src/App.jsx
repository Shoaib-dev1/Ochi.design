import React from 'react'
import Navbar from './assets/components/Navbar'
import Landingpage from './assets/components/Landingpage'
import Marquee from './assets/components/Marquee'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
        <Navbar />
        <Landingpage />
        <Marquee />
    </div>
  )
}

export default App