import React from 'react';
import Layout from './layout';
import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './header';
import "./layout.example.scss"

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div className='layout-demo'>
      <div >
        <h1>demo-1</h1>
        <Layout className='demo'>
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div >
        <h1>demo-2</h1>
        <Layout className='demo'>
          <Header className="header">Header</Header>
          <Layout>
            <Aside className='aside'>Aside</Aside>
            <Content className="content">Content</Content>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>demo-3</h1>
        <Layout className='demo'>
          <Header className="header">Header</Header>
          <Layout>
            <Content className="content">Content</Content>
            <Aside className='aside'>Aside</Aside>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>demo-4</h1>
        <Layout className='demo'>
          <Aside className='aside'>Aside</Aside>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}
export default  LayoutExample;