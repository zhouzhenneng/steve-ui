import React, {ReactElement} from 'react';
import Aside from './aside';
import "./layout.scss"
import {scopedClassMaker} from '../helper/classes';

const sc = scopedClassMaker("sui-layout")

interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>;
}


const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  //reduce将多项合为一项，hasAside最终值是Boolean
  //"length" in children只会返回布尔值， children.length可能是0， 那么hasAside就是0，number类型
  const hasAside = "length" in children &&
   children.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div className={sc({"": true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  )
}

export default  Layout;
export {Layout};
export {default as Header} from './header'
export {default as Footer} from './footer'
export {default as Aside} from './aside'
export {default as Content} from './content'