import React from 'react';
import Agents from '../components/agents';
import Books from '../components/books';
import HeroSection from '../components/herosection';
import AboutUsSection from '../components/aboutus';
import InTheNews from '../components/news';
import Navbar from '../components/navbar';
import { blogConfig } from '@/config';
import PageWrapper from '@/components/wrapper';

const { title, description } = blogConfig.pages.home;


import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export const metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: blogConfig.url,
    title,
    description,
  },
  twitter: {
    description
  },
};



export default function Home() {
  
  return (
<PageWrapper>
<HeroSection/>
          
          <AboutUsSection/>
          <Agents/>
<Books/>

<InTheNews/>
</PageWrapper>
);
};
