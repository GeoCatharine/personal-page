import { Content, Footer, Header } from 'antd/lib/layout/layout'
import type { NextPage } from 'next'
import MainContent from '../components/MainContent'
import FooterContent from '../components/Footer';
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Header style={{ height: '100px'}}>
        <Nav />
      </Header>
      <Content>
        <MainContent />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </div>
  )
}

export default Home
