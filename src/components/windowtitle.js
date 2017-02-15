import React from 'react';
import CloseButton from './closebutton';

const WindowTitle = (props) => {
  return (
     <div className='window__header handle'>
      <h1 className='window__title'>
        {props.title}
      </h1>
      <CloseButton onClick={() => props.onClick(props.title)} />
    </div>
  )
}

export default WindowTitle;
