'use client'
import Image from 'next/image'
import {ScrollWrapper} from '@/components/wrapper';

import React, { useState, useEffect } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { Col, Row } from 'antd';
import AgentCard from './agentcard'
const namesArray = [
    { name: 'John', title: 'Founder',clients: 'Author A, Author S', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
    { name: 'Emily', title: 'Agent',clients: 'Author Y, Author X', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Michael', title: 'Editor', clients: 'Author A, Author S', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Sophia', title: 'Agent', clients: 'Author Y, Author X', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Daniel', title: 'Editor',  clients: 'Author A, Author S', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Olivia', title: 'Partner', clients: 'Author Y, Author X', favorite: 'Fantasy, Historical fiction', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }  ];
  
    const Agents = () => {
      const [agentTitle, setAgentTitle] = useState(null);
      const [agentBio, setAgentBio] = useState(null);
      const [agentImage, setAgentImage] = useState(null);
      const [agentName, setAgentName] = useState(null);
      const [agentFavorite, setAgentFavorite] = useState(null);
      const [agentClients, setAgentClients] = useState(null);


  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (

    <ScrollWrapper>

<div id="our-team" className="flex justify-center flex-col items-center font-ysabeau pb-5">
    <h3 tabIndex="0" className="font-black p-5 text-2xl md:text-3xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
    our Agents</h3>
    <p tabIndex="0" className="text-xl pb-5 px-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

    <div className="flex flex-wrap px-20 sm:px-2 md:px-20 min-[880px]:px-24 w-full lg:w-3/4 pb-5">
      {namesArray.map((agent, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index} onClick={() => {
          setAgentName(agent.name);
          setAgentImage(agent.image);
          setAgentBio(agent.bio);
          setAgentTitle(agent.title);
          setAgentClients(agent.clients);
          setAgentFavorite(agent.favorite);


        }}
         >
          <div className="bg-darkish">
            <AgentCard name={agent.name} image={agent.image} title={agent.title} onDrawer={showDrawer} onDrawerKeyboard={(e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setAgentName(agent.name);
      setAgentImage(agent.image);
      setAgentBio(agent.bio);
      setAgentTitle(agent.title);
      setAgentClients(agent.clients);
      setAgentFavorite(agent.favorite);

      showDrawer();
    }
  }}
  />
          </div>
        </div>
      ))}
    </div>
  </div>

  <Drawer
           title={agentName}
           placement={placement}
           closable={true}
           onClose={onClose}
           open={open}
           key={placement}
           className="text-white w-full lg:w-3/4 font-ysabeau !bg-darkish/80 backdrop-blur-xl"
         >
    <Image
      src={agentImage}
      width={300}
      height={300}
      alt="Picture of the author"
      className="rounded-full w-full h-1/2 object-cover object-top"
    />
<p className="text-bold bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">Bio</p>
           <p>{agentBio}</p>
           <p className="text-bold bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">Looking for...</p>
           <p>{agentFavorite}</p>

           <p className="text-bold bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">Clients</p>
           <p>{agentClients}</p>

         </Drawer>

   </ScrollWrapper>
);
};

export default Agents;
