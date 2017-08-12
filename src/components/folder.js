import React from 'react';
import '../styles/components/folder.scss';

const Folder = (props) => {
  const { project } = props;

  return (
    <div className='folder desktop-icon' onClick={() => props.onClick(project.title)}>
      <div className='folder__icon' />
      <span className='folder__title desktop-icon__title'>
        {project.title}
      </span>
    </div>
  )
}

export default Folder;
