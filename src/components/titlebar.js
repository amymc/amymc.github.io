import React from 'react';
import '../styles/components/titlebar.scss';

const TitleBar = (props) => {
  return (
    <div className='titlebar'>
      <img className='titlebar__icon' src='assets/os-icons/openfolder-icon1.png' alt='open folder icon' />
      <span className='titlebar__text'>{props.project.title}</span>
    </div>
  )
}

export default TitleBar;
