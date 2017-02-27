'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _reactResizable = require('react-resizable');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

var ProjectActions = _interopRequireWildcard(_actions);

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

var _project = require('./project');

var _project2 = _interopRequireDefault(_project);

var _windowtitle = require('./windowtitle');

var _windowtitle2 = _interopRequireDefault(_windowtitle);

require('../styles/components/window.scss');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window(props) {
    _classCallCheck(this, Window);

    var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, props));

    _this.state = {
      activeDrags: 0,
      availableWidth: 1000,
      availableHeight: 1000,
      width: 540,
      height: 420
    };

    _this.onDrag = _this.onDrag.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onStart = _this.onStart.bind(_this);
    _this.onStop = _this.onStop.bind(_this);
    _this.renderFixedSize = _this.renderFixedSize.bind(_this);
    _this.renderResizable = _this.renderResizable.bind(_this);
    _this.setAvailableSpace = _this.setAvailableSpace.bind(_this);
    _this.updateWindowWidth = _this.updateWindowWidth.bind(_this);
    return _this;
  }

  _createClass(Window, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowWidth();
      window.addEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: 'updateWindowWidth',
    value: function updateWindowWidth() {
      var previousState = void 0;
      if (this.openWindow) {
        this.setAvailableSpace('resize');
      }

      if (window.innerWidth > 540) {
        this.setState({ isDesktop: true });
        return;
      }
      // } else {
      this.setState({ isDesktop: false });

      if (previousState !== this.state.isDesktop && this.props.item.title !== this.props.selectedProject) {

        ProjectActions.closeProject(this.props.item.title);
      }

      previousState = this.state.isDesktop;
      // }
    }
  }, {
    key: 'setAvailableSpace',
    value: function setAvailableSpace(eventType) {
      //set max width constraint to be windowwidth - left offset position of window
      var availableWidth = window.innerWidth - this.openWindow.getBoundingClientRect().left;
      var availableHeight = window.innerHeight - this.openWindow.getBoundingClientRect().top - 30;

      this.setState({
        availableWidth: availableWidth,
        availableHeight: availableHeight
      });

      if (eventType !== 'drag' && availableWidth < this.state.width) {
        this.setState({ width: availableWidth });
      }
    }
  }, {
    key: 'onDrag',
    value: function onDrag() {
      this.setAvailableSpace('drag');
    }
  }, {
    key: 'onResize',
    value: function onResize(event, _ref) {
      var size = _ref.size;

      this.updateWindowWidth();
      this.setState({ width: size.width, height: size.height });
    }
  }, {
    key: 'onStart',
    value: function onStart() {
      this.setState({ activeDrags: ++this.state.activeDrags });
    }
  }, {
    key: 'onStop',
    value: function onStop() {
      this.setState({ activeDrags: --this.state.activeDrags });
    }
  }, {
    key: 'renderDraggable',
    value: function renderDraggable() {
      var _this2 = this;

      var item = this.props.item;

      var dragHandlers = { onDrag: this.onDrag, onStart: this.onStart, onStop: this.onStop };

      return _react2.default.createElement(
        _reactDraggable2.default,
        _extends({ onMouseDown: function onMouseDown() {
            return _this2.props.onMouseDown(_this2.props.item.title);
          }, bounds: '.app__inner-wrapper', handle: '.handle' }, dragHandlers),
        this.props.isProject ? this.renderResizable() : this.renderFixedSize()
      );
    }
  }, {
    key: 'renderFixedSize',
    value: function renderFixedSize() {
      var _this3 = this;

      var _props = this.props,
          item = _props.item,
          zIndex = _props.zIndex;

      var isSelectedProject = item.title === this.props.selectedProject ? true : false;

      return _react2.default.createElement(
        'div',
        { style: { zIndex: zIndex }, className: 'window' + (this.props.isProject ? ' window--project' : ' window--popup') + (isSelectedProject ? ' window--selected' : ''), ref: function ref(window) {
            _this3.openWindow = window;
          } },
        _react2.default.createElement(_windowtitle2.default, _extends({}, item, { onClick: function onClick() {
            return _this3.props.onCloseClick(item.title);
          } })),
        this.props.isProject ? _react2.default.createElement(_project2.default, item) : _react2.default.createElement(_popup2.default, _extends({}, item, { onClick: function onClick() {
            return _this3.props.onCloseClick(item.title);
          }, selectedProject: this.props.selectedProject }))
      );
    }
  }, {
    key: 'renderResizable',
    value: function renderResizable() {
      var _this4 = this;

      var _props2 = this.props,
          item = _props2.item,
          zIndex = _props2.zIndex;

      return _react2.default.createElement(
        _reactResizable.Resizable,
        { height: this.state.height, width: this.state.width, lockAspectRatio: true, minConstraints: [500, 389], maxConstraints: [this.state.availableWidth, this.state.availableHeight], onResize: this.onResize },
        _react2.default.createElement(
          'div',
          { style: { zIndex: zIndex, width: this.state.width + 'px', 'maxWidth': this.state.availableWidth + 'px', 'maxHeight': this.state.availableHeight + 'px' }, className: 'window window--project', ref: function ref(window) {
              _this4.openWindow = window;
            } },
          _react2.default.createElement(_windowtitle2.default, _extends({}, item, { onClick: function onClick() {
              return _this4.props.onCloseClick(item.title);
            } })),
          _react2.default.createElement(_project2.default, item)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.isDesktop ? this.renderDraggable() : this.renderFixedSize();
    }
  }]);

  return Window;
}(_react2.default.Component);

// export default Window;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(ProjectActions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Window);