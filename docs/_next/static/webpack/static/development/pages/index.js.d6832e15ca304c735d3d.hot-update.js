webpackHotUpdate("static/development/pages/index.js",{

/***/ "./content/forms.ts":
/*!**************************!*\
  !*** ./content/forms.ts ***!
  \**************************/
/*! exports provided: userInputs, privacyInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInputs", function() { return userInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privacyInputs", function() { return privacyInputs; });
/* harmony import */ var _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/atoms/Input */ "./components/atoms/Input.tsx");

var userInputs = [{
  name: 'name',
  label: 'name:',
  required: true,
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Text
}, {
  name: 'role',
  label: 'role:',
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Text
}, {
  name: 'email',
  label: 'email:',
  required: true,
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Email
}, {
  name: 'password',
  label: 'password:',
  required: true,
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Password,
  pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{9,}'
}];
var privacyInputs = [{
  name: 'updates',
  label: 'Receive updates about Tray.io by email',
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Checkbox
}, {
  name: 'communications',
  label: 'Receive communication by email for other products created by the Tray.io team',
  type: _components_atoms_Input__WEBPACK_IMPORTED_MODULE_0__["InputType"].Checkbox
}];

/***/ })

})
//# sourceMappingURL=index.js.d6832e15ca304c735d3d.hot-update.js.map