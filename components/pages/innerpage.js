'use client'
import Image from 'next/image'
import { blogConfig } from '@/config';
import Agents from '../../components/agents';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/footer';
import {Contact} from '../../components/contact';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import PageWrapper from '@/components/wrapper';

export default function InnerPage({ background, title, subtitle, subtitleMarked,showAgents,children  }) {

      return (
<>    
<div className="flex h-full items-center flex-col w-full pt-20 pb-16">
<PageWrapper>

      <h2
      className="font-black px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl font-ysabeau bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]" tabIndex="0">{title}</h2>
      </PageWrapper>

      <div 
      style={{  background: `url('${background}')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
      className="relative lg:rounded-2xl mb-10 w-full !bg-center lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]"/>
      
      <div tabIndex="0"
       className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-fullself-start text-center">
        <p className="inline-block text-3xl md:text-4xl pb-2 mr-5 font-ysabeau text-white font-black">{subtitle}</p>
      <h3 className="heading-font inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]">{subtitleMarked}</h3></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full font-ysabeau text-white items-center">
    <p tabIndex="0" className="text-white text-xl p-5">
{children}

      </p>

</div>

    </div>
    <div className="h-[5px] bg-gradient-to-r from-rose-600 to-rose-900"/>

    {showAgents && <Agents/>}

    </>

  );
}