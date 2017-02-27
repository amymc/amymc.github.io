import React from 'react';
import { connect } from 'react-redux';
import CloseButton from './closebutton';
import projectIcon from '../assets/os-icons/sideprojects-icon.png';
import '../styles/components/popup.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.renderContact = this.renderContact.bind(this);
    this.renderSideProjects = this.renderSideProjects.bind(this);
    this.renderStandardPopup = this.renderStandardPopup.bind(this);
  }

  renderContact() {
    return (
      <div>
        <img className='popup__icon popup__icon--contact' src={require(`../assets/os-icons/${this.props.image_url}`)} alt={this.props.title} />
        <div className='popup__inner-wrapper popup__inner-wrapper--contact'>
          <div className='popup__text'>
            
          </div>
          {this.props.links.map((link, index) => {
            return (
              <a key={index} className='popup__link' href={link.url}>
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    );
  }

  renderSideProjects() {
    return(
      <ul className='popup__projects-wrapper'>
        {this.props.sideProjects.map((project, index) => {
          return (
            <li className='popup__project' key={index}>
              <a href={project.url} href={`http://www.amymccarthy.co/${project.url}/`} target='_blank'>
                <figure className='popup__project-icon-wrapper'>
                  <img className='popup__project-icon' src={projectIcon} alt='project icon' />
                </figure>
                <h1 className='popup__project-title'>{project.title}</h1>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  renderStandardPopup() {
    return (
      <div>
        <img className={'popup__icon' + (this.props.isContact ? ' popup__icon--contact' : '')} src={require(`../assets/os-icons/${this.props.image_url}`)} alt={this.props.title} />
        <div className='popup__inner-wrapper'>
          <div className='popup__text'>
            <p>{this.props.message[0]}</p>
              {this.props.message[1] ? 
              <p>{this.props.message[1]}</p> :
              null
            }
          </div>
          <button className='popup__button' onClick={this.props.onClick}>
            {this.props.button_text}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={'popup__outer-wrapper' + (this.props.isSideProjects ? ' popup__outer-wrapper--projects' : '') + (this.props.isContact ? ' popup__outer-wrapper--contact' : '')} >
        {this.props.isContact ?
          this.renderContact() :
          null
        }
        {this.props.isSideProjects ?
          this.renderSideProjects() :
          null
        }
        {!this.props.isSideProjects && !this.props.isContact ?
          this.renderStandardPopup() :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sideProjects: state.sideProjects
});

export default connect(
  mapStateToProps, 
  null
)(Popup);
