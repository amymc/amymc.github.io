import React from 'react';
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

  }

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

export default Popup;
