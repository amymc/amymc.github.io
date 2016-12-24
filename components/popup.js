import React from 'react';
import CloseButton from './closebutton';
import '../styles/popup.css';

const Popup = (props) => {
  return (
    <div className='popup'>
      <div className='popup__header'>
        <span className='popup__title'>
          {props.title}
        </span>
        <CloseButton onClick={props.onClick}/>
      </div>
      <div className='popup__outer-wrapper'>
        <img className='popup__icon' src={`../assets/os-icons/${props.image_url}`} alt={props.title} />
        <div className='popup__inner-wrapper'>
          <div className='popup__text'>
            {props.message}
          </div>
          <button className='popup__button' onClick={props.onClick}>
            {props.button_text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup;

