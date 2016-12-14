import React from 'react';
import CloseButton from './closebutton';
import '../styles/popup.css';

const Popup = (props) => {
  return (
    <div className='popup'>
      <div className='popup__header'>
        <span className='popup__title'>
          Warning
        </span>
        <CloseButton onClick={props.onClick}/>
      </div>
      <div className='popup__outer-wrapper'>
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
    </div>
  )
}

export default Popup;

