import React from 'react';
import '../styles/menu.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul className='menu'>
        <li className='menu__item'>
          <img className='menu__item-icon' src='../assets/os-icons/run-icon.png' alt='documents icon'/>
          Documents
        </li>
        <li className='menu__item' onClick={this.props.onClick}>
          <img className='menu__item-icon' src='../assets/os-icons/run-icon.png' alt='run icon'/>
          Run
        </li>
      </ul>
    );
  }
}

export default Menu;

