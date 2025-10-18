import React from 'react';
import Navbar from './assets/components/Navbar';
import Landingpage from './assets/components/Landingpage';
import Marquee from './assets/components/Marquee';
import About from './assets/components/About';
import PlayEyes from './assets/components/PlayEyes';
import FeaturedProjects from './assets/components/FeaturedProjects';
import Review from './assets/components/Review';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white ">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <PlayEyes />
      <FeaturedProjects />
      <Review />
    </div>
  );
};

export default App;
