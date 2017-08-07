"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoControl = function (_React$Component) {
  _inherits(VideoControl, _React$Component);

  function VideoControl() {
    _classCallCheck(this, VideoControl);

    return _possibleConstructorReturn(this, (VideoControl.__proto__ || Object.getPrototypeOf(VideoControl)).apply(this, arguments));
  }

  _createClass(VideoControl, [{
    key: "render",
    value: function render() {
      console.log("isPlaying: " + this.props.isPlaying);
      return _react2.default.createElement(
        "div",
        { id: "controls" },
        _react2.default.createElement(
          "style",
          null,
          '#controls span{float:left; margin-right:20px; border:1px solid #333; padding:5px 15px; cursor:pointer;}'
        ),
        this.props.isPlaying && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Stop') },
            "Stop"
          ),
          _react2.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Pause') },
            "Pause"
          )
        ),
        !this.props.isPlaying && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "span",
            { onClick: this.props.onEvent.bind('Play') },
            _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = VideoControl;