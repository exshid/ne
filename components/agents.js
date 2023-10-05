'use '
import React from 'react';
import AgentCard from './agentcard.js'
import { Col, Row } from 'antd';

const Agents = () => (
    <>
<div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div class="bg-white rounded-lg shadow-lg p-6">
            <AgentCard/>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div class="bg-white rounded-lg shadow-lg p-6">
        <AgentCard/>
        </div>
    </div>

    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div class="bg-white rounded-lg shadow-lg p-6">
        <AgentCard/>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
        <div class="bg-white rounded-lg shadow-lg p-6">
        <AgentCard/>
        </div>
    </div>

</div>
</>
);
export default Agents;
