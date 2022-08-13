import React from 'react';
// import './icons/twitter.svg'
// import './icons/facebook.svg'
// import './icons/instagram.svg'
import "./importIcons"
import './icon.scss'



interface IconProps{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className="steve-icon">
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  );
}

export default Icon;
