webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_molecules_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/molecules/Form */ "./components/molecules/Form.tsx");
/* harmony import */ var _content_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/forms */ "./content/forms.ts");
/* harmony import */ var _components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms/Tab */ "./components/atoms/Tab.ts");
/* harmony import */ var _components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/molecules/Tabs */ "./components/molecules/Tabs.ts");
/* harmony import */ var _components_css_Reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/css/Reset */ "./components/css/Reset.ts");
/* harmony import */ var _components_molecules_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/molecules/DoneInfo */ "./components/molecules/Done.tsx");


var _this = undefined,
    _jsxFileName = "/Users/danielmason/projects/side/tray.io/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Page = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Page",
  componentId: "bb1ci6-0"
})(["max-width:400px;padding:10px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      formData = _useState[0],
      setFormData = _useState[1];

  var onSubmit = function onSubmit(updatedFormData) {
    console.log(updatedFormData);
    setFormData(_objectSpread({}, formData, {}, updatedFormData));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_components_css_Reset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "User"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Privacy"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Done")), __jsx(_components_molecules_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputs: _content_forms__WEBPACK_IMPORTED_MODULE_4__["userInputs"],
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "User"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Privacy"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Done")), __jsx(_components_molecules_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    inputs: _content_forms__WEBPACK_IMPORTED_MODULE_4__["privacyInputs"],
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "User"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Privacy"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Done")), __jsx(_components_molecules_Done__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.f10670d7db74f35da296.hot-update.js.map
