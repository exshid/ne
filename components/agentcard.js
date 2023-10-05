import React from 'react';
import {Card, Button, Space } from 'antd';

const { Meta } = Card;
const AgentCard = ({ firstName, surname }) => (
    <Card
    hoverable
    style={{
      width: '100%',
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={firstName} description={surname} />
    <Button className='border-transparent hover:border-transparent text-lg m-t-[8px] font-bold p-[0px]'>Read More</Button>

  </Card>
);
export default AgentCard;
