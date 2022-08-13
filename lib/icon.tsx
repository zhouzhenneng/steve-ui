import React from 'react';
import "./importIcons"
import './icon.scss'
import classes from './helper/classes';



interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...resProps}) => {
  return (
      <svg className={classes("steve-icon", className)}>
        <use xlinkHref={`#${name}`} {...resProps}/>
      </svg>
  );
}

export default Icon;
