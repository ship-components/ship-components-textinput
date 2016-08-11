(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodeHeight = __webpack_require__(1);
	
	var _nodeHeight2 = _interopRequireDefault(_nodeHeight);
	
	var _textInput = __webpack_require__(2);
	
	var _textInput2 = _interopRequireDefault(_textInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextInput = function (_React$Component) {
	  _inherits(TextInput, _React$Component);
	
	  function TextInput(props) {
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).call(this, props));
	
	    _this.state = {
	      focus: false,
	      height: null,
	      minHeight: -Infinity,
	      maxHeight: Infinity
	    };
	
	    _this.calculateHeight = _this.calculateHeight.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    return _this;
	  }
	
	  _createClass(TextInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.calculateHeight();
	      window.addEventListener('resize', this.calculateHeight);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      // Render the content and then update the state/height
	      clearTimeout(this.updateId);
	      this.updateId = setTimeout(this.calculateHeight, 0);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.updateId);
	      window.removeEventListener('resize', this.calculateHeight);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(event) {
	      if (!this.props.editable) {
	        return;
	      }
	      this.setState({
	        focus: true
	      });
	      if (this.props.onFocus) {
	        this.props.onFocus(event);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(event) {
	      this.setState({
	        focus: false
	      });
	      if (this.props.onBlur) {
	        this.props.onBlur(event);
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.calculateHeight();
	
	      if (this.props.onChange) {
	        this.props.onChange(event);
	      }
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(event) {
	      if (event.key === 'Enter' || event.keyCode === 13) {
	        event.preventDefault();
	      }
	      if (this.props.onKeyDown) {
	        this.props.onKeyDown(event);
	      }
	    }
	
	    /**
	     * Calculate the height of the node and update the state
	     */
	
	  }, {
	    key: 'calculateHeight',
	    value: function calculateHeight() {
	      var state = (0, _nodeHeight2.default)(this.refs.input, this.props.minRows, this.props.maxRows);
	      this.setState(state);
	    }
	
	    /**
	    * Get css class names for the component for it's different states
	    * @return {String}
	    */
	
	  }, {
	    key: 'classNames',
	    value: function classNames() {
	      var classes = ['text-input', _textInput2.default.container, this.props.className];
	
	      var value = this.props.value || this.props.defaultValue;
	      var valueIsNotEmpty = value && value.length > 0;
	
	      if (this.state.focus || valueIsNotEmpty) {
	        classes.push(_textInput2.default.active);
	      }
	
	      if (this.state.focus) {
	        classes.push(_textInput2.default.focus);
	      }
	
	      if (this.props.label) {
	        classes.push(_textInput2.default.hasLabel);
	      }
	
	      if (valueIsNotEmpty && typeof this.props.validate === 'function') {
	        if (this.validate(this.props.value)) {
	          classes.push(_textInput2.default.success);
	        } else {
	          classes.push(_textInput2.default.error);
	        }
	      }
	
	      return classes.filter(function (cla) {
	        return typeof cla === 'string' && cla.length;
	      }).join(' ').trim();
	    }
	
	    /**
	     * If we have a validate function call it
	     * @param  {Mixed} value
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'validate',
	    value: function validate(value) {
	      if (typeof this.props.validate !== 'function') {
	        return true;
	      }
	      return this.props.validate(value);
	    }
	
	    /**
	     * Render
	     * @return {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var styles = { props: props };
	
	      styles.height = this.state.height;
	
	      var maxHeight = Math.max(styles.maxHeight ? styles.maxHeight : -Infinity, this.state.maxHeight);
	
	      // Hide scrollbar if we don't need it
	      if (maxHeight >= this.state.height) {
	        styles.overflow = 'hidden';
	      } else {
	        styles.overflow = 'auto';
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: this.classNames() },
	        _react2.default.createElement('textarea', _extends({}, props, {
	          className: 'text-input--field ' + _textInput2.default.field,
	          ref: 'input',
	          disabled: !this.props.editable,
	          style: styles,
	          value: this.props.value,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onChange: this.handleChange,
	          onKeyDown: this.handleKeyDown })),
	        this.props.label ? _react2.default.createElement(
	          'label',
	          { className: 'text-input--label ' + _textInput2.default.label },
	          this.props.label
	        ) : null
	      );
	    }
	  }]);
	
	  return TextInput;
	}(_react2.default.Component);
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	
	
	exports.default = TextInput;
	TextInput.defaultProps = {
	  editable: true,
	  value: '',
	  label: null
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Stypes to hide the text input
	 * @type {String}
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = nodeHeight;
	var HIDDEN_TEXTAREA_STYLE = '\n  height:0;\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0\n';
	
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	
	/**
	 * Reference to text area we use to calculate the styles
	 */
	var hiddenTextarea = void 0;
	
	function calculateNodeStyling(node) {
	  if (!node) {
	    throw new TypeError('InvalidArgument: missing argument');
	  }
	  var style = window.getComputedStyle(node);
	
	  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
	
	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
	
	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
	
	  var sizingStyle = SIZING_STYLE.map(function (name) {
	    return name + ':' + style.getPropertyValue(name);
	  }).join(';');
	
	  var nodeInfo = {
	    sizingStyle: sizingStyle,
	    paddingSize: paddingSize,
	    borderSize: borderSize,
	    boxSizing: boxSizing
	  };
	
	  return nodeInfo;
	}
	
	function nodeHeight(uiTextNode) {
	  var minRows = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var maxRows = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }
	
	  // Copy all CSS properties that have an impact on the height of the content in
	  // the textbox
	
	  var _calculateNodeStyling = calculateNodeStyling(uiTextNode);
	
	  var paddingSize = _calculateNodeStyling.paddingSize;
	  var borderSize = _calculateNodeStyling.borderSize;
	  var boxSizing = _calculateNodeStyling.boxSizing;
	  var sizingStyle = _calculateNodeStyling.sizingStyle;
	
	  // Need to have the overflow attribute to hide the scrollbar otherwise
	  // text-lines will not calculated properly as the shadow will technically be
	  // narrower for content
	
	  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	  hiddenTextarea.value = uiTextNode.value ? uiTextNode.value : '';
	
	  var result = {
	    minHeight: -Infinity,
	    maxHeight: Infinity,
	    height: hiddenTextarea.scrollHeight
	  };
	
	  if (boxSizing === 'border-box') {
	    // border-box: add border, since height = content + padding + border
	    result.height = result.height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    // remove padding, since height = content
	    result.height = result.height - paddingSize;
	  }
	
	  // measure height of a textarea with a single row
	  hiddenTextarea.value = '';
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	
	  var modifiers = [{
	    fn: 'max',
	    value: maxRows,
	    prop: 'maxHeight'
	  }, {
	    fn: 'min',
	    value: minRows,
	    prop: 'minHeight'
	  }];
	
	  modifiers.filter(function (modifier) {
	    return modifier.value !== null;
	  }).forEach(function (mod) {
	    var rowHeight = singleRowHeight * mod.value;
	    if (boxSizing === 'border-box') {
	      rowHeight = rowHeight + paddingSize + borderSize;
	    }
	    result.height = Math[mod.fn](rowHeight, result.height);
	    result[mod.prop] = rowHeight;
	  });
	
	  return result;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"text-input--container","error":"text-input--error","success":"text-input--success","focus":"text-input--focus","field":"text-input--field","label":"text-input--label","active":"text-input--active","hasLabel":"text-input--hasLabel"};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=TextInput.js.map