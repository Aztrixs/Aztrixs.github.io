(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_sign-up_sign-up_module_ts"],{

/***/ 9204:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 80);
/* harmony import */ var _sign_in_sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sign-in/sign-in.page */ 7284);





const routes = [
    {
        path: "",
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    },
    {
        path: "sign-in",
        component: _sign_in_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 3982:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 9204);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 80);







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map