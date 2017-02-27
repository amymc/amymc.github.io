'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _closebutton = require('./closebutton');

var _closebutton2 = _interopRequireDefault(_closebutton);

require('../styles/components/windowtitle.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowTitle = function WindowTitle(props) {
  return _react2.default.createElement(
    'div',
    { className: 'window-title handle' },
    _react2.default.createElement(
      'h1',
      { className: 'window-title__heading' },
      props.title
    ),
    _react2.default.createElement(_closebutton2.default, { onClick: function onClick() {
        return props.onClick(props.title);
      } })
  );
};

exports.default = WindowTitle;