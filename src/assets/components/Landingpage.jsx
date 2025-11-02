import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Landingpage = () => {
  return (
    <div className="w-full mb-[10vh] bg-zinc-900 pt-2">
      <div className="w-full LandingPageText mt-40 px-20">
        {['We Create', 'Eye-Opening', 'Presentations'].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '8vw' }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.2vw] rounded-md mt-[0.5vw] mr-[1vw]">
                    <img
                      className="w-full h-full  object-cover rounded"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""/>
                  </motion.div>
                )}
                <h1 className="uppercase flex items-center text-[7vw] font-semibold leading-[5.8vw] tracking-tighter font-[Founders Grotesk]  ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="max-w-full border-t-[1px] border-zinc-700  mt-40  flex justify-between items-center pt-5 ">
          {[
            'Presentation and storytelling agency',
            'For innovation teams and global brands',
          ].map((item, index) => (
            <p className="font-light text-md leading-none tracking-tight">
              {item}
            </p>
          ))}
          <div className="landing-button flex items-cneter gap-2">
            <div className=" landing-bt uppercase font-light text-md  tracking-tight border-[1px] border-zinc-500 rounded-full w-[11vw] h-[4.5vh] text-center cursor-pointer ">
              start the project
            </div>
            <div className=" landing-bt-icon w-8  h-8  border-[1px] border-zinc-500 rounded-full flex justify-center items-center cursor-pointer ">
              <span className="-rotate-50 ">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
