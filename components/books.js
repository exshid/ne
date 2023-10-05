'use client'
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import BookCard from './bookcard'
import { Col, Row } from 'antd';

const booksArray = [
  { title: 'Book 1', author: 'Author 1', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 2', author: 'Author 2', imageUrl: 'https://m.media-amazon.com/images/I/71lKy8RoFUL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 3', author: 'Author 3', imageUrl: 'https://cdn.kobo.com/book-images/a821b502-0d07-4921-ac14-e431625d04e7/1200/1200/False/the-hobbit-illustrated-by-alan-lee.jpg' },
  { title: 'Book 4', author: 'Author 4', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' }
];

const Books = () => {
  const [bookNumber, setBookNumber] = useState(null);

  const handleBookClick = (index) => {
    setBookNumber(index);
  };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setOpen(true);
    setBookNumber (index)
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
<>
<div className="bg-black text-white font-ysabeau">
    <h2>Some of our books</h2>
    <div className="flex flex-wrap odd:m-r-[5px]">
      {booksArray.map((book, index) => (
        <>
        <div className="w-full md:w-1/2 lg:w-1/4 bg-gradient-to-t from-black to-transparent" key={index} onClick={() => handleBookClick(index)} >
          <div className="rounded-lg shadow-lg h-full">
        <BookCard title={book.title} author={book.author} imageUrl={book.imageUrl} onDrawer={showDrawer} />
          </div>
        </div>
</>     
      ))}
     </div>
  </div>
           <Drawer
           title="Basic Drawer"
           placement={placement}
           closable={false}
           onClose={onClose}
           open={open}
           key={placement}
         >
           <p>{booksArray[bookNumber]}</p>
           <p>Some contents...</p>
           <p>Some contents...</p>
         </Drawer>
</>  );
};

export default Books;
