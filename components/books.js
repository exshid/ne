import React from 'react';
import BookCard from './bookcard'
import { Col, Row } from 'antd';

const Books = () => (
    <>
<h2>Some of our books</h2>
<div className="flex flex-wrap">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
            <BookCard/>
        </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
        <BookCard/>
        </div>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
        <BookCard/>
        </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
        <BookCard/>
        </div>
    </div>

</div>
</>
);
export default Books;
