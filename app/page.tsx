'use client';
import React from 'react';
import Agents from '../components/agents';
import Books from '../components/books';
import HeroSection from '../components/herosection';
import AboutUsSection from '../components/aboutus';
import Navbar from '../components/navbar';
import FooterSection from '../components/footer';
import {Contact} from '../components/contact';
import InTheNews from '../components/news';


import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout h-full">
      
<Navbar/>
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <HeroSection/>
          
          <AboutUsSection/>
          <Agents/>
<Books/>

<InTheNews/>
<Contact/>
        </div>
      </Content>
      <Footer
      className='p-0'
        style={{
          textAlign: 'center',
        }}
      >
<FooterSection/>      </Footer>
    </Layout>
  );
};
