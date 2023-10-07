'use client'
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import BookCard from './bookcard'
import { Col, Row } from 'antd';
import {ScrollWrapper} from '@/components/wrapper';

const booksArray = [
  { title: 'Book 1', author: 'Author 1', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 3', author: 'Author 3', imageUrl: 'https://cdn.kobo.com/book-images/a821b502-0d07-4921-ac14-e431625d04e7/1200/1200/False/the-hobbit-illustrated-by-alan-lee.jpg' },
  { title: 'Book 2', author: 'Author 2', imageUrl: 'https://m.media-amazon.com/images/I/71lKy8RoFUL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 4', author: 'Author 4', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 3', author: 'Author 3', imageUrl: 'https://cdn.kobo.com/book-images/a821b502-0d07-4921-ac14-e431625d04e7/1200/1200/False/the-hobbit-illustrated-by-alan-lee.jpg' },
];

const Books = () => {

  return (
    <ScrollWrapper>

<div className="text-white font-ysabeau flex flex-col items-center font-ysabeau bg-[#121212]">
<h3 className="font-black p-6 text-2xl md:text-3xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
    Some of our books</h3>
    <p className="text-xl pb-5 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="flex flex-wrap w-full">
      {booksArray.map((book, index) => (
        <>
        <div className="w-full md:w-1/2 lg:w-1/4" key={index} >
          <div className="rounded-lg shadow-lg h-full">
        <BookCard title={book.title} author={book.author} imageUrl={book.imageUrl} />
          </div>
        </div>
</>     
      ))}
     </div>
  </div>
        
</ScrollWrapper>
  );
};

export default Books;
