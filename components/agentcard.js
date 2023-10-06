import React from 'react';
import {Card, Button, Space } from 'antd';
const AgentCard = ({ name, title }) => (
  <>
<div className="relative w-full sm:w-1/2 lg:w-1/3 p-6 h-96">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        alt="photo of the agent"
      />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-6 pt-32 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-slate-600">{title}</p>
      </div>
    </div>
</>

);
export default AgentCard;
