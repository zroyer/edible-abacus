import React from 'react';
import Calculator from './Calculator.js'
import { Layout, Typography } from 'antd';
import './App.css';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const baseStyle = {
  textAlign: 'center',
  backgroundColor: '#FFFFFF',
  padding: '16px',
};

function App() {
  return (
    <Layout>
      <Header
        className='header'
        style={baseStyle}
      >
        <Title
          level={3}
        >
          <span
            role='img'
            aria-label='abacus'
          >
            Edible Abacus 🧮
          </span>
        </Title>
      </Header>
      <Content
        className='content'
        style={baseStyle}
      >
        <Calculator />
      </Content>
       <Footer
        style={{
          ...baseStyle,
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <span
          role='img'
          aria-label='taco'
        >
          Made with 🌮 in Austin, TX
        </span>
      </Footer>
    </Layout>
  );
}

export default App;
