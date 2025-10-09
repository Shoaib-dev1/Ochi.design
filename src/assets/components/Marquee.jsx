import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
            <div className='marquee-text w-full  flex gap-10 overflow-hidden border-t-1 border-b-1 border-zinc-100 whitespace-nowrap'>    
                    <h1 className='text-[17vw] font-[] font-bold uppercase  leading-none '>We Are Ochi</h1>
                    <h1 className='text-[17vw] font-[] font-bold uppercase  leading-none '>We Are Ochi</h1>
            </div>
    </div>
  )
}

export default Marquee