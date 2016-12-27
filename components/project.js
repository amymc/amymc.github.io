import React from 'react';
import { connect } from 'react-redux';
import CloseButton from './closebutton';
import '../styles/project.scss';

const Project = (props) => {

//  render() {
  const project = props;

  return (
    <div className='project'>
      <div className='project__header'>
        <h1 className='project__title'>
          {project.title}
        </h1>
        <CloseButton onClick={props.onClick}/>
      </div>
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

export default Project;
