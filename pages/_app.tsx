import '../styles/globals.scss'
import { Layout } from 'antd'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../components/Nav';
import MainContent from '../components/MainContent';
import FooterContent from '../components/Footer';
import { useEffect } from 'react';
import Custom404 from './404';

const { Header, Footer, Content } = Layout;

function MyApp() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <Header style={{ height: '100px'}}>
        <Nav />
      </Header>
      <Content>
        <MainContent />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  )
}

export default MyApp
