import React from 'react';
import {Card, Button, Space } from 'antd';
const AgentCard = ({ name, title }) => (
    <Card
    className='font-ysabeau border-transparent hover:!border-transparent'
    
    style={{
      width: '100%',
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >

    <p className="font-bold text-2xl">{name}</p>
    <p className="text-slate-600">{title}</p>
    <Button className='border-transparent hover:!border-transparent hover:!text-pink-700 text-lg m-t-[l5px] p-[0px]'>Read More</Button>

  </Card>
);
export default AgentCard;
