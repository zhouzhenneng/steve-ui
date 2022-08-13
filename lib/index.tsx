import * as React from 'react'
import { createRoot } from 'react-dom/client';
import Icon from './icon'


const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <div>
    <Icon name='twitter'/>
    <Icon name='facebook'/>
    <Icon name='instagram'/>
  </div>
);