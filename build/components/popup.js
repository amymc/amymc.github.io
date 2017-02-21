'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _closebutton = require('./closebutton');

var _closebutton2 = _interopRequireDefault(_closebutton);

require('../styles/components/popup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.renderContact = _this.renderContact.bind(_this);
    _this.renderSideProjects = _this.renderSideProjects.bind(_this);
    _this.renderStandardPopup = _this.renderStandardPopup.bind(_this);
    return _this;
  }

  _createClass(Popup, [{
    key: 'renderContact',
    value: function renderContact() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { className: 'popup__icon popup__icon--contact', src: 'assets/os-icons/' + this.props.image_url, alt: this.props.title }),
        _react2.default.createElement(
          'div',
          { className: 'popup__inner-wrapper popup__inner-wrapper--contact' },
          _react2.default.createElement('div', { className: 'popup__text' }),
          this.props.links.map(function (link, index) {
            return _react2.default.createElement(
              'a',
              { key: index, className: 'popup__link', href: link.url },
              link.text
            );
          })
        )
      );
    }
  }, {
    key: 'renderSideProjects',
    value: function renderSideProjects() {
      return _react2.default.createElement(
        'ul',
        { className: 'popup__projects-wrapper' },
        this.props.sideProjects.map(function (project, index) {
          var _React$createElement;

          return _react2.default.createElement(
            'li',
            { className: 'popup__project', key: index },
            _react2.default.createElement(
              'a',
              (_React$createElement = { href: project.url }, _defineProperty(_React$createElement, 'href', 'http://www.amymccarthy.co/' + project.url + '/'), _defineProperty(_React$createElement, 'target', '_blank'), _React$createElement),
              _react2.default.createElement(
                'figure',
                { className: 'popup__project-icon-wrapper' },
                _react2.default.createElement('img', { className: 'popup__project-icon', src: 'assets/os-icons/sideprojects-icon.png', alt: '' })
              ),
              _react2.default.createElement(
                'h1',
                { className: 'popup__project-title' },
                project.title
              )
            )
          );
        })
      );
    }
  }, {
    key: 'renderStandardPopup',
    value: function renderStandardPopup() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { className: 'popup__icon' + (this.props.isContact ? ' popup__icon--contact' : ''), src: 'assets/os-icons/' + this.props.image_url, alt: this.props.title }),
        _react2.default.createElement(
          'div',
          { className: 'popup__inner-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'popup__text' },
            _react2.default.createElement(
              'p',
              null,
              this.props.message[0]
            ),
            this.props.message[1] ? _react2.default.createElement(
              'p',
              null,
              this.props.message[1]
            ) : null
          ),
          _react2.default.createElement(
            'button',
            { className: 'popup__button', onClick: this.props.onClick },
            this.props.button_text
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'popup__outer-wrapper' + (this.props.isSideProjects ? ' popup__outer-wrapper--projects' : '') + (this.props.isContact ? ' popup__outer-wrapper--contact' : '') },
        this.props.isContact ? this.renderContact() : null,
        this.props.isSideProjects ? this.renderSideProjects() : null,
        !this.props.isSideProjects && !this.props.isContact ? this.renderStandardPopup() : null
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sideProjects: state.sideProjects
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Popup);