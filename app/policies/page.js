import InnerPage from '../../components/pages/innerpage';
import { blogConfig } from '@/config';
import PageWrapper from '@/components/wrapper';


const { title, description } = blogConfig.pages.policies;
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
    description},
};


export default function Policy() {

      return (
        <PageWrapper>
        <InnerPage background='https://unsplash.com/photos/p_kICQCOM4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHx8fDE2OTY1MjIzMzZ8MA&force=true&w=1920'
        title='Privacy Policy'
        subtitle="We value your privacy" showAgents={false}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et gravida erat. Fusce fermentum ac tellus porta tincidunt. Mauris tincidunt elit vitae malesuada vehicula. Phasellus porta sit amet mi eu fringilla. Etiam quis metus risus. Sed commodo lobortis massa ut lacinia. Nullam nec est sit amet leo aliquet ultricies ut sit amet quam. Aenean porta diam non purus egestas elementum. Nam a magna imperdiet ex bibendum vehicula. Aliquam tincidunt condimentum quam at scelerisque. Vivamus congue sem ut nunc consequat, posuere malesuada nulla interdum. Donec posuere rutrum massa, in accumsan velit varius eu. In faucibus lectus ligula, vel cursus tellus ultricies tincidunt.<br/>

Aenean imperdiet eros at eros facilisis cursus. Nulla dignissim rhoncus mi, vestibulum fringilla lorem convallis id. Maecenas ullamcorper a metus ut vestibulum. Quisque hendrerit accumsan justo, vel porta velit dictum nec. Ut tincidunt purus vel ex imperdiet, ac consectetur metus maximus. Proin tincidunt ex ac mollis varius. Vestibulum placerat ante at placerat semper. Pellentesque pretium, quam quis porta accumsan, mi felis vestibulum libero, et aliquam ante ante et est. Aliquam vehicula erat eget est aliquam, non aliquet dolor elementum. Curabitur vitae semper tortor. Vestibulum feugiat, dui ut hendrerit consectetur, urna dolor pulvinar tellus, vitae facilisis felis ligula non risus.<br/>

Aliquam luctus iaculis condimentum. In nec eleifend nisi. Praesent accumsan sem in eros ornare facilisis nec ac elit. Maecenas id quam vehicula, maximus lorem sit amet, vestibulum ligula. Curabitur eu eros urna. Nulla erat ligula, semper non ultricies id, fringilla at est. Maecenas imperdiet congue felis, quis interdum nunc dignissim sit amet. Mauris sed lorem vehicula nulla finibus ultricies sit amet non dui. Cras eu ex interdum, consequat arcu in, sollicitudin neque. Donec malesuada euismod ex, ac faucibus felis vehicula eget. Maecenas volutpat metus at leo auctor, ac euismod ligula elementum. Aenean feugiat lorem eget arcu accumsan condimentum.<br/>

Mauris finibus, elit vitae ornare lacinia, tellus metus posuere nisi, eget pharetra lacus turpis at mauris. Nulla pharetra suscipit sapien, id pharetra orci porttitor a. Aenean placerat nibh in tincidunt varius. Duis sed felis viverra, sodales nibh aliquam, tincidunt enim. Duis pellentesque pharetra interdum. Aliquam ac est condimentum, efficitur nisi vel, hendrerit enim. Integer tempus nec eros vel gravida. Vivamus convallis, dui sit amet iaculis lobortis, nisi ante sollicitudin arcu, eu commodo sem purus sed risus. Nullam gravida facilisis ligula ut fringilla. Duis molestie sed neque pretium hendrerit. Suspendisse suscipit erat sed ipsum mollis dignissim. Nullam ultricies nunc lacus, eu porta nulla facilisis sed. Maecenas non malesuada enim, non dapibus velit. Mauris pulvinar, ligula eu malesuada scelerisque, arcu odio bibendum sem, a tempus mauris arcu vel ipsum. Aliquam quis lacus interdum, condimentum leo id, volutpat ipsum.<br/>

Suspendisse elit odio, rutrum eu risus sed, vestibulum efficitur augue. Donec eget eleifend urna. Phasellus et nisi sodales, lobortis orci dictum, dignissim risus. Aliquam ultrices nisi eu euismod aliquam. Suspendisse non est lacinia, sagittis tellus in, bibendum tellus. Duis posuere nisl eget vehicula venenatis. Vestibulum et lacus eu leo finibus commodo. Praesent sagittis, odio et scelerisque suscipit, tellus augue cursus ex, non feugiat massa felis at arcu. Vivamus lobortis non dolor quis luctus. Mauris faucibus, ex sit amet ultricies blandit, quam lorem porta ligula, non tempor neque nisl suscipit libero. Suspendisse potenti. Nam id ligula sit amet tellus mollis feugiat. In id eros at enim cursus pretium et at sem. Quisque ut consectetur mi. Phasellus rhoncus felis suscipit lorem scelerisque fermentum. Etiam ut elit in mi euismod condimentum vitae vel augue.


   </InnerPage>

   </PageWrapper>
  );
}