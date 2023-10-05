import React from 'react';
import BookCard from './bookcard'
import { Col, Row } from 'antd';
const booksArray = [
    { bookTitle: 'To Kill a Mockingbird', authorName: 'Harper Lee' },
    { bookTitle: '1984', authorName: 'George Orwell' },
    { bookTitle: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald' },
    { bookTitle: 'Moby-Dick', authorName: 'Herman Melville' },
    { bookTitle: 'Pride and Prejudice', authorName: 'Jane Austen' },
    { bookTitle: 'The Catcher in the Rye', authorName: 'J.D. Salinger' },
    { bookTitle: 'Brave New World', authorName: 'Aldous Huxley' },
    { bookTitle: 'Lord of the Rings', authorName: 'J.R.R. Tolkien' },
    { bookTitle: 'War and Peace', authorName: 'Leo Tolstoy' },
    { bookTitle: 'The Hobbit', authorName: 'J.R.R. Tolkien' },
    { bookTitle: 'Alice in Wonderland', authorName: 'Lewis Carroll' }
];

  
const Agents = () => (
    <>
    <h2>Some of our books</h2>
    <div className="flex flex-wrap">
      {booksArray.map((book, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4" key={index}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BookCard bookTitle={book.bookTitle} authorName={book.authorName} />
          </div>
        </div>
      ))}
    </div>
  </>

);
export default Agents;
