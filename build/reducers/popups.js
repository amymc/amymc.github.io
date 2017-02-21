'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actiontypes = require('../constants/actiontypes');

var types = _interopRequireWildcard(_actiontypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function popups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {

    case types.OPEN_POPUP:
      return state.map(function (popup) {
        return popup.title === action.title ? _extends({}, popup, { isOpen: true, isSelected: true }) : _extends({}, popup, { isSelected: false });
      });

    case types.CLOSE_POPUP:
      return state.map(function (popup) {
        return popup.title === action.title ? _extends({}, popup, { isOpen: false }) : popup;
      });

    default:
      return state;
  }
}

exports.default = popups;