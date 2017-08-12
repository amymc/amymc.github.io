'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menuitem = require('./menuitem');

var _menuitem2 = _interopRequireDefault(_menuitem);

require('../styles/components/menu.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.onPageClick = _this.onPageClick.bind(_this);
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mousedown', this.onPageClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousedown', this.onPageClick);
    }
  }, {
    key: 'onPageClick',
    value: function onPageClick(e) {
      var isStartButton = e.target.className.indexOf('startbar__button') > -1 || e.target.parentNode.className.indexOf('startbar__button') > -1;
      if (e.target !== this.menu && !this.menu.contains(e.target) && !isStartButton && this.props.onPageClick) {
        this.props.onPageClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;


      return _react2.default.createElement(
        'ul',
        { className: 'menu' + (this.props.type ? ' menu--submenu' : ' menu--main'), style: { zIndex: 10 }, ref: function ref(menu) {
            _this2.menu = menu;
          } },
        items.map(function (item, index) {
          return _react2.default.createElement(_menuitem2.default, { key: index, item: item, onClick: _this2.props.onClick });
        })
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;