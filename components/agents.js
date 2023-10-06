import React from 'react';
import AgentCard from './agentcard'
import { Col, Row } from 'antd';
const namesArray = [
    { name: 'John', title: 'Founder' },
    { name: 'Emily', title: 'Agent' },
    { name: 'Michael', title: 'Editor' },
    { name: 'Sophia', title: 'Agent' },
    { name: 'Daniel', title: 'Editor' },
    { name: 'Olivia', title: 'Partner' }  ];
  
const Agents = () => (
  <>

<div className="flex justify-center flex-col items-center font-ysabeau">
    <h3 className="font-black pt-5 text-2xl md:text-3xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
    Meet our Agents</h3>

    <div className="flex flex-wrap px-24 w-full lg:w-3/4">
      {namesArray.map((agent, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
          <div className="bg-white">
            <AgentCard name={agent.name} title={agent.title} />
          </div>
        </div>
      ))}
    </div>
  </div>
   </>

);
export default Agents;
