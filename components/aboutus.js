import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row font-ysabeau">
      <div className="sm:w-1/2 bg-gray-200 p-8 flex items-center justify-center sm:justify-end"
      style={{  background: `url('https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
            >
      </div>

      <div className="sm:w-1/2 bg-gradient-to-r from-rose-600 to-rose-900 p-8 flex items-center flex-col items-center justify-center sm:justify-start">
        <h2 className="text-4xl sm:text-6xl text-white">Our Agency</h2>
      <p className="text-white text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
