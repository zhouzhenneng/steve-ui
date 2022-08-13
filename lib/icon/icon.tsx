import * as React from 'react';
import "./importIcons"
import './icon.scss'
import classes from '../helper/classes';



interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...resProps}) => {
  return (
      <svg className={classes("steve-icon", className)} {...resProps}>
        <use xlinkHref={`#${name}`} />
      </svg>
  );
}

export default Icon;
