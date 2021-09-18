(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["default-src_app_sign-in_sign-in_page_ts-src_app_sign-up_sign-up_page_ts"],{

/***/ 7284:
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-in.page.html */ 8521);
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss */ 5942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService/user.service */ 2993);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 1952);









let SignInPage = class SignInPage {
    constructor(http, route, alertController, userService) {
        this.http = http;
        this.route = route;
        this.alertController = alertController;
        this.userService = userService;
        this.userData = {};
        this.provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();
    }
    ngOnInit() {
    }
    /** This function uses the email and password entered to attempt a sign in through the User service.
     * The User service will return the status of the login:
     * 200 -> Success
     * 400 -> Incorrect Credentials
     * 500 -> Server not responding
     *
     * Error states [400,500] will result in an alert
     * Success states [200] will result in a logged in User being navigated to the logged in User's homescreen.
     */
    signIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const status = yield this.userService.attemptSignIn(this.email, this.password);
            if (status < 400) {
                // Success State
                yield this.route.navigate(["/your-workouts"]);
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Sign In
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Incorrect login",
                    message: "Either your password or email is incorrect.",
                    buttons: ["OK"]
                });
                yield this.presentAlert(alert);
                throw new Error("User credentials are incorrect.");
            }
            else {
                // Server Error
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Server isn't responding",
                    message: "Please try again later.",
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
                throw new Error("Server is not responding.");
            }
        });
    }
    googleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.userService.attemptGoogleLogin();
            if (res < 400) {
                // Success State
                yield this.route.navigate(["/your-workouts"]);
                return 200;
            }
            else if (res["status"] >= 400 && res["status"] < 500) {
                // Invalid Sign In
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Incorrect login",
                    message: res["message"],
                    buttons: ["OK"]
                });
                yield this.presentAlert(alert);
                throw new Error("User error.");
            }
            else {
                // Server Error
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Server isn't responding",
                    message: res["message"],
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
                throw new Error("Server is not responding.");
            }
        });
    }
    /**
     * Helper Function to physically present alert to User independent of OS.
     *
     * @param alert
     */
    presentAlert(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-sign-in",
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignInPage);



/***/ }),

/***/ 80:
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 5093);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 7200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService/user.service */ 2993);








let SignUpPage = class SignUpPage {
    constructor(http, route, alertController, userService) {
        this.http = http;
        this.route = route;
        this.alertController = alertController;
        this.userService = userService;
        this.accountType = "PLANNER";
    }
    ngOnInit() {
    }
    /**
     * Function to be called upon button onClick to signUp
     * where a user's details will be obtained from the input fields
     * then processed through the userService's attemptSignUp function,
     * from there the attemptSignUp will return a response code based on the success of the sign up
     * and from that code we return a human understandable message.
     *
     * @author Jia Hui Wang, u18080449
     */
    signUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.password === this.confirmpassword) {
                const status = yield this.userService.attemptSignUp(this.firstName, this.lastName, this.email, this.password, this.accountType);
                if (status < 400 && status >= 200) {
                    const alert = yield this.alertController.create({
                        cssClass: "kenzo-alert",
                        header: "Sign up successful",
                        message: "Your account has been registered successfully.",
                        buttons: ["OK"]
                    });
                    yield this.presentAlert(alert);
                    yield this.route.navigate(["/sign-in"]);
                    return 200;
                }
                else if (status >= 400 && status < 500) {
                    //Invalid entry or already existent client email
                    const alert = yield this.alertController.create({
                        cssClass: "kenzo-alert",
                        header: "Incorrect Signup",
                        message: "Your details are invalid or an account with the email already exists.",
                        buttons: ["OK"]
                    });
                    yield this.presentAlert(alert);
                    return new Error("User credentials are incorrect.");
                }
                else if (status >= 500) {
                    const alert = yield this.alertController.create({
                        cssClass: "kenzo-alert",
                        header: "Server isn't responding",
                        message: "Please try again later.",
                        buttons: ["Dismiss"]
                    });
                    yield this.presentAlert(alert);
                    return new Error("Server is not responding.");
                }
            }
            else {
                yield this.invalidPasswords(); //If passwords do not match, notify User through an alert.
            }
        });
    }
    /**
     * Helper function to be called if both passwords do not match.
     *
     * @author Jia Hui Wang, u18080449
     */
    invalidPasswords() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "kenzo-alert",
                header: "Invalid Passwords",
                message: "Your passwords do not match. Please try again.",
                buttons: ["OK"]
            });
            yield this.presentAlert(alert);
        });
    }
    /**
     * Helper function to physically present alert to User independent of OS.
     *
     * @author Jia Hui Wang, u18080449
     */
    presentAlert(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-sign-up",
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpPage);



/***/ }),

