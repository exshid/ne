import React from 'react';
import AgentCard from './agentcard'
import { Col, Row } from 'antd';
const namesArray = [
    { firstName: 'John', surname: 'Smith' },
    { firstName: 'Emily', surname: 'Johnson' },
    { firstName: 'Michael', surname: 'Williams' },
    { firstName: 'Sophia', surname: 'Brown' },
    { firstName: 'Daniel', surname: 'Miller' },
    { firstName: 'Olivia', surname: 'Davis' },
    { firstName: 'William', surname: 'Garcia' },
    { firstName: 'Ava', surname: 'Martinez' },
    { firstName: 'James', surname: 'Jones' },
    { firstName: 'Emma', surname: 'Taylor' },
    { firstName: 'Benjamin', surname: 'Clark' }
  ];
  
const Agents = () => (
    <>
    <h2>Meet our Agents</h2>
    <div className="flex flex-wrap">
      {namesArray.map((agent, index) => (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4" key={index}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <AgentCard firstName={agent.firstName} surname={agent.surname} />
          </div>
        </div>
      ))}
    </div>
  </>

);
export default Agents;
