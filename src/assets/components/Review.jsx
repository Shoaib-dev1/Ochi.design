import React, { useState } from 'react';

const Review = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const reviews = [
    {
      id: 1,
      client: 'Karman Ventures',
      reviewer: 'William Barnes',
      services: ['Investor Deck', 'Sales Deck'],
      image: 'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png',
      reviewText:
        'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
    },
    {
      id: 2,
      client: 'Medallia',
      reviewer:'Becky Chastain',
      services: ['Branded Tamplate', 'Executive KeyNote','Product Launch'],
      image: 'https://ochi.design/wp-content/uploads/2024/06/Becky-300x300.png',
      reviewText:
        'The most impressive about Ochi is their attention to detail. They didn’t just design presentations but helped us craft a narrative. Easy partnership and alignment with creative team and values.',
    },
    {
      id: 3,
      client: 'Planetly',
      reviewer: 'Nina Walloch',
      services: ['Agency','Big News Book','Investor Deck','Sales Deck'],
      image: 'https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png',
      reviewText:
        'Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.',
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
          <div className='w-full mb-15 px-15'>
            <h1 className='text-6xl  font-extralight leading-none tracking-tighter'>Clients’ reviews</h1>
          </div>
      {reviews.map((review, index) => (
        <div key={review.id} className=" border-zinc-600 border-t-[1px]  py-4 px-15">
          
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(index)}>
            <div className="flex-1">
              <p className="text-lg font-extralight">{review.client}</p>
            </div>

            <div className="flex-1">
              <h3 className={`transition-all duration-500 ease-in-out text-lg ${
                  openIndex === index ? 'opacity-100 mt-1' : 'opacity-0'
                }`}>
                Services
              </h3>
            </div>

            <div className="flex-1">
              <p className="text-lg">{review.reviewer}</p>
            </div>

            <div className="flex-1 text-right">
              <button className="text-lg font-light">
                {openIndex === index ? 'CLOSE' : 'READ'}
              </button>
            </div>
          </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-screen mt-4' : 'max-h-0'
            }`}>
            <div className="flex items-center justify-center gap-60">
              <div className="min-w-1.5" />
              <div className=" min-w-2 flex flex-col items-start  gap-3  mb-20  ">
                
                {review.services.map((service, i) => (
                  <button
                    key={i}
                    className=" py-2 px-7 uppercase text-start border-[1px] border-[#363636] rounded-4xl leading-none" >
                    {service}
                  </button>
                ))}
              </div>
              <div className="w-1/2 flex flex-col mt-10">
                <div className="flex-3 justify-center">
                  <img
                    src={review.image}
                    alt={review.reviewer}
                    className="rounded-lg h-24 w-24 object-cover"/>
                  <div className="w-2/3 mt-13 mb-13">
                    <p className="text-zinc-100">{review.reviewText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}


             <div className='flex gap-4  px-15 py-30 mb-20'>
                  <div className='cardcontainer w-1/2 h-[66vh]'>
                      <div className='card relative flex items-center justify-center h-full bg-[#004d43] rounded-xl'>
                          <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                          <button className='absolute  py-1 px-3 border-[1px] border-[#cdea68] rounded-full left-10 bottom-10 '>&copy;2019-2025</button>
                      </div>
                  </div>
                   <div className='cardcontainer h-[66vh] flex gap-5 w-1/2 ] '>
                      <div className=' w-1/2 h-full relative flex items-center justify-center bg-[#212121] rounded-xl '>
                         <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                          <button className='absolute  py-1 px-3 border-[1px] border-zinc-100 rounded-full uppercase left-10 bottom-10 '>Rating5.0 On Clutch</button>
                      </div>
                      <div className=' w-1/2 h-full relative flex items-center justify-center bg-[#212121] rounded-xl '>
                          <img className='w-[8vw] h-[17vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                          <button className='absolute  py-1 px-3 border-[1px] border-zinc-100 rounded-full uppercase left-10 bottom-10 '>Business Bootcamp Alumni</button>
                      </div>
                  </div>
             </div>
    </div>
  );
};

export default Review;
