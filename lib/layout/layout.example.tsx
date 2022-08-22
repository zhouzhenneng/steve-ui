import React from 'react';
import Layout from './layout';
// import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './header';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1>demo-1</h1>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  )
}
export default  LayoutExample;