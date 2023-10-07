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
        <PageWrapper>

        <Layout className="layout h-full">
          
    <Navbar/>
          <Content>
            <div
              className="site-layout-content"
              style={{
                background: colorBgContainer,
              }}
            >
    
<div className="flex h-full items-center flex-col w-full py-20 lg:pt-40">
      <h2 className="font-black px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl font-ysabeau bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]">Submissions</h2>
      <div       style={{  background: `url('https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'}}
 className="relative lg:rounded-2xl mb-10 w-full lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]">
      </div>
      <div className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-full self-start text-center"><p className="inline-block text-3xl md:text-4xl mr-5 font-ysabeau text-gray-600 font-black">Submit your book to </p>
      <h1 className="heading-font inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent h-[55px]">{blogConfig.author}</h1></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full font-ysabeau text-gray-600 items-center jakarta-font">
    <p className="py-2 whitespace-pre-wrap">{blogConfig.about}</p>
    <p className="text-gray-600 text-xl p-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et gravida erat. Fusce fermentum ac tellus porta tincidunt. Mauris tincidunt elit vitae malesuada vehicula. Phasellus porta sit amet mi eu fringilla. Etiam quis metus risus. Sed commodo lobortis massa ut lacinia. Nullam nec est sit amet leo aliquet ultricies ut sit amet quam. Aenean porta diam non purus egestas elementum. Nam a magna imperdiet ex bibendum vehicula. Aliquam tincidunt condimentum quam at scelerisque. Vivamus congue sem ut nunc consequat, posuere malesuada nulla interdum. Donec posuere rutrum massa, in accumsan velit varius eu. In faucibus lectus ligula, vel cursus tellus ultricies tincidunt.<br/>

Aenean imperdiet eros at eros facilisis cursus. Nulla dignissim rhoncus mi, vestibulum fringilla lorem convallis id. Maecenas ullamcorper a metus ut vestibulum. Quisque hendrerit accumsan justo, vel porta velit dictum nec. Ut tincidunt purus vel ex imperdiet, ac consectetur metus maximus. Proin tincidunt ex ac mollis varius. Vestibulum placerat ante at placerat semper. Pellentesque pretium, quam quis porta accumsan, mi felis vestibulum libero, et aliquam ante ante et est. Aliquam vehicula erat eget est aliquam, non aliquet dolor elementum. Curabitur vitae semper tortor. Vestibulum feugiat, dui ut hendrerit consectetur, urna dolor pulvinar tellus, vitae facilisis felis ligula non risus.<br/>

Aliquam luctus iaculis condimentum. In nec eleifend nisi. Praesent accumsan sem in eros ornare facilisis nec ac elit. Maecenas id quam vehicula, maximus lorem sit amet, vestibulum ligula. Curabitur eu eros urna. Nulla erat ligula, semper non ultricies id, fringilla at est. Maecenas imperdiet congue felis, quis interdum nunc dignissim sit amet. Mauris sed lorem vehicula nulla finibus ultricies sit amet non dui. Cras eu ex interdum, consequat arcu in, sollicitudin neque. Donec malesuada euismod ex, ac faucibus felis vehicula eget. Maecenas volutpat metus at leo auctor, ac euismod ligula elementum. Aenean feugiat lorem eget arcu accumsan condimentum.<br/>

Mauris finibus, elit vitae ornare lacinia, tellus metus posuere nisi, eget pharetra lacus turpis at mauris. Nulla pharetra suscipit sapien, id pharetra orci porttitor a. Aenean placerat nibh in tincidunt varius. Duis sed felis viverra, sodales nibh aliquam, tincidunt enim. Duis pellentesque pharetra interdum. Aliquam ac est condimentum, efficitur nisi vel, hendrerit enim. Integer tempus nec eros vel gravida. Vivamus convallis, dui sit amet iaculis lobortis, nisi ante sollicitudin arcu, eu commodo sem purus sed risus. Nullam gravida facilisis ligula ut fringilla. Duis molestie sed neque pretium hendrerit. Suspendisse suscipit erat sed ipsum mollis dignissim. Nullam ultricies nunc lacus, eu porta nulla facilisis sed. Maecenas non malesuada enim, non dapibus velit. Mauris pulvinar, ligula eu malesuada scelerisque, arcu odio bibendum sem, a tempus mauris arcu vel ipsum. Aliquam quis lacus interdum, condimentum leo id, volutpat ipsum.<br/>

Suspendisse elit odio, rutrum eu risus sed, vestibulum efficitur augue. Donec eget eleifend urna. Phasellus et nisi sodales, lobortis orci dictum, dignissim risus. Aliquam ultrices nisi eu euismod aliquam. Suspendisse non est lacinia, sagittis tellus in, bibendum tellus. Duis posuere nisl eget vehicula venenatis. Vestibulum et lacus eu leo finibus commodo. Praesent sagittis, odio et scelerisque suscipit, tellus augue cursus ex, non feugiat massa felis at arcu. Vivamus lobortis non dolor quis luctus. Mauris faucibus, ex sit amet ultricies blandit, quam lorem porta ligula, non tempor neque nisl suscipit libero. Suspendisse potenti. Nam id ligula sit amet tellus mollis feugiat. In id eros at enim cursus pretium et at sem. Quisque ut consectetur mi. Phasellus rhoncus felis suscipit lorem scelerisque fermentum. Etiam ut elit in mi euismod condimentum vitae vel augue.


       </p>

</div>

    </div>
<Agents/>

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