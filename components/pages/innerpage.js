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
        <PageWrapper>

        <Layout className="layout h-full bg-darkish text-white">
          
    <Navbar/>
          <Content>
            <div
              className="site-layout-content"
            >
    
<div className="flex h-full items-center flex-col w-full py-20 lg:pt-36">
      <h2 className="font-black px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl font-ysabeau bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]">{title}</h2>
      <div       style={{  background: `url('${background}')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
 className="relative lg:rounded-2xl mb-10 w-full lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]">
      </div>
      <div
       className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-fullself-start text-center">
        <p className="inline-block text-3xl md:text-4xl pb-2 mr-5 font-ysabeau text-white font-black">{subtitle}</p>
      <h1 className="heading-font inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]">{subtitleMarked}</h1></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full font-ysabeau text-white items-center">
    <p className="text-white text-xl p-5">
{children}

      </p>

</div>

    </div>
    {showAgents && <Agents/>}

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
    </PageWrapper>


  );
}