'use client'
import Image from 'next/image'
import { blogConfig } from '@/config';
import Agents from '../../components/agents';
import Navbar from '../../components/navbar';
import FooterSection from '../../components/footer';
import {Contact} from '../../components/contact';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

//const { title, description } = blogConfig.pages.home;
//const pageTitle = "About Me — "

//const ogImage = {
 // url: `${blogConfig.url}/og`,
//};
/*
export const metadata = {
  pageTitle,
  title,
  description,
  openGraph: {
    type: 'website',
    url: blogConfig.url,
    pageTitle,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    pageTitle,
    description,
    images: ogImage,
    card: 'summary_large_image',
  },
};
*/
export default function About() {

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
    
<div className="flex h-full items-center flex-col w-full py-24 lg:pt-40">
      <p className="font-black heading-font px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl text-darkish dark:text-white">About Me</p>
      <div className="relative lg:rounded-2xl mb-10 w-full lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]">
      <Image
  src='https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920'
  alt="picture of the author"
  className="w-full"
  layout="fill"
  objectFit="contain"
  objectPosition="center"
  /></div>
      <div className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-full pb-2 self-start"><p className="inline-block text-3xl md:text-4xl lg:text-5xl mr-5 text-darkish font-black dark:text-white heading-font">Hi, We are </p>
      <h1 className="heading-font inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">{blogConfig.author}</h1></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full text-darkish items-center jakarta-font dark:text-white">
    <p className="py-2 whitespace-pre-wrap">{blogConfig.about}</p>
    <p className="text-white text-xl p-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.<br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.<br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>

</div>
<Agents/>

    </div>

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
}