import React from 'react';

const FooterSection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 7-3 Part */}
      <div className="min-h-[70vh] flex">
        {/* Left Section (Half of 7) */}
        <div className="w-1/2 p-8">
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* Right Section (Half of 7) */}
        <div className="w-1/2  p-8">
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>

      {/* 3 Part */}
      <div className="min-h-[30vh]  p-8">
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
