import Image from 'next/image'
import React from 'react';
import {Card, Button, Space } from 'antd';
const AgentCard = ({ name, title, image, onDrawer,onDrawerKeyboard }) => (
  <>
<div onClick={onDrawer}   role="button"
  tabIndex={0}   onKeyDown={onDrawerKeyboard} aria-label={`Open the profile of ${name}`}

 className="relative cursor-pointer w-full p-6 h-96 group">
<Image
      src={image}
      alt={`the photo of ${name}`}
      className="absolute inset-0 object-cover w-full h-full"
    />

       <div className="absolute inset-x-0 bottom-0 px-4 pb-6 group-hover:pb-8 transition pt-32 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-bold text-white group-hover:-translate-y-[4px] transition">{name}</h3>
        <p className="text-[gray] group-hover:-translate-y-[4px] transition">{title}</p>
      </div>
    </div>
</>

);
export default AgentCard;
