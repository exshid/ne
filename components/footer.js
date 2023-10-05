import React from 'react';

const FooterSection = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* 7-3 Part */}
      <div className="h-7/10 flex">
        {/* Left Section (Half of 7) */}
        <div className="w-1/2 bg-gray-300 p-8">
          <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* Right Section (Half of 7) */}
        <div className="w-1/2 bg-gray-300 p-8">
          <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>

      {/* 3 Part */}
      <div className="h-3/10 bg-gray-600 p-8">
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
