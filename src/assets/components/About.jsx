import React from 'react'

const About = () => {
  return (
    <div className="bg-[#cdea68] min-h-screen pt-20  text-neutral-800 rounded-tl-3xl rounded-tr-3xl">

      <div className='pl-10'>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mr-50'>
          <h1 className='text-[3vw] leading-[3vw] border-b-[0.5px] border-zinc-600 pb-25'  >We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-5">
           <div className="col-span-1 md:col-span-2">
              <h2 className="text-[1.2vw]  mb-4">What you can expect.</h2>
            </div>
                   <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <p className="mb-10 text-[1.2vw]">
                          We don’t just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say, “I want in!”
                        </p>
                        <p className="mb-10 text-[1.2vw] ">
                          Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.
                        </p>
                        <p className='text-[1.2vw] '>
                          Since 2019, we’ve been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
                        </p>
                  </div>

                  <div className=" items-start lg:items-end md:justify-self-end mt-65 ">
                    <p className="mb-2">S:</p>
                        <ul className="text-[1.2vw] list-none space-y-1 mr-50">
                          <li><a href="#" className="underline hover:text-blue-600">Instagram</a></li>
                          <li><a href="#" className="underline hover:text-blue-600">Behance</a></li>
                          <li><a href="#" className="underline hover:text-blue-600">Facebook</a></li>
                          <li><a href="#" className="underline hover:text-blue-600">LinkedIn</a></li>
                        </ul>
                  </div>
        </div>

      </div>
        <div className='f-full flex gap-5 border-t-[1px] border-zinc-500 mt-10 mr-10'>
              <div className='w-1/2'>
                      <h1 className='text-[3vw] ml-15 mt-3 font-semibold '>How we can help:</h1>
                      
                    <button className='bg-[#202020] rounded-4xl py-4 px-7 ml-15 mt-3 font-semibold uppercase text-white flex gap-5'>Read More
                      <div className='bg-white rounded-full w-4 h-4 mt-1'> </div>
                    </button>
              </div>
              <div className='w-1/2 h-[70vh]  rounded-xl bg-[#c7da83] mt-10 mb-10'></div>
        </div>
</div>
  )
}

export default About