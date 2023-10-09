'use client';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from '@/components/navbar';
import FooterSection from '@/components/footer';
import {Contact} from '@/components/contact';
import PageWrapper from '@/components/wrapper';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));
  return     <PageWrapper>
  <StyleProvider cache={cache}>

<Layout className="layout h-full">
  
<Navbar/>
  <Content>
    <div className="site-layout-content">
{children}
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
  </StyleProvider>;
    </PageWrapper>

};

export default StyledComponentsRegistry;