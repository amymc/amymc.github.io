import React from 'react';
import CloseButton from './closebutton';
import '../styles/components/popup.scss';

const Popup = (props) => {
  return (
    <div className='popup__outer-wrapper'>
      <img className='popup__icon' src={`assets/os-icons/${props.image_url}`} alt={props.title} />
      <div className='popup__inner-wrapper'>
        <div className='popup__text'>
          <p>{props.message[0]}</p>
          { props.message[1] ? 
            <p>{props.message[1]}</p> :
            null
          }
        </div>
        <button className='popup__button' onClick={props.onClick}>
          {props.button_text}
        </button>
      </div>
    </div>
  )
}

export default Popup;
