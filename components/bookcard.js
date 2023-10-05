import React from 'react';

const BookCard = ({ title, author, imageUrl }) => (
  <div className="relative w-full h-full mx-auto overflow-hidden shadow-lg bg-gradient-to-t from-black hover:from-transparent to-transparent">
    <img src={imageUrl} alt="Book Cover" className="w-full h-[300px] object-cover object-center" />
    <div className="absolute bottom-0 left-0 w-full p-4">
      <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 text-sm">{author}</p>
    </div>
  </div>
);

export default BookCard;
