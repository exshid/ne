import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white bg-fixed"
style={{  background: `url('https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920')`,
backgroundSize: 'cover'}}
>
      <h1 className="text-4xl sm:text-6xl mb-4">WELCOME TO</h1>
      <h2 className="text-6xl sm:text-8xl mb-6">OUR AGENCY</h2>
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded focus:outline-none">
          Button 1
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded focus:outline-none">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
