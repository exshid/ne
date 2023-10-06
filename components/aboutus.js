import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row font-ysabeau">
      <div className="sm:w-1/2 min-h-[50vh] bg-gray-200 p-8 flex items-center justify-center sm:justify-end"
      style={{  background: `url('https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
            >
      </div>

      <div className="sm:w-1/2 min-h-[50vh] bg-gradient-to-r from-rose-600 to-rose-900 p-8 flex flex-col items-center justify-evenly sm:justify-start">
        <h2 className="text-4xl sm:text-6xl text-white">Our Agency</h2>
      <p className="text-white text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <div className="transition hover:-translate-y-[4px] pb-2 pt-4">
                      <Link href="/about">  <button 
     className="uppercase block transition w-full p-3 px-12 text-lg bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent font-black rounded bg-white focus:outline-none">Read More</button>
     </Link>
                    </div>

      </div>
    </div>
  );
};

export default AboutUsSection;
