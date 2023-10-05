'use client';
import React from 'react';
import Agents from '../components/agents';
import Books from '../components/books';
import HeroSection from '../components/herosection';
import AboutUsSection from '../components/aboutus';
import FooterSection from '../components/footer';
import InTheNews from '../components/news';
import {MyHeader} from '../components/header';

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
      <MyHeader/>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
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
        style={{
          textAlign: 'center',
        }}
      >
<FooterSection/>      </Footer>
    </Layout>
  );
};
