webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/Form.tsx":
/*!***************************************!*\
  !*** ./components/molecules/Form.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/Input */ "./components/atoms/Input.tsx");



var _this = undefined,
    _jsxFileName = "/Users/danielmason/projects/side/tray.io/components/molecules/Form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "aovg6p-0"
})(["display:flex;flex-direction:column;border:2px solid black;padding:10px 5px;"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Form__StyledButton",
  componentId: "aovg6p-1"
})(["display:inline-block;color:white;font-weight:bold;background:green;margin-left:auto;border:2px solid black;box-shadow:2px 2px 2px black;"]);

var Form = function Form(_ref) {
  var inputs = _ref.inputs,
      onSubmit = _ref.onSubmit;
  var formRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var onSubmitWrapper = function onSubmitWrapper(e) {
    if (formRef.current) {
      var inputDomElements = formRef.current.getElementsByTagName('input');
      var output = Array.from(inputDomElements).reduce(function (acc, cur) {
        switch (cur.type) {
          case 'checkbox':
            return _objectSpread({}, acc, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cur.name, cur.checked));
        }

        return _objectSpread({}, acc, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cur.name, cur.value));
      }, {});
      onSubmit(output);
    }

    e.preventDefault();
    return false;
  };

  return __jsx(StyledForm, {
    onSubmit: onSubmitWrapper,
    ref: formRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, inputs.map(function (input) {
    return __jsx(_atoms_Input__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
      key: input.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 30
      }
    }));
  }), __jsx(StyledButton, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Submit"));
};

Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.e4f82e67857e0a2c66d0.hot-update.js.map