'use client';
import React from 'react';
import Agents from '../components/agents';
import Books from '../components/books';
import HeroSection from '../components/herosection';
import Navbar from '../components/navbar';
import AboutUsSection from '../components/aboutus';
import FooterSection from '../components/footer';
import InTheNews from '../components/news';
import {Contact} from '../components/contact';


import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
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
