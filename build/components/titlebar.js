'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/components/titlebar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleBar = function TitleBar(props) {
  var isSelectedProject = props.project.title === props.selectedProject ? true : false;

  return _react2.default.createElement(
    'div',
    { className: 'titlebar' + (isSelectedProject ? ' titlebar--selected' : '') },
    _react2.default.createElement('img', { className: 'titlebar__icon', src: 'assets/os-icons/openfolder-icon.png', alt: 'open folder icon' }),
    _react2.default.createElement(
      'span',
      { className: 'titlebar__text' },
      props.project.title
    )
  );
};

exports.default = TitleBar;