import React from 'react';
import Link from 'next/link';
import {ScrollWrapper} from '@/components/wrapper';

const AboutUsSection = () => {
  return (
    <ScrollWrapper>

    <div className="min-h-screen flex flex-col sm:flex-row font-ysabeau">
      <div className="sm:w-1/2 min-h-[50vh] bg-gray-200 p-8 flex items-center justify-center sm:justify-end"
      style={{  background: `url('https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
            >
      </div>

      <div className="sm:w-1/2 min-h-[50vh] bg-gradient-to-r from-rose-600 to-rose-900 p-8 flex flex-col items-center justify-evenly">
        <h2 className="text-4xl sm:text-6xl font-bold text-white">Our Agency</h2>
      <p className="text-white text-xl p-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <div className="transition hover:-translate-y-[4px] pb-2 pt-4">
                      <Link href="/about">  <button 
     className="uppercase block transition w-full p-3 px-12 text-lg bg-white font-black rounded bg-white focus:outline-none"><p className="bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent ">Read More</p></button>
     </Link>
                    </div>

      </div>
    </div>
    </ScrollWrapper>

  );
};

export default AboutUsSection;
