'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

var ProjectActions = _interopRequireWildcard(_actions);

var _closebutton = require('./closebutton');

var _closebutton2 = _interopRequireDefault(_closebutton);

require('../styles/components/project.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    _classCallCheck(this, Project);

    var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

    _this.renderLandscapeLayout = _this.renderLandscapeLayout.bind(_this);
    _this.renderPortraitLayout = _this.renderPortraitLayout.bind(_this);
    return _this;
  }

  _createClass(Project, [{
    key: 'renderLandscapeLayout',
    value: function renderLandscapeLayout() {
      var _this2 = this;

      return this.props.image_urls.map(function (url, index) {
        return _react2.default.createElement('img', { key: index, className: 'project__image', alt: _this2.props.title, src: 'assets/' + url });
      });
    }
  }, {
    key: 'renderPortraitLayout',
    value: function renderPortraitLayout() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'project__image-inner-wrapper' },
          _react2.default.createElement('img', { className: 'project__image project__image--portrait', alt: this.props.title, src: 'assets/' + this.props.image_urls[0] }),
          _react2.default.createElement('img', { className: 'project__image project__image--portrait', alt: this.props.title, src: 'assets/' + this.props.image_urls[1] })
        ),
        _react2.default.createElement('img', { className: 'project__image', alt: this.props.title, src: 'assets/' + this.props.image_urls[2] })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var item = this.props;

      return _react2.default.createElement(
        'div',
        { className: 'project' },
        _react2.default.createElement(
          'div',
          { className: 'project__inner-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'project__image-wrapper' },
            item.hasPortraitImages ? this.renderPortraitLayout() : this.renderLandscapeLayout()
          ),
          _react2.default.createElement(
            'div',
            { className: 'project__info-wrapper' },
            _react2.default.createElement(
              'p',
              { className: 'project__info' },
              _react2.default.createElement(
                'span',
                { className: 'project__info-title' },
                'Type:'
              ),
              ' ',
              item.type
            ),
            _react2.default.createElement(
              'div',
              { className: 'project__info' },
              _react2.default.createElement(
                'span',
                { className: 'project__info-title project__info-title--has-margin' },
                'Description:'
              ),
              item.description.map(function (description, index) {
                return _react2.default.createElement(
                  'p',
                  { className: 'project__info-item', key: index },
                  description
                );
              })
            ),
            _react2.default.createElement(
              'p',
              { className: 'project__info' },
              _react2.default.createElement(
                'span',
                { className: 'project__info-title' },
                'Tech stack:'
              ),
              ' ',
              item.tech_stack
            ),
            item.company_url ? _react2.default.createElement(
              'a',
              { className: 'project__link', href: item.company_url, target: '_blank' },
              'Company site'
            ) : _react2.default.createElement(
              'button',
              { className: 'project__link', onClick: function onClick() {
                  return _this3.props.actions.openPopup(item.popup.title);
                } },
              'Company site'
            )
          )
        )
      );
    }
  }]);

  return Project;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ProjectActions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Project);