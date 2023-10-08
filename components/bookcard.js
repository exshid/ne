import React from 'react';
import Image from 'next/image'

const BookCard = ({ title, author, imageUrl}) => (
  <div className="relative w-full h-full mx-auto overflow-hidden shadow-lg">
    <Image
    tabIndex="0"
    src={imageUrl}
    alt={`the cover of cover of the book ${title}`}
    className="w-full h-[450px] object-cover object-center"
    />
    <div className="absolute bottom-0 left-0 w-full p-6 pt-32 bg-gradient-to-t from-black to-transparent">
      <h2 aria-hidden="true" className="text-white text-xl font-bold">{title}</h2>
      <h2 className="sr-only">A book titled {title}</h2>
      <p className="sr-only">{author}</p>

      <p aria-hidden="true" className="text-[gray] text-sm">Written by an author named {author}</p>
    </div>
  </div>
);

export default BookCard;
