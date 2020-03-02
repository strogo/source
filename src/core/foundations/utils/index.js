'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var TAB_KEY_CODE = 9;
/**
 * Source: Blueprint https://blueprintjs.com/
 * https://github.com/palantir/blueprint/blob/06a186c90758bbdca604ed6d7bf639c3d05b1fa0/packages/core/src/common/interactionMode.ts
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 * Requires @babel/plugin-proposal-class-properties
 */

var InteractionModeEngine =
/*#__PURE__*/
function () {
  // tslint:disable-next-line:no-constructor-vars
  function InteractionModeEngine(container, className) {
    var _this = this;

    _classCallCheck(this, InteractionModeEngine);

    this.container = container;
    this.className = className;

    _defineProperty(this, "isRunning", false);

    _defineProperty(this, "handleKeyDown", function (e) {
      if (e.which === TAB_KEY_CODE) {
        _this.reset();

        _this.container.addEventListener("mousedown", _this.handleMouseDown);
      }
    });

    _defineProperty(this, "handleMouseDown", function () {
      _this.reset();

      _this.container.classList.add(_this.className);

      _this.container.addEventListener("keydown", _this.handleKeyDown);
    });
  }
  /** Returns whether the engine is currently running. */


  _createClass(InteractionModeEngine, [{
    key: "isActive",
    value: function isActive() {
      return this.isRunning;
    }
    /** Enable behavior which applies the given className when in mouse mode. */

  }, {
    key: "start",
    value: function start() {
      this.container.addEventListener("mousedown", this.handleMouseDown);
      this.isRunning = true;
    }
    /** Disable interaction mode behavior and remove className from container. */

  }, {
    key: "stop",
    value: function stop() {
      this.reset();
      this.isRunning = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.container.classList.remove(this.className);
      this.container.removeEventListener("keydown", this.handleKeyDown);
      this.container.removeEventListener("mousedown", this.handleMouseDown);
    }
  }]);

  return InteractionModeEngine;
}();
var FOCUS_DISABLED = "src-focus-disabled";
var focusEngine = new InteractionModeEngine(document.documentElement, FOCUS_DISABLED);
var FocusStyleManager = {
  alwaysShowFocus: function alwaysShowFocus() {
    return focusEngine.stop();
  },
  isActive: function isActive() {
    return focusEngine.isActive();
  },
  onlyShowFocusOnTabs: function onlyShowFocusOnTabs() {
    return focusEngine.start();
  }
};

exports.FocusStyleManager = FocusStyleManager;
