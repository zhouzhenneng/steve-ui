import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter as Router,Routes, Route, NavLink,} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Footer, Aside, Content} from "./lib/layout/layout"
import './example.scss'
import IconDemo from './lib/icon/icon.demo';
const logo = require("./logo.png")
console.log('logo')
console.log(logo)


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header" >
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span> Sui-react </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>Component</h2>
          <ul>
            <li>
              <NavLink to='icon'>Icon</NavLink>
            </li>
            <li>
              <NavLink to='button'>Button</NavLink>
            </li>
            <li>
              <NavLink to='dialog'>Dialog</NavLink>
            </li>
            <li>
              <NavLink to='layout'>Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Routes>
            <Route path='/icon' element={<IconDemo/> }/>
            <Route path='/button' element={<ButtonExample/>}/>
            <Route path='/dialog' element={<DialogExample/>}/>
            <Route path='layout' element={<LayoutExample/>}/>
          </Routes>
        </Content>
      </Layout>
      <Footer  className="site-footer">
        &copy; 2022 Steve
      </Footer>
    </Layout>
  </Router>
);