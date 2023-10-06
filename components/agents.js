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

<div className="flex justify-center flex-col items-center">
    <h2 className="text-slate-600">Meet our Agents</h2>
    <div className="flex flex-wrap lg:px-24 w-full lg:w-3/4">
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
