import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-gray-600 font-ysabeau" >
      <h1 className="text-4xl sm:text-6xl mb-4 text-gray-600">WELCOME TO</h1>
      <h2 className="text-6xl sm:text-8xl mb-6 bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent font-black">OUR AGENCY</h2>
      <div className="flex space-x-4 mb-8">
      <div className="transition hover:-translate-y-[4px] pb-2 pt-4">
                      <Link href="about">  <button 
     className="uppercase block transition w-full p-4 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">Read More</button>
     </Link>
                    </div>
        <div className="transition hover:-translate-y-[4px] pb-2 pt-4">
                      <Link href="about">  <button 
     className="uppercase block transition w-full p-4 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">Read More</button>
     </Link>
                    </div>
      </div>
    </div>
  );
};

export default HeroSection;
