import React from 'react';
import { connect } from 'react-redux';
import '../styles/folder.css';

class Folder extends React.Component {

  render() {
    var { project } = this.props;

    return (
      <div className='folder'>
        <div className='folder__icon' />
        <span className='folder__title'>
          {project. title}
        </span>
      </div>
    );
  }
}

export default Folder;