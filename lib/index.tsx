import * as  React from 'react'
import { createRoot } from 'react-dom/client';
import Icon from './icon/icon'

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target)
}
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);



root.render(
  <div>
    <Icon name='twitter'
          className="icon"
          onClick={fn}
          onMouseEnter={() => console.log("enter")}
          onMouseLeave={() => console.log("leave")}
    />
  </div>
);