import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      {/* Left Section (Lorem Ipsum Text) */}
      <div className="sm:w-1/2 bg-gray-200 p-8 flex items-center justify-center sm:justify-end">
        <p className="text-lg sm:text-xl text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p>
      </div>

      {/* Right Section (WELCOME) */}
      <div className="sm:w-1/2 bg-gray-600 p-8 flex items-center justify-center sm:justify-start">
        <h2 className="text-4xl sm:text-6xl text-white">WELCOME</h2>
      </div>
    </div>
  );
};

export default AboutUsSection;
