'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/components/clock.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.setTime = _this.setTime.bind(_this);
    return _this;
  }

  // http://stackoverflow.com/questions/32880484/react-js-live-clock-update


  _createClass(Clock, [{
    key: 'setTime',
    value: function setTime() {
      var currentdate = new Date();
      // getTimezoneOffset returns minutes, so divide by 60 to get hours
      var hours = currentdate.getUTCHours() - currentdate.getTimezoneOffset() / 60;

      // correct for number over 24, and negatives
      if (hours >= 24) {
        hours -= 24;
      }
      if (hours < 0) {
        hours += 24;
      }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if (hours.length == 1) {
        hours = "0" + hours;
      }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert minutes to string
      minutes = minutes + "";
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }

      this.setState({
        hours: hours,
        minutes: minutes
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setTime();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.setInterval(function () {
        this.setTime();
      }.bind(this), 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'clock' },
        this.state.hours,
        ':',
        this.state.minutes
      );
    }
  }]);

  return Clock;
}(_react2.default.Component);

exports.default = Clock;