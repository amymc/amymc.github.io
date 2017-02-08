import React from 'react';
import { connect } from 'react-redux';
import CloseButton from './closebutton';
import '../styles/components/popup.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hover: false
    // };

    this.renderSideProjects = this.renderSideProjects.bind(this);
    this.renderStandardPopup = this.renderStandardPopup.bind(this);
  }

  renderSideProjects() {
    return(

      <ul className='popup__projects-wrapper'>
        {this.props.sideProjects.map((project, index) => {
          return (
            <li className='popup__project' key={index}>
              <a href={project.url} href={`http://www.amymccarthy.co/${project.url}/`} target='_blank'>
                <figure className='popup__project-icon-wrapper'>
                  <img className='popup__project-icon' src='assets/os-icons/sideprojects-icon.png' alt='' />
                </figure>
                <h1 className='popup__project-title'>{project.title}</h1>
              </a>
            </li>
          );
        })
      }
      </ul>
      
        // this.props.sideProjects.map((sideProject, index) => {
        //  // console.log('sideProject', sideProject.title);
        //   return (
        //     <div key={index}>
        //       <img className='popup__icon' src='assets/os-icons/sideprojects-icon.png' alt='' />
        //       <h1>{sideProject.title}</h1>
        //     </div>
        //   );
        // })
    );
  }

  //<img className='popup__icon' src='assets/os-icons/sideprojects-icon.png' alt='' />

  renderStandardPopup() {
    return (
      <div>
        <img className='popup__icon' src={`assets/os-icons/${this.props.image_url}`} alt={this.props.title} />
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
      <div className='popup__outer-wrapper'>
        {this.props.isSideProjects ?
          this.renderSideProjects() :
          this.renderStandardPopup()
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
