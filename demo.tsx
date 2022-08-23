import * as React from 'react';
import {ReactNode} from 'react';

interface Props{
  code: string;
  children: ReactNode
}

const Demo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>

  )
}
export default Demo;