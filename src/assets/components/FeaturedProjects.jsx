import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedProjects = () => {
    return (

        <div className='w-full'>

            <div className='w-full px-20 boder-b-[1px] border-zinc-700 py-15'>
                <h1 className='text-6xl leading-none tracking-tighter'>Featured projects</h1>
            </div>

            <div className='pt-10 pl-20 flex'>
                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Salience Labs</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[35vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-8 flex gap-2'>
                       <a className=' animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none' href="#" >
                          <span>CONFERENCE</span>
                       </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Pich Deck</span>
                        </a>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Medallia Experience</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[34vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-4 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Conference</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Executive Keynote</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Product Launch</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-10 pl-20 flex'>
                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>AH2 & Matt Horn</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[35vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-8 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Pitch Deck</span>
                        </a>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Vise</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[34vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-4 flex gap-2'>
                        
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Company Presentation</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-10 pl-20 flex'>
                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Softstart</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[35vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-8 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Branded Template</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Sales Deck</span>
                        </a>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Fyde</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[34vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-4 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Audit</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Copywriting</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Sales Deck</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Slide Design</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-10 pl-20 flex'>
                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Al Things Go</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[35vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-8 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Brand Identity</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Pitch Deck</span>
                        </a>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Trawa</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[34vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-4 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Brand Identity</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Design Research</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#3d3d3d] rounded-4xl leading-none'>
                            <span>Investor Deck</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='py-10 pl-20 flex'>
                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Cardboard Spaceship</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[35vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-8 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Branded Template</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Sales Deck</span>
                        </a>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Social Media Templates</span>
                        </a>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='heading flex gap-2'>
                        <div className='w-[0.8vw] h-[0.8vw] rounded-full bg-white'></div>
                        <h1 className='leading-none tracking-tighter uppercase'>Premium Blend</h1>
                    </div>

                    <div className='cards_container w-[45vw] h-[34vw] rounded-lg mt-5'>
                        <div className='w-[45vw] h-[34vw] rounded-lg bg-[#cdea68]'></div>
                    </div>

                    <div className='py-4 flex gap-2'>
                        <a className='animated-button py-2 px-5 uppercase border-[1px] border-[#363636] rounded-4xl leading-none'>
                            <span>Branded Template</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center pb-20'>
                 <div className='About-button'>
                     <button className='animated-button-2 bg-[#202020]  rounded-4xl py-2 px-7 ml-15 mt-3 font-semibold uppercase text-white flex gap-5'>View all case studies
                         <div className="animated-button-2-icon w-8  h-8 rounded-full flex justify-center items-center cursor-pointer ">
                             <span className="-rotate-50 ">
                                  <FaArrowRight />
                             </span>
                         </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects
