import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='LandingPageText mt-40 px-20'>
         {["We Create", "Eye-Opening","Presentaions"].map((item,index) =>{
          return <div className='masker'>
                       <h1 className='uppercase text-8xl font-bold leading-[5.5vw]tracking-tighter'>
                        {item}
                       </h1>
                 </div>
         })}
            <div className='border-t-[1px] border-zinc-700  mt-40  flex justify-between items-center pt-5 '>
              {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item,index) =>(
                <p className='font-light text-md leading-none tracking-tight'>
                  {item}
                </p>
              ))}
              <div className='button flex items-cneter gap-2'>
                     <div className='uppercase font-light text-md  tracking-tight border-[1px] border-zinc-500 rounded-full w-[11vw] h-[4.5vh] text-center corsor-pointer '>
                               start the project
                    </div>
                    <div className='w-8  h-8  border-[1px] border-zinc-500 rounded-full flex justify-center items-center corsor-pointer '>
                        <span className='-rotate-50 '>
                             <FaArrowRight/>
                        </span>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage