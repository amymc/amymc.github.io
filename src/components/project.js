import React from 'react';
import CloseButton from './closebutton';
import '../styles/components/project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.renderLandscapeLayout = this.renderLandscapeLayout.bind(this);
    this.renderPortraitLayout = this.renderPortraitLayout.bind(this);
  }

  renderLandscapeLayout() {
    return (
      this.props.image_urls.map((url, index) => {
        return <img key={index} className='project__image' alt={this.props.title} src={`assets/${url}`} />
      })
    );
  }

  renderPortraitLayout() {
    return (
      <div>
      <div className="project__image-inner-wrapper">
        <img className='project__image project__image--portrait' alt={this.props.title} src={`assets/${this.props.image_urls[0]}`} />
        <img className='project__image project__image--portrait' alt={this.props.title} src={`assets/${this.props.image_urls[1]}`} />
      </div>
      <img className='project__image' alt={this.props.title} src={`assets/${this.props.image_urls[2]}`} />
      </div>
    );
  }

  render() {
    const item = this.props;

    return (
      <div className='project'>
        <div className='project__inner-wrapper'>
          <div className='project__image-wrapper'>
            {item.hasPortraitImages ?
              this.renderPortraitLayout() :
              this.renderLandscapeLayout()
            }
          </div>
          <div className='project__info-wrapper'>
            <p>{item.type}</p>
            {item.description.map((description, index) => {
              return <p key={index}>{description}</p>
            })}
            {item.tech_stack}
            <a className='project__link' href={item.company_url} target='_blank'>
              Company site
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
