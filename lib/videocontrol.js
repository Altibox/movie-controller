"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("/Users/sjur/Documents/Utvikling/test/videocontrol/node_modules/babel-preset-react-hmre/node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("/Users/sjur/Documents/Utvikling/test/videocontrol/node_modules/babel-preset-react-hmre/node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("/Users/sjur/Documents/Utvikling/test/videocontrol/node_modules/babel-preset-react-hmre/node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  VideoControl: {
    displayName: "VideoControl"
  }
};

var _UsersSjurDocumentsUtviklingTestVideocontrolNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "src/videocontrol.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersSjurDocumentsUtviklingTestVideocontrolNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "src/videocontrol.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersSjurDocumentsUtviklingTestVideocontrolNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersSjurDocumentsUtviklingTestVideocontrolNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var VideoControl = _wrapComponent("VideoControl")(function (_React$Component) {
  _inherits(VideoControl, _React$Component);

  function VideoControl() {
    _classCallCheck(this, VideoControl);

    return _possibleConstructorReturn(this, (VideoControl.__proto__ || Object.getPrototypeOf(VideoControl)).apply(this, arguments));
  }

  _createClass(VideoControl, [{
    key: "render",
    value: function render() {
      console.log("isPlaying: " + this.props.isPlaying);
      return _react3.default.createElement(
        "div",
        { id: "controls" },
        _react3.default.createElement(
          "style",
          null,
          '#controls span{float:left; margin-right:20px; border:1px solid #333; padding:5px 15px; cursor:pointer;}'
        ),
        this.props.isPlaying && _react3.default.createElement(
          "div",
          null,
          _react3.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Stop') },
            "Stop"
          ),
          _react3.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Pause') },
            "Pause"
          )
        ),
        !this.props.isPlaying && _react3.default.createElement(
          "div",
          null,
          _react3.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Play') },
            _react3.default.createElement(
              "i",
              { className: "fa fa-play" },
              "Play"
            )
          )
        )
      );
    }
  }]);

  return VideoControl;
}(_react3.default.Component));

exports.default = VideoControl;