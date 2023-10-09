import './globals.css'
import Navbar from '../components/navbar';
import FooterSection from '../components/footer';
import {Contact} from '../components/contact';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import PageWrapper from '@/components/wrapper';
import { blogConfig } from '@/config';


import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export const metadata = {
  title: {
    default: blogConfig.title,
    template: `${blogConfig.title} | %s`,
  },
  openGraph: {
    title: {
      default: blogConfig.title,
      template: `${blogConfig.title} | %s`,
    },
  },
  twitter: {
    title: {
      default: blogConfig.title,
      template: `${blogConfig.title} | %s`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
};


export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className='transition font-ysabeau'>
        
      <StyledComponentsRegistry>
        {children}
</StyledComponentsRegistry>
      

      </body>
    </html>
  )
}
