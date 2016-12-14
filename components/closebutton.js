import React from 'react';
import '../styles/closebutton.css';

const CloseButton = (props) => {
  return (
    <button className='closebutton' onClick={props.onClick}> X </button>
  )
}

export default CloseButton;