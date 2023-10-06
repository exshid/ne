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
    <div className="flex flex-wrap px-16 w-full lg:w-3/4">
      {namesArray.map((agent, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
          <div className="bg-white">
            <AgentCard name={agent.name} title={agent.title} />
          </div>
        </div>
      ))}
    </div>
  </div>
    <div className="relative h-64">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        alt=""
      />
      <div className="absolute inset-x-0 bottom-0 px-4 py-6 bg-white bg-opacity-75">
        <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
        <p className="text-sm font-medium text-gray-500">Software Engineer</p>
      </div>
    </div>
</>

);
export default Agents;
