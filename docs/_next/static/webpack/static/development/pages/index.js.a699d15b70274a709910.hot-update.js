webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_molecules_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/Form */ "./components/molecules/Form.tsx");
/* harmony import */ var _content_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/forms */ "./content/forms.ts");
/* harmony import */ var _components_atoms_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Tab */ "./components/atoms/Tab.ts");
/* harmony import */ var _components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/molecules/Tabs */ "./components/molecules/Tabs.ts");
/* harmony import */ var _components_css_Reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/css/Reset */ "./components/css/Reset.ts");
/* harmony import */ var _components_molecules_DoneInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/molecules/DoneInfo */ "./components/molecules/DoneInfo.tsx");
var _this = undefined,
    _jsxFileName = "/Users/danielmason/projects/side/tray.io/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Page = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Page",
  componentId: "bb1ci6-0"
})(["max-width:400px;padding:10px;"]);
var SelectedTab;

(function (SelectedTab) {
  SelectedTab[SelectedTab["User"] = 0] = "User";
  SelectedTab[SelectedTab["Privacy"] = 1] = "Privacy";
  SelectedTab[SelectedTab["Done"] = 2] = "Done";
})(SelectedTab || (SelectedTab = {}));

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      userData = _useState[0],
      setUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      privacyData = _useState2[0],
      setPrivacyData = _useState2[1];

  var selectedTab = privacyData && SelectedTab.Done || userData && SelectedTab.Privacy || SelectedTab.User;
  var isUserPage = selectedTab === SelectedTab.User;
  var isPrivacyPage = selectedTab === SelectedTab.Privacy;
  var isDonePage = selectedTab === SelectedTab.Done;

  if (isUserPage) {}

  return __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_components_css_Reset__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_components_molecules_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selected: isUserPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "User"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selected: isPrivacyPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Privacy"), __jsx(_components_atoms_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selected: isDonePage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Done")), isUserPage && __jsx(_components_molecules_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inputs: _content_forms__WEBPACK_IMPORTED_MODULE_3__["userInputs"],
    onSubmit: setUserData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 22
    }
  }), isPrivacyPage && __jsx(_components_molecules_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    inputs: _content_forms__WEBPACK_IMPORTED_MODULE_3__["privacyInputs"],
    onSubmit: setPrivacyData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }), isDonePage && __jsx(_components_molecules_DoneInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 22
    }
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.a699d15b70274a709910.hot-update.js.map