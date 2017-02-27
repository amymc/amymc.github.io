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

var _startbar = require('./startbar');

var _startbar2 = _interopRequireDefault(_startbar);

var _folder = require('./folder');

var _folder2 = _interopRequireDefault(_folder);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _window = require('./window');

var _window2 = _interopRequireDefault(_window);

require('../styles/components/app.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      selectedProject: null,
      selectedWindow: null,
      showMenu: false,
      startButtonActive: false
    };

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleStartClick = _this.handleStartClick.bind(_this);
    return _this;
  }

  // make sure the window just opened has the top z-index.


  _createClass(App, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedProject = nextProps.projects.filter(function (project) {
        return project.isSelected === true;
      })[0];
      var selectedPopup = nextProps.popups.filter(function (popup) {
        return popup.isSelected === true;
      })[0];
      var selectedTitle = void 0;

      if (selectedPopup && selectedPopup.title !== this.state.selectedWindow && this.selectedPopup !== selectedPopup) {
        selectedTitle = selectedPopup.title;
      } else if (selectedProject && selectedProject.title !== this.state.selectedWindow) {
        selectedTitle = selectedProject.title;
        this.setState({
          selectedProject: selectedTitle
        });
      }

      this.setState({
        selectedWindow: selectedTitle
      });

      this.selectedPopup = selectedPopup;
      this.selectedProject = selectedProject;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(windowTitle) {
      this.setState({
        selectedWindow: windowTitle
      });
    }
  }, {
    key: 'handleStartClick',
    value: function handleStartClick() {
      // toggle states on button click
      this.setState({
        showMenu: !this.state.showMenu,
        startButtonActive: !this.state.startButtonActive
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          menuItems = _props.menuItems,
          popups = _props.popups,
          projects = _props.projects;

      var openPopups = popups.filter(function (popup) {
        return popup.isOpen === true;
      });
      var openProjects = projects.filter(function (project) {
        return project.isOpen === true;
      });

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'div',
          { className: 'app__inner-wrapper' },
          projects.map(function (project, index) {
            return _react2.default.createElement(_folder2.default, { key: index, project: project, onClick: actions.openProject });
          }),
          _react2.default.createElement(
            'div',
            null,
            openProjects.map(function (project, index) {
              var zIndex = project.title === _this2.state.selectedWindow ? 10 : 1;
              return _react2.default.createElement(_window2.default, { key: index, item: project, zIndex: zIndex, isProject: true, onMouseDown: _this2.handleMouseDown, onCloseClick: actions.closeProject, selectedProject: _this2.state.selectedProject });
            }),
            openPopups.map(function (popup, index) {
              var zIndex = popup.title === _this2.state.selectedWindow ? 10 : 1;
              return _react2.default.createElement(_window2.default, { key: index, item: popup, zIndex: zIndex, isProject: false, onMouseDown: _this2.handleMouseDown, onCloseClick: actions.closePopup });
            })
          )
        ),
        this.state.showMenu ? _react2.default.createElement(_menu2.default, { onClick: actions.openPopup, items: menuItems, onPageClick: this.handleStartClick }) : null,
        _react2.default.createElement(_startbar2.default, { onClick: this.handleStartClick, active: this.state.startButtonActive, openProjects: openProjects, selectedProject: this.state.selectedProject })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    menuItems: state.menuItems,
    popups: state.popups,
    projects: state.projects,
    sideProjects: state.sideProjects
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ProjectActions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);