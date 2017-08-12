'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _menuitems = require('./data/menuitems');

var _menuitems2 = _interopRequireDefault(_menuitems);

var _popups = require('./data/popups');

var _popups2 = _interopRequireDefault(_popups);

var _projects = require('./data/projects');

var _projects2 = _interopRequireDefault(_projects);

var _sideprojects = require('./data/sideprojects');

var _sideprojects2 = _interopRequireDefault(_sideprojects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  menuItems: _menuitems2.default,
  popups: _popups2.default,
  projects: _projects2.default,
  sideProjects: _sideprojects2.default
};

var store = (0, _redux.createStore)(_reducers2.default, defaultState);

var history = exports.history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

exports.default = store;