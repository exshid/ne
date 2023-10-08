import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-darkish text-white font-ysabeau" >
<div tabIndex="0">
      <p
      className="text-4xl sm:text-6xl mb-4 text-white">WELCOME TO</p>
      <h2
      className="text-6xl sm:text-8xl mb-6 bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent font-black">OUR AGENCY</h2>
  </div>
      <div className="flex space-x-4 mb-8 w-full md:w-auto">
      <div className="transition hover:-translate-y-[4px] pb-2 pt-4 w-1/2 md:w-auto px-5">
  <Link href="/about">
    <a
      role="button"
      className="uppercase hover:!text-white block transition w-full p-3 md:px-16 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none"
      tabIndex="0"
    >
      About Us
    </a>
  </Link>
</div>

<div className="transition hover:-translate-y-[4px] pb-2 pt-4 w-1/2 md:w-auto px-5">
  <Link href="#our-team">
    <a
      role="button"
      className="uppercase block hover:!text-white transition w-full p-3 md:px-16 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none"
      tabIndex="0"
    >
Our Team
</a>
  </Link>
</div>


      </div>
    </div>
  );
};

export default HeroSection;
