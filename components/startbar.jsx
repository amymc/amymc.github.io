import React from 'react';
import '../styles/startbar.css';

var StartBar = React.createClass({

  render: function() {

    return (
      <div className='start-bar'>
        <button>
          START
        </button>
      </div>
    );
  }
});

module.exports = StartBar;
