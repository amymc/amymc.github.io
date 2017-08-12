'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/components/closebutton.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButton = function CloseButton(props) {
  return _react2.default.createElement(
    'button',
    { className: 'closebutton', onClick: props.onClick },
    ' X '
  );
};

exports.default = CloseButton;