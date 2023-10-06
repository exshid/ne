import React from 'react';

const BookCard = ({ title, author, imageUrl, onDrawer}) => (
  <div onClick={onDrawer} className="relative w-full h-full mx-auto overflow-hidden shadow-lg">
    <img src={imageUrl} alt="Book Cover" className="w-full h-[450px] object-cover object-center" />
    <div className="absolute bottom-0 left-0 w-full p-6 pt-32 bg-gradient-to-t from-black to-transparent">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <p className="text-gray-600 text-sm">{author}</p>
    </div>
  </div>
);

export default BookCard;
