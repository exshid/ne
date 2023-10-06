import Image from 'next/image'
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { Col, Row } from 'antd';
import AgentCard from './agentcard'
const namesArray = [
    { name: 'John', title: 'Founder', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
    { name: 'Emily', title: 'Agent', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Michael', title: 'Editor', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Sophia', title: 'Agent', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Daniel', title: 'Editor', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' , image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    { name: 'Olivia', title: 'Partner', bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }  ];
  
    const Agents = () => {
      const [agentTitle, setAgentTitle] = useState(null);
      const [agentBio, setAgentBio] = useState(null);
      const [agentImage, setAgentImage] = useState(null);
      const [agentName, setAgentName] = useState(null);

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

<>

<div id="our-team" className="flex justify-center flex-col items-center font-ysabeau pb-5">
    <h3 className="font-black p-5 text-2xl md:text-3xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
    Meet our Agents</h3>
    <p className="text-xl pb-5 px-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>

    <div className="flex flex-wrap px-24 w-full lg:w-3/4">
      {namesArray.map((agent, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index} onClick={() => {
          setAgentName(agent.name);
          setAgentImage(agent.image);
          setAgentBio(agent.bio);
          setAgentTitle(agent.title);
        }}
         >
          <div className="bg-white">
            <AgentCard name={agent.name} image={agent.image} title={agent.title} onDrawer={showDrawer} />
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
           className="text-black w-full lg:w-3/4 font-ysabeau"
         >
    <Image
      src={agentImage}
      width={500}
      height={500}
      alt="Picture of the author"
      className="rounded-full"
    />

           <p>{agentBio}</p>
           <p>Clients</p>
           <p>Some contents...</p>
         </Drawer>

   </>
);
};

export default Agents;
