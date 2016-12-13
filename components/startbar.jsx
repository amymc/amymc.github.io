import React from 'react';
import '../styles/startbar.css';

var StartBar = React.createClass({

  render: function() {

    return (
      <div className='startbar'>
        <button className='startbar__button'>
          <img className='startbar__button-icon' src='../assets/favicon-16x16.png' alt='start icon' />
          <span className='startbar__button-text'> Start </span>
        </button>
      </div>
    );
  }
});

module.exports = StartBar;
