(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_search_search_module_ts"],{

/***/ 9730:
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 5105);




const routes = [
    {
        path: "",
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 4682:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 9730);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 5105);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 5105:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 4173);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 1628);








/**
 * Exercise class to store the information obtained from requests in member array exercises to dynamically populate cards
 *
 * @author Jia Hui Wang, u18080449
 */
class Exercises {
    constructor(exerciseID, title, description, images) {
        this._exerciseID = exerciseID;
        this._title = title;
        this._description = description;
        this._images = images;
    }
    get images() {
        return this._images;
    }
    set images(value) {
        this._images = value;
    }
    get exerciseID() {
        return this._exerciseID;
    }
    set exerciseID(value) {
        this._exerciseID = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
let SearchPage = class SearchPage {
    constructor(http, workoutService, router, storage) {
        this.http = http;
        this.workoutService = workoutService;
        this.router = router;
        this.storage = storage;
        this.exercises = new Array();
        this.exerciseThumbnails = new Array();
        this.src = "";
    }
    ngOnInit() {
        this.loadExercises();
    }
    /**
     * Load all the exercises
     * @author Jia Hui Wang, u18080449
     */
    loadExercises() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const tempExercises = yield this.workoutService.attemptGetExercisesByPlanner();
            if (tempExercises.status === 200) {
                for (let i = 0; i < tempExercises.data.length; i++) {
                    const images = new Array();
                    for (let j = 0; j < tempExercises.data[i].images.length; j++) {
                        if (tempExercises.data[i].images[j] != null) {
                            if (!(tempExercises.data[i].images[j]).includes("data:image/jpeg;base64,")) {
                                tempExercises.data[i].images[j] = "data:image/jpeg;base64," + tempExercises.data[i].images[j];
                            }
                            images.push(tempExercises.data[i].images[j]);
                        }
                    }
                    this.exercises[i] = new Exercises(tempExercises.data[i].exerciseID, tempExercises.data[i].exerciseTitle, tempExercises.data[i].exerciseDescription, images);
                }
                return 200;
            }
            else if (tempExercises.status === 404) {
                return 404;
            }
            else {
                return 500;
            }
        });
    }
    /**
     * eventHandler for the search functionality on the page to filter for specific cards based on the text
     *
     * @param event The onChange when user enters or removes characters to filter the cards
     * @author Jia Hui Wang, u18080449
     */
    eventHandler(event) {
        const text = event.srcElement.value.toLowerCase();
        this.exercises.forEach(data => {
            const currElement = document.getElementById(data.exerciseID);
            if (!(data.title.toLowerCase().includes(text)) && !(data.description.toLowerCase().includes(text))) {
                currElement.style.display = "none";
            }
            else {
                currElement.style.display = "block";
            }
        });
    }
    /**
     * Navigate to the update-exercise page with the respective ID of the selected exercise in order to update the workout.
     *
     * @author Jia Hui Wang, u18080449
     */
    sendExerciseID(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/update-exercise"], {
                state: {
                    id: id
                }
            });
        });
    }
    goToFYP() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/your-workouts"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    goToProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/profile"])
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
};
SearchPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-search",
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 7802:
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".your-exercises-background {\n  --background: var(--ion-off-white);\n}\n\n.Spacing-div {\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n}\n\n#exerciseHeading {\n  font-family: \"SF Pro Medium\", serif;\n  font-size: 25px;\n  color: black;\n  font-weight: bold;\n}\n\n.exercises {\n  transition: border 0.1s;\n  transition-timing-function: linear;\n  width: 300px;\n}\n\n#SearchBarDiv, #ItemsDiv {\n  margin-top: 13px;\n}\n\n#exercise-searchbar {\n  font-family: \"SF Pro Medium\", serif;\n  height: 40px;\n  --placeholder-font-weight: 590;\n  color: #707074;\n  --background: #e7e7e8;\n}\n\n#nav-div {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  align-content: center;\n  align-items: center;\n}\n\n.editBtn {\n  --background: none;\n  --background-hover: none;\n  --color: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n  display: block;\n}\n\n.kenzo-fixed {\n  position: fixed;\n  top: 100px;\n  right: 5px;\n  z-index: 100;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  padding-top: 10px;\n}\n\n.navThumbnail {\n  display: block;\n  float: left;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n}\n\n.NavButtons {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.NavLabel {\n  display: block;\n  float: left;\n  font-size: 15px;\n  margin-left: 45%;\n  margin-right: auto;\n}\n\n.fabButton[data-desc] {\n  position: relative;\n}\n\n.fabButton[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 50px;\n  bottom: 8px;\n  color: var(--ion-color-tertiary);\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-card {\n  cursor: default;\n}\n\nion-card ion-card-header ion-card-title {\n  --color: var(--ion-color-tertiary);\n  overflow-x: hidden;\n}\n\nion-card ion-card-content {\n  margin-top: 10px;\n  color: black;\n}\n\n.imagePose {\n  height: 150px;\n  width: 300px;\n  object-fit: cover;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVVBO0VBWUUsZUFBQTtBQWxCRjs7QUFRSTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVBKOztBQWFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVZGOztBQWFBO0VBQ0UsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsOENBQUE7QUFWRiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlvdXItZXhlcmNpc2VzLWJhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG59XG5cbi5TcGFjaW5nLWRpdntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiB2YXIoLS1pbnB1dC13aWR0aCk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbiNleGVyY2lzZUhlYWRpbmd7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBNZWRpdW1cIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmV4ZXJjaXNlcyB7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbiNTZWFyY2hCYXJEaXYsICNJdGVtc0RpdntcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuI2V4ZXJjaXNlLXNlYXJjaGJhcntcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1OTA7XG4gIGNvbG9yOiAjNzA3MDc0O1xuICAtLWJhY2tncm91bmQ6ICNlN2U3ZTg7XG59XG5cbiNuYXYtZGl2e1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiB2YXIoLS1pbnB1dC13aWR0aCk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXJ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVkaXRCdG57XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5rZW56by1maXhlZHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5mb290ZXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAvL2JvcmRlci1zdHlsZTogc29saWQ7XG4gIC8vYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LXJhZGl1cyk7XG4gIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmF2VGh1bWJuYWlse1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5OYXZCdXR0b25ze1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcblxufVxuXG4uTmF2TGFiZWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5mYWJCdXR0b25bZGF0YS1kZXNjXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZhYkJ1dHRvbltkYXRhLWRlc2NdOjphZnRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBhdHRyKGRhdGEtZGVzYyk7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiA1MHB4O1xuICBib3R0b206IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuXG4udGV4dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tY2FyZHtcbiAgaW9uLWNhcmQtaGVhZGVye1xuICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmltYWdlUG9zZXtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW9uLXNsaWRlc3tcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogbm9uZTtcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItS1RfQkxBQ0spO1xufVxuIl19 */");

/***/ }),

/***/ 4173:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"your-exercises-background\">\n  <div class=\"container\">\n    <div class=\"Spacing-div\">\n      <ion-label id=\"exerciseHeading\">Exercises</ion-label>\n      <div class=\"kenzo-fixed\">\n        <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n          <ion-fab-button>\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"bottom\">\n            <ion-fab-button class=\"fabButton\" data-desc=\"Exercise\">\n              <ion-icon name=\"barbell-outline\" class=\"icons\" routerLink=\"/create-exercise\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n    </div>\n    <div class=\"Spacing-div\" id=\"SearchBarDiv\">\n      <ion-searchbar #searchbar (ionInput)=\"eventHandler($event)\" id=\"exercise-searchbar\" mode=\"ios\" inputmode=\"search\"></ion-searchbar>\n    </div>\n  </div>\n  <ion-row class=\"ion-justify-content-center\">\n        <span *ngFor=\"let exercise of exercises\">\n            <ion-card mode=\"ios\" class=\"exercises\" id=\"{{exercise.exerciseID}}\">\n              <ion-slides scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n                <ion-slide *ngFor=\"let img of exercise.images;\">\n                   <img class=\"imagePose\" [src]=\"img\" alt=\"Exercise Pose Image Missing\">\n                </ion-slide>\n              </ion-slides>\n              <ion-card-header>\n                <ion-card-title>{{ exercise.title }}</ion-card-title>\n              </ion-card-header>\n              <ion-item>\n                <ion-button mode=\"ios\" size=\"medium\" slot=\"start\" class=\"editBtn\" (click)=\"sendExerciseID(exercise.exerciseID)\">Edit</ion-button>\n              </ion-item>\n            </ion-card>\n        </span>\n  </ion-row>\n\n</ion-content>\n<ion-tab-bar mode=\"md\" slot=\"bottom\">\n  <ion-tab-button (click)=\"goToFYP()\">\n    <ion-label>Workouts</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clipboard.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button tab=\".\">\n    <ion-label>Exercises</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Library_activated.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToClients()\">\n    <ion-label>Clients</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clients.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToProfile()\">\n    <ion-label>Settings</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Setting.svg\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map