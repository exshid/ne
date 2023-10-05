import React from 'react';
import BookCard from './bookcard'
import { Col, Row } from 'antd';

const booksArray = [
  { title: 'Book 1', author: 'Author 1', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 2', author: 'Author 2', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 3', author: 'Author 3', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 4', author: 'Author 4', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' },
  { title: 'Book 5', author: 'Author 5', imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f9acfb8/2147483647/strip/true/crop/1200x1813+0+0/resize/1200x1813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F5a%2F2f3a70a244b08aff8571dda5a3e8%2Fbooks-hunger-games-54386.jpg' }
];

  
const Agents = () => (
    <>
    <h2>Some of our books</h2>
    <div className="flex flex-wrap">
      {booksArray.map((book, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4" key={index}>
          <div className="bg-white rounded-lg shadow-lg p-6">
        <BookCard title={book.title} author={book.author} imageUrl={book.imageUrl} />
          </div>
        </div>
      ))}
    </div>
  </>

);
export default Agents;
