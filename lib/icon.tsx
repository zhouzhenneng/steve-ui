import React from 'react';
import "./importIcons"
import './icon.scss'
import classes from './helper/classes';



interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...resProps} = props;
  return (
      <svg className={classes("steve-icon", className)}>
        <use xlinkHref={`#${resProps.name}`} {...resProps}/>
      </svg>
  );
}

export default Icon;
