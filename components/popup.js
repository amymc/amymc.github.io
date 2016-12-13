import React from 'react';
import '../styles/popup.css';

const Popup = (props) => {
  return (
    <div className='popup'>
      <span className='popup__title'>
        Warning
      </span>
      <img className='popup__icon' src='../assets/os-icons/failure-icon.png' alt='error icon' />
      <div className='popup__inner-wrapper'>
        <div className='popup__text'>
          You can't run forever
        </div>
        <button className='popup__button' onClick={props.onClick}>
          Abort
        </button>
      </div>
    </div>
  )
}

export default Popup;

