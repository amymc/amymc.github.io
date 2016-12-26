import React from 'react';
import TitleBar from './titlebar';
import '../styles/startbar.css';

const StartBar = (props) => {
  return (
    <div className='startbar'>
      <button className={'startbar__button' + (props.active ? ' startbar__button--active' : '')} onClick={() => props.onClick()}>
        <img className='startbar__button-icon' src='../assets/favicon-16x16.png' alt='start icon' />
        <span className='startbar__button-text'> Start </span>
      </button>
      {props.currentProject ?
        <TitleBar {...props}/> :
        null
      }
    </div>
  )
}

export default StartBar;
