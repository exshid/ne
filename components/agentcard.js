import React from 'react';
import {Card, Button, Space } from 'antd';

const { Meta } = Card;
const AgentCard = ({ firstName, surname }) => (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={firstName} description={surname} />
    <Button>Read More</Button>

  </Card>
);
export default AgentCard;
