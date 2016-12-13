import React from 'react';
import '../styles/menu.css';

var Menu = React.createClass({

  render: function() {

    return (
      <ul className='menu'>
        <li className='menu__item'>
          <img className='menu__item-icon' src='../assets/os-icons/run-icon.png' alt='run icon'/>
          Run
        </li>
        <li className='menu__item'>
          <img className='menu__item-icon' src='../assets/os-icons/run-icon.png' alt='documents icon'/>
          Run
        </li>
      </ul>
    );
  }
});

module.exports = Menu;
