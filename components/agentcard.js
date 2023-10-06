import React from 'react';
import {Card, Button, Space } from 'antd';
const AgentCard = ({ name, title, image, onDrawer }) => (
  <>
<div onClick={onDrawer} className="relative cursor-pointer w-full p-6 h-96 group">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={image}
        alt={`photo of ${name}`}
        />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-6 group-hover:pb-8 transition pt-32 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-bold text-white group-hover:-translate-y-[4px] transition">{name}</h3>
        <p className="text-slate-600 group-hover:-translate-y-[4px] transition">{title}</p>
      </div>
    </div>
</>

);
export default AgentCard;
