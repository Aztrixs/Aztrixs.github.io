(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_sign-in_sign-in_module_ts"],{

/***/ 3088:
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 7284);
/* harmony import */ var _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sign-up/sign-up.page */ 80);
/* harmony import */ var _your_workouts_your_workouts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../your-workouts/your-workouts.page */ 5777);






const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    },
    {
        path: 'sign-up',
        component: _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage
    },
    {
        path: 'your-workouts',
        component: _your_workouts_your_workouts_page__WEBPACK_IMPORTED_MODULE_2__.YourWorkoutsPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 2831:
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 3088);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 7284);







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage]
    })
], SignInPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_sign-in_sign-in_module_ts.js.map