/***/ 5942:
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sign-in-background {\n  --background: var(--ion-color-primary);\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n}\n\n.input-div {\n  display: block;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.input-description {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n}\n\n.kenzo-logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10vh;\n  width: 300px;\n}\n\n.send-req-button {\n  display: block;\n  font-family: \"SF Pro Regular\", serif;\n  width: var(--button-width);\n  margin-left: auto;\n  margin-right: auto;\n  --background: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n}\n\n.text-link {\n  width: var(--text-width);\n  display: block;\n  font-family: \"SF Pro Regular\", serif;\n  color: white;\n  text-decoration: none;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  --background-activated: var(--ion-color-primary);\n  --color-activated: var(--ion-color-tertiary);\n  --background-hover: var(--ion-color-primary);\n  --color-hover: var(--ion-color-tertiary);\n}\n\n.sign-in-with {\n  display: block;\n  width: var(--card-width);\n  height: var(--card-height);\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 30px;\n}\n\n.sign-in-with-text {\n  text-align: center;\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  margin: 10px auto;\n  color: var(--ion-color-tertiary);\n}\n\n.img-container {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 82px;\n}\n\n.sign-in-with-img {\n  display: inline-block;\n  height: 41px;\n  width: 41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1iYWNrZ3JvdW5ke1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmtlbnpvLWlucHV0e1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmlucHV0LWRpdntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlucHV0LWRlc2NyaXB0aW9ue1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5rZW56by1sb2dve1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc2VuZC1yZXEtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGV4dC1saW5re1xuICB3aWR0aDogdmFyKC0tdGV4dC13aWR0aCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5zaWduLWluLXdpdGh7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5zaWduLWluLXdpdGgtdGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5pbWctY29udGFpbmVye1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgycHg7XG59XG4uc2lnbi1pbi13aXRoLWltZ3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDQxcHg7XG4gIHdpZHRoOiA0MXB4O1xufVxuIl19 */");

/***/ }),

/***/ 7200:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sign-up-background {\n  --background: var(--ion-color-primary);\n}\n\n.sign-up-label {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n}\n\n.sign-up-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: var(--radius);\n  --background: var(--ion-color-secondary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n  text-indent: 1px;\n  --color: black;\n}\n\n.input-div {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#Sign-up-Kenzo-Logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100vw;\n  height: 18vh;\n}\n\n.kenzo-logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10vh;\n  width: 300px;\n}\n\n#SignUpButton {\n  display: block;\n  font-family: \"SF Pro Regular\", serif;\n  width: var(--button-width);\n  margin-left: auto;\n  margin-right: auto;\n  --background: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n}\n\na {\n  font-family: \"SF Pro Regular\", serif;\n  width: var(--text-width);\n  display: block;\n  margin-left: auto;\n  margin-top: 30px;\n  margin-right: auto;\n  text-align: center;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-secondary);\n  --background-hover: var(--ion-color-primary);\n  --color-hover: var(--ion-color-tertiary);\n  text-decoration: none;\n}\n\n.container {\n  align-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7QUFDSjs7QUFDQTtFQUNJLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7QUFJRjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNENBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBSUoiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cC1iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnNpZ24tdXAtbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnNpZ24tdXAtaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgICB0ZXh0LWluZGVudDogMXB4O1xuICAgIC0tY29sb3I6IGJsYWNrO1xufVxuLmlucHV0LWRpdntcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogdmFyKC0taW5wdXQtd2lkdGgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI1NpZ24tdXAtS2Vuem8tTG9nb3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6MTAwdnc7XG4gICAgaGVpZ2h0OjE4dmg7XG59XG5cbi5rZW56by1sb2dve1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4jU2lnblVwQnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5he1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSZWd1bGFyXCIsIHNlcmlmO1xuICAgIHdpZHRoOiB2YXIoLS10ZXh0LXdpZHRoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 8521:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"sign-in-background\">\n  <ion-img class=\"kenzo-logo\" src=\"./assets/kenzo/Kenzo_logo.png\" alt=\"Kenzo\"></ion-img>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Email</ion-label>\n    <ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"your@email.com\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Password</ion-label>\n    <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"***********\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <ion-button (click)=\"signIn()\" mode=\"ios\" class=\"send-req-button\">Sign in</ion-button>\n  <br>\n  <a routerLink=\"/sign-up\" mode=\"ios\" class=\"text-link\">Don't have an account? Sign up</a>\n\n  <ion-card class=\"sign-in-with\">\n      <ion-label class=\"sign-in-with-text\"> Or sign in with:</ion-label>\n      <div class=\"img-container\">\n        <ion-img class=\"sign-in-with-img\" src=\"./assets/google/btn_google_light_normal_ios@2x.png\" alt=\"Kenzo\" (click)=\"googleSignIn()\"></ion-img>\n      </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 5093:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"sign-up-background\">\n<div class=\"container\">\n  <ion-img id=\"Sign-up-Kenzo-Logo\" src=\"./assets/kenzo/Kenzo_logo.png\" alt=\"Kenzo\"></ion-img>\n  <div class=\"input-div\">\n    <ion-label class=\"sign-up-label\" >First Name</ion-label>\n    <ion-input [(ngModel)]=\"firstName\" class=\"sign-up-input\" placeholder=\" Steve\" type=\"text\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"sign-up-label\" >Last Name</ion-label>\n    <ion-input [(ngModel)]=\"lastName\" class=\"sign-up-input\" placeholder=\" Jobs\" type=\"text\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"sign-up-label\" >Email</ion-label>\n    <ion-input [(ngModel)]=\"email\" class=\"sign-up-input\" placeholder=\" your@email.com\" type=\"email\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"sign-up-label\" >Password</ion-label>\n    <ion-input [(ngModel)]=\"password\" class=\"sign-up-input\" placeholder=\"  ***********\" type=\"password\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"sign-up-label\" >Confirm Password</ion-label>\n    <ion-input [(ngModel)]=\"confirmpassword\" class=\"sign-up-input\" placeholder=\"  ***********\" type=\"password\"></ion-input>\n  </div>\n  <br>\n    <ion-button (click)=\"signUp()\" mode=\"ios\" id=\"SignUpButton\" expand=\"block\">Sign up</ion-button>\n    <a routerLink=\"/sign-in\">Already have an account? Sign in</a>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_sign-in_sign-in_page_ts-src_app_sign-up_sign-up_page_ts.js.map