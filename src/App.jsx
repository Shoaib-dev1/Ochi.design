import React from 'react'
import Navbar from './assets/components/Navbar'
import Landingpage from './assets/components/Landingpage'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white '>
        <Navbar />
        <Landingpage />
    </div>
  )
}

export default App