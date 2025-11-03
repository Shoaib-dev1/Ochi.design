import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
  <div className=" w-full h-[full] ">
          <div  className="w-full py-30 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
          <div className="text-container border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
              className='text-[17vw] font-[] font-bold uppercase leading-none pr-10'>
              We Are Ochi
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
              className='text-[17vw] font-[] font-bold uppercase leading-none pr-10'>
              We Are Ochi
            </motion.h1>
          </div>
        </div>
      </div>
  );
};

export default Marquee;
