'use client';
import React from 'react';
import Agents from '../components/agents';
import Books from '../components/books';
import HeroSection from '../components/herosection';
import AboutUsSection from '../components/aboutus';
import FooterSection from '../components/footer';
import InTheNews from '../components/news';


import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
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
        </div>
      </Content>
      <Footer
      className='p-0 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700'
        style={{
          textAlign: 'center',
        }}
      >
<FooterSection/>      </Footer>
    </Layout>
  );
};
