import * as React from 'react';
import {ReactNode, useState} from 'react';
import styled from "styled-components";
import Highlight, {defaultProps} from "prism-react-renderer";
import palenight from 'prism-react-renderer/themes/palenight';
import Icon from './lib/icon/icon';


interface Props{
  code: string;
  children: ReactNode
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em 3em;
  overflow: scroll;
  width: 70%;
`;
  const code = (
    <Highlight {...defaultProps} theme={palenight} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </Pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className='example'>
        {props.children}
      </div>
      <div>
        <Icon name='CodeSandbox'  onClick={() => setCodeVisible(!codeVisible)}></Icon>
        {codeVisible && code}
      </div>
    </div>

  )
}
export default Demo;