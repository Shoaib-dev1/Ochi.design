import { div } from 'motion/react-client';
import { motion } from 'framer-motion';
import React from 'react';

const PlayEyes = () => {
  return (
    <div className=" w-full h-full -mt-150 overflow-hidden">
      <div className=' relative w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className=" absolute flex gap-5 items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2  ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-white">
            <div className="w-[10vw] h-[10vw]  flex items-center justify-center rounded-full  bg-[#212121]">
              PLAY
              <div className="w-[1.2vw] h-[1.2vw] rounded-full  bg-white"></div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-white">
            <div className="w-[10vw] h-[10vw]  flex items-center justify-center rounded-full  bg-[#212121]">
              PLAY
              <div className="w-[1.2vw] h-[1.2vw] rounded-full  bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayEyes;
