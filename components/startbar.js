import React from 'react';
import '../styles/startbar.css';

const StartBar = (props) => {
  return (
    <div className='startbar'>
      <button className={'startbar__button' + (props.active ? ' startbar__button--active' : '')} onClick={() => props.onClick()}>
        <img className='startbar__button-icon' src='../assets/favicon-16x16.png' alt='start icon' />
        <span className='startbar__button-text'> Start </span>
      </button>
    </div>
  )
}

export default StartBar;
