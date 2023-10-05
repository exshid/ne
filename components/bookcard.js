import React from 'react';
import {Card, Button, Space } from 'antd';

const { Meta } = Card;
const BookCard = ({ bookTitle, authorName }) => (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={bookTitle} description={authorName} />
    <Button>Read More</Button>

  </Card>
);
export default BookCard;
