'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/components/folder.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Folder = function Folder(props) {
  var project = props.project;


  return _react2.default.createElement(
    'div',
    { className: 'folder', onClick: function onClick() {
        return props.onClick(project.title);
      } },
    _react2.default.createElement('div', { className: 'folder__icon' }),
    _react2.default.createElement(
      'span',
      { className: 'folder__title' },
      project.title
    )
  );
};

exports.default = Folder;