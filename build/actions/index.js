'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPopup = openPopup;
exports.closePopup = closePopup;
exports.openProject = openProject;
exports.closeProject = closeProject;

var _actiontypes = require('../constants/actiontypes');

var types = _interopRequireWildcard(_actiontypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function openPopup(title) {
  return {
    type: types.OPEN_POPUP,
    title: title
  };
}

function closePopup(title) {
  return {
    type: types.CLOSE_POPUP,
    title: title
  };
}

function openProject(title) {
  return {
    type: types.OPEN_PROJECT,
    title: title
  };
}

function closeProject(title) {
  return {
    type: types.CLOSE_PROJECT,
    title: title
  };
}