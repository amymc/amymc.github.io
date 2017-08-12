'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _menuitems = require('./menuitems');

var _menuitems2 = _interopRequireDefault(_menuitems);

var _popups = require('./popups');

var _popups2 = _interopRequireDefault(_popups);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _sideprojects = require('./sideprojects');

var _sideprojects2 = _interopRequireDefault(_sideprojects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  menuItems: _menuitems2.default,
  popups: _popups2.default,
  sideProjects: _sideprojects2.default,
  projects: _projects2.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;