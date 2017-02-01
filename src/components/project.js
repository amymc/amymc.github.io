import React from 'react';
import CloseButton from './closebutton';
import '../styles/components/project.scss';

const Project = (props) => {
  const item = props;

  return (
    <div className='project'>
      <div className='project__inner-wrapper'>
        <div className='project__image-wrapper'>
          { item.image_urls.map((url, index) => {
            return <img key={index} className='project__image' alt={item.title} src={`assets/${url}`} />
          })}
        </div>
        <div className='project__info-wrapper'>
          {item.description}
          <a href={item.company_url} target='_blank'>Link</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
