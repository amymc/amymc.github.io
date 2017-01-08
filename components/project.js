import React from 'react';
import { connect } from 'react-redux';
import Draggable, {DraggableCore} from 'react-draggable';
import CloseButton from './closebutton';
import '../styles/project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    // this.state ={
    //   activeDrags: 0
    // };

    // this.onStart = this.onStart.bind(this);
    // this.onStop = this.onStop.bind(this);
  }

  // onStart() {
  //   this.setState({activeDrags: ++this.state.activeDrags});
  // }

  // onStop() {
  //   this.setState({activeDrags: --this.state.activeDrags});
  // }

  render() {
//  render() {
  const project = this.props;
  //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <div className='project'>
        <div className='project__inner-wrapper'>
          <div className='project__image-wrapper'>
            { project.image_urls.map((url, index) => {
              return <img key={index} className='project__image' alt={project.title} src={`../assets/${url}`} />
            })}
          </div>
          <div className='project__info-wrapper'>
            {project.description}
            <a href={project.company_url} target='_blank'>Link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
