webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/Input.tsx":
/*!************************************!*\
  !*** ./components/atoms/Input.tsx ***!
  \************************************/
/*! exports provided: InputType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/danielmason/projects/side/tray.io/components/atoms/Input.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var InputType;

(function (InputType) {
  InputType["Button"] = "button";
  InputType["Checkbox"] = "checkbox";
  InputType["Color"] = "color";
  InputType["Date"] = "date";
  InputType["DatetimeLocal"] = "datetime-local";
  InputType["Email"] = "email";
  InputType["File"] = "file";
  InputType["Hidden"] = "hidden";
  InputType["Image"] = "image";
  InputType["Month"] = "month";
  InputType["Number"] = "number";
  InputType["Password"] = "password";
  InputType["Radio"] = "radio";
  InputType["Range"] = "range";
  InputType["Reset"] = "reset";
  InputType["Search"] = "search";
  InputType["Submit"] = "submit";
  InputType["Tel"] = "tel";
  InputType["Text"] = "text";
  InputType["Time"] = "time";
  InputType["Url"] = "url";
  InputType["Week"] = "week";
})(InputType || (InputType = {}));

var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "Input__StyledLabel",
  componentId: "sc-19xe2hi-0"
})(["display:flex;padding:4px 0;flex-direction:", ";justify-content:", ";input{display:block;border:2px solid black;flex-grow:", ";}span::after{display:", ";content:' *';color:red;}"], function (_ref) {
  var type = _ref.type;
  return type === InputType.Checkbox ? 'row-reverse' : 'column';
}, function (_ref2) {
  var type = _ref2.type;
  return type === InputType.Checkbox ? 'flex-end' : 'flex-start';
}, function (_ref3) {
  var type = _ref3.type;
  return type === InputType.Checkbox ? 0 : 1;
}, function (_ref4) {
  var required = _ref4.required;
  return required ? 'inline' : 'none';
});
var idCounter = 0;

var Input = function Input(props) {
  var type = props.type,
      name = props.name,
      required = props.required,
      value = props.value,
      label = props.label,
      pattern = props.pattern;
  var id = "input-".concat(name, "-").concat(idCounter += 1);
  return __jsx(StyledLabel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFor: id
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, label), __jsx("input", {
    id: id,
    type: type,
    name: name,
    required: required || false,
    defaultValue: value,
    pattern: pattern,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }));
};

Input.displayName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.1570bff1616f72900a14.hot-update.js.map