import React from 'react';
//remove ??
import { connect } from 'react-redux';
import '../styles/folder.css';

const Folder = (props) => {
  const { project } = props;

  return (
    <div className='folder' onClick={() => props.onClick(project.id)}>
      <div className='folder__icon' />
      <span className='folder__title'>
        {project.title}
      </span>
    </div>
  )
}

export default Folder;

