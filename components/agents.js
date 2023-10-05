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
    <h2>Meet our Agents</h2>
    <div className="flex flex-wrap px-16">
      {namesArray.map((agent, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
          <div className="bg-white">
            <AgentCard name={agent.name} title={agent.title} />
          </div>
        </div>
      ))}
    </div>
  </>

);
export default Agents;
