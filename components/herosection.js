import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-darkish text-white font-ysabeau" >
      <h1 className="text-4xl sm:text-6xl mb-4 text-white">WELCOME TO</h1>
      <h2 className="text-6xl sm:text-8xl mb-6 bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent font-black">OUR AGENCY</h2>
      <div className="flex space-x-4 mb-8 w-full md:w-auto">
      <div className="transition hover:-translate-y-[4px] pb-2 pt-4 w-1/2 md:w-auto">
                      <Link href="about">  <button 
     className="uppercase block transition w-full p-3 md:px-16 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">About Us</button>
     </Link>
                    </div>
        <div className="transition hover:-translate-y-[4px] pb-2 pt-4 w-1/2 md:w-auto">
                      <Link href="#our-team">  <button 
     className="uppercase block transition w-full p-3 md:px-16 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">Our Team</button>
     </Link>
                    </div>
      </div>
    </div>
  );
};

export default HeroSection;
