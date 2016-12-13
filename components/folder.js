import React from 'react';
import { connect } from 'react-redux';
import '../styles/folder.css';

const Folder = (props) => {

  //render() {
  var { project } = props;

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

