(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_modal-popup_modal-popup_module_ts"],{

/***/ 892:
/*!***********************************************************!*\
  !*** ./src/app/modal-popup/modal-popup-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupPageRoutingModule": () => (/* binding */ ModalPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popup.page */ 3041);




const routes = [
    {
        path: "",
        component: _modal_popup_page__WEBPACK_IMPORTED_MODULE_0__.ModalPopupPage
    }
];
let ModalPopupPageRoutingModule = class ModalPopupPageRoutingModule {
};
ModalPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPopupPageRoutingModule);



/***/ }),

/***/ 2112:
/*!***************************************************!*\
  !*** ./src/app/modal-popup/modal-popup.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupPageModule": () => (/* binding */ ModalPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popup-routing.module */ 892);
/* harmony import */ var _modal_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-popup.page */ 3041);







let ModalPopupPageModule = class ModalPopupPageModule {
};
ModalPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPopupPageRoutingModule
        ],
        declarations: [_modal_popup_page__WEBPACK_IMPORTED_MODULE_1__.ModalPopupPage]
    })
], ModalPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modal-popup_modal-popup_module_ts.js.map