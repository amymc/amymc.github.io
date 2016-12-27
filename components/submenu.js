import React from 'react';
//import '../styles/menu.css';

class Submenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <ul className='menu'>
        <li className='menu__item'>
          <img className='menu__item-icon' src='../assets/os-icons/documents-icon.png' alt='documents icon'/>
          <span className='menu__item-title'> Documents &#x25b6; </span>
        </li>
        <li className='menu__item' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <img className='menu__item-icon' src='../assets/os-icons/settings-icon.png' alt='settings icon'/>
          <span className='menu__item-title'> Settings &#x25b6; </span>
        </li>
        <li className='menu__item' onClick={this.props.onClick}>
          <img className='menu__item-icon' src='../assets/os-icons/run-icon.png' alt='run icon'/>
          <span className='menu__item-title'> Run </span>
        </li>
      </ul>
    );
  }
}

export default Submenu;

