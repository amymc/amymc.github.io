import React from 'react';
import '../styles/titlebar.scss';

const TitleBar = (props) => {
  return (
    <div className='titlebar'>
      {props.currentProject}
    </div>
  )
}

export default TitleBar;
