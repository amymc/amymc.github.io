import React from 'react';
import { connect } from 'react-redux';
//import '../styles/project.css';

class Project extends React.Component {

  render() {
   var project = this.props;

    return (
      <div className='project'>
       {project.id}
      </div>
    );
  }
}

export default Project;