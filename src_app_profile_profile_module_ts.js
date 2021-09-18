(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: "",
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService/user.service */ 2993);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 1628);









let ProfilePage = class ProfilePage {
    constructor(http, userService, alertController, router, storage) {
        this.http = http;
        this.userService = userService;
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        this.getDetails();
    }
    /**
     * Get the details of the User through an API call
     */
    getDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const userDetails = yield this.userService.obtainUserDetails();
            this.firstName = userDetails["firstName"];
            this.lastName = userDetails["lastName"];
            this.birthDate = userDetails["dateOfBirth"];
            if (this.birthDate != null) {
                this.birthDate = this.birthDate.substring(0, 10);
            }
            this.email = userDetails["email"];
            this.accountType = userDetails["userType"];
        });
    }
    /**
     * Change form to allow editing of details
     */
    editDetails() {
        const userInputs = document.getElementsByClassName("enable-input");
        for (let i = 0; i < userInputs.length; i++) {
            userInputs[i].setAttribute("disabled", "false");
        }
        const editBtn = document.getElementById("editBtn");
        editBtn.style.display = "none";
        const updateBtn = document.getElementById("updateBtn");
        updateBtn.style.display = "block";
        updateBtn.setAttribute("disabled", "false");
        const cancelBtn = document.getElementById("cancelBtn");
        cancelBtn.style.display = "block";
        cancelBtn.setAttribute("disabled", "false");
    }
    /**
     * Send request to update details of User
     */
    updateDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const userInputs = document.getElementsByClassName("enable-input");
            for (let i = 0; i < userInputs.length; i++) {
                userInputs[i].setAttribute("disabled", "true");
            }
            const editBtn = document.getElementById("editBtn");
            editBtn.style.display = "block";
            const updateBtn = document.getElementById("updateBtn");
            updateBtn.style.display = "none";
            updateBtn.setAttribute("disabled", "true");
            const cancelBtn = document.getElementById("cancelBtn");
            cancelBtn.style.display = "none";
            cancelBtn.setAttribute("disabled", "false");
            const status = yield this.userService.attemptUpdateUserDetails(this.firstName, this.lastName, this.birthDate);
            if (status === 200) {
                // Success State
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Updated details.",
                    message: "Your account details have updated successfully.",
                    buttons: ["OK"]
                });
                yield this.presentAlert(alert);
            }
            else if (status === 401) {
                // Invalid Sign In
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Unauthorized User",
                    message: "You are not authorized to update these details.",
                    buttons: ["OK"]
                });
                yield this.presentAlert(alert);
            }
            else {
                // Server Error
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Server isn't responding",
                    message: "Unable to update details due to server, please try again later.",
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
            }
            this.reloadWindow();
            return status;
        });
    }
    /**
     * Cancel Update Operation
     */
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const userInputs = document.getElementsByClassName("enable-input");
            for (let i = 0; i < userInputs.length; i++) {
                userInputs[i].setAttribute("disabled", "true");
            }
            const editBtn = document.getElementById("editBtn");
            editBtn.style.display = "block";
            const updateBtn = document.getElementById("updateBtn");
            updateBtn.style.display = "none";
            updateBtn.setAttribute("disabled", "true");
            const cancelBtn = document.getElementById("cancelBtn");
            cancelBtn.style.display = "none";
            cancelBtn.setAttribute("disabled", "false");
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
    reloadWindow() {
        window.location.reload();
    }
    goToFYP() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/your-workouts"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    goToSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/search"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    goToClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/client-list"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove("Token");
            yield this.router.navigate(["/sign-in"])
                .then(() => {
                window.location.reload();
            });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _Services_UserService_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".your-workout-background {\n  --background: var(--ion-off-white);\n}\n\n.Spacing-div {\n  display: block;\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n}\n\n.profileHeader {\n  display: inline-flex;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"SF Pro Medium\", serif;\n  --color: var(--ion-color-tertiary);\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.signOutItem {\n  display: inline-flex;\n  left: 30%;\n}\n\n.profile-label {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.profile-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  width: var(--input-width);\n  border-radius: var(--radius);\n  --background: var(--ion-off-white);\n  --padding-start: 10px;\n  --padding-top: 15px;\n  text-indent: 1px;\n  --color: black;\n}\n\n.input-div {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n#editBtn, #updateBtn, #cancelBtn {\n  display: block;\n  --background: none;\n  --color: var(--ion-color-tertiary);\n  --background-hover: none;\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n}\n\n#updateBtn, #cancelBtn {\n  display: none;\n}\n\n.container {\n  align-content: center;\n  align-items: center;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  padding-top: 10px;\n}\n\n.navThumbnail {\n  display: block;\n  float: left;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n}\n\n.NavButtons {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.NavLabel {\n  display: block;\n  float: left;\n  font-size: 15px;\n  margin-left: 45%;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 400px) {\n  .Spacing-div {\n    width: 350px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .NavLabel {\n    margin-left: 25%;\n  }\n\n  .profile-input {\n    width: 280px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBSkY7O0VBT0E7SUFDRSxnQkFBQTtFQUpGOztFQU1BO0lBQ0UsWUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91ci13b3Jrb3V0LWJhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG59XG5cbi5TcGFjaW5nLWRpdntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnByb2ZpbGVIZWFkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2lnbk91dEl0ZW17XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsZWZ0OiAzMCU7XG59XG5cbi5wcm9maWxlLWxhYmVse1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ucHJvZmlsZS1pbnB1dHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiB2YXIoLS1pbnB1dC13aWR0aCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgdGV4dC1pbmRlbnQ6IDFweDtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cblxuLmlucHV0LWRpdntcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogdmFyKC0taW5wdXQtd2lkdGgpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jZWRpdEJ0biwgI3VwZGF0ZUJ0biwgI2NhbmNlbEJ0bntcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG59XG5cbiN1cGRhdGVCdG4sICNjYW5jZWxCdG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWluZXJ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlcntcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLy9ib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktcmFkaXVzKTtcbiAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAvL21hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5uYXZUaHVtYm5haWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDI1JTtcbn1cblxuLk5hdkJ1dHRvbnN7XG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG59XG5cbi5OYXZMYWJlbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gIC5TcGFjaW5nLWRpdntcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLk5hdkxhYmVse1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLnByb2ZpbGUtaW5wdXR7XG4gICAgd2lkdGg6IDI4MHB4O1xuICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"your-workout-background\">\n  <div class=\"container\">\n    <div class=\"Spacing-div\">\n      <ion-card mode=\"ios\">\n        <ion-card-header>\n          <ion-card-title class=\"profileHeader\">Profile</ion-card-title>\n          <ion-item mode=\"ios\" button=\"true\" class=\"signOutItem\" lines=\"none\" (click)=\"signOut()\">\n            <ion-label>Sign out</ion-label>\n            <ion-icon name=\"power\" size=\"small\"></ion-icon>\n          </ion-item>\n\n        </ion-card-header>\n        <ion-card-content class=\"profileContent\">\n          <!--Will put avatar/image here but for now leaving it blank-->\n          <div class=\"input-div\">\n            <ion-label class=\"profile-label\">First Name</ion-label>\n            <ion-input [(ngModel)]=\"firstName\" class=\"profile-input enable-input\" type=\"text\" disabled=\"true\"></ion-input>\n          </div>\n          <div class=\"input-div\">\n            <ion-label class=\"profile-label\">Last Name</ion-label>\n            <ion-input [(ngModel)]=\"lastName\" class=\"profile-input enable-input\" type=\"text\" disabled=\"true\"></ion-input>\n          </div>\n          <div class=\"input-div\">\n            <ion-label class=\"profile-label\">Birth Date</ion-label>\n            <ion-input [(ngModel)]=\"birthDate\" class=\"profile-input enable-input\" type=\"date\" disabled=\"true\"></ion-input>\n          </div>\n          <div class=\"input-div\">\n            <ion-label class=\"profile-label\">Email</ion-label>\n            <ion-input [(ngModel)]=\"email\" class=\"profile-input\" type=\"email\" disabled=\"true\"></ion-input>\n          </div>\n          <div class=\"input-div\">\n            <ion-label class=\"profile-label\">Account Type</ion-label>\n            <ion-input [(ngModel)]=\"accountType\" class=\"profile-input\" type=\"text\" disabled=\"true\"></ion-input>\n          </div>\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"editDetails()\" size=\"medium\" slot=\"start\" mode=\"ios\" id=\"editBtn\">\n              Edit\n            </ion-button>\n            <ion-button (click)=\"updateDetails()\" size=\"medium\" slot=\"end\" mode=\"ios\" id=\"updateBtn\" disabled=\"true\">\n              Update\n            </ion-button>\n            <ion-button (click)=\"cancel()\" size=\"medium\" slot=\"start\" mode=\"ios\" id=\"cancelBtn\" disabled=\"true\">\n              Cancel\n            </ion-button>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n<ion-tab-bar mode=\"md\" slot=\"bottom\">\n  <ion-tab-button (click)=\"goToFYP()\">\n    <ion-label>Workouts</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clipboard.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToSearch()\">\n    <ion-label>Exercises</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Library.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToClients()\">\n    <ion-label>Clients</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clients.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button>\n    <ion-label>Settings</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Setting_activated.svg\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map