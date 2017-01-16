import React from 'react';
import '../styles/components/titlebar.scss';

const TitleBar = (props) => {
  return (
    <div className='titlebar'>
      {props.project.title}
    </div>
  )
}

export default TitleBar;
