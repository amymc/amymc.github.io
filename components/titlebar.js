import React from 'react';
import '../styles/titlebar.css';

const TitleBar = (props) => {
  return (
    <div className='titlebar'>
      {props.currentProject}
    </div>
  )
}

export default TitleBar;
