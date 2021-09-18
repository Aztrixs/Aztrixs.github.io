(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_create-workout_create-workout_module_ts"],{

/***/ 6212:
/*!*****************************************************************!*\
  !*** ./src/app/create-workout/create-workout-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorkoutPageRoutingModule": () => (/* binding */ CreateWorkoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_workout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-workout.page */ 963);
/* harmony import */ var _your_workouts_your_workouts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../your-workouts/your-workouts.page */ 5777);





const routes = [
    {
        path: '',
        component: _create_workout_page__WEBPACK_IMPORTED_MODULE_0__.CreateWorkoutPage
    },
    {
        path: 'your-workouts',
        component: _your_workouts_your_workouts_page__WEBPACK_IMPORTED_MODULE_1__.YourWorkoutsPage
    }
];
let CreateWorkoutPageRoutingModule = class CreateWorkoutPageRoutingModule {
};
CreateWorkoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], CreateWorkoutPageRoutingModule);



/***/ }),

/***/ 8082:
/*!*********************************************************!*\
  !*** ./src/app/create-workout/create-workout.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorkoutPageModule": () => (/* binding */ CreateWorkoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-workout-routing.module */ 6212);
/* harmony import */ var _create_workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-workout.page */ 963);







let CreateWorkoutPageModule = class CreateWorkoutPageModule {
};
CreateWorkoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateWorkoutPageRoutingModule
        ],
        declarations: [_create_workout_page__WEBPACK_IMPORTED_MODULE_1__.CreateWorkoutPage]
    })
], CreateWorkoutPageModule);



/***/ }),

/***/ 963:
/*!*******************************************************!*\
  !*** ./src/app/create-workout/create-workout.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateWorkoutPage": () => (/* binding */ CreateWorkoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_workout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-workout.page.html */ 5151);
/* harmony import */ var _create_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-workout.page.scss */ 8300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _Models_workout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/workout */ 2473);









let CreateWorkoutPage = class CreateWorkoutPage {
    constructor(http, route, workoutService, alertController) {
        this.http = http;
        this.route = route;
        this.workoutService = workoutService;
        this.alertController = alertController;
        this.plannerID = "";
        this.description = "";
        this.title = "";
        this.exercises = [];
        //Video Generation Options
        this.loop = 10; //seconds
        this.resolutionWidth = 1920;
        this.resolutionHeight = 1080;
        this.getExercises();
    }
    ngOnInit() {
    }
    /**
     * This function retrieves the exercises for this planner
     *
     * @author Luca Azmanov, u19004185
     */
    getExercises() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.workoutService.attemptGetExercisesByPlanner();
            const exercises = data.data;
            // console.log(data.data);
            for (let i = 0; i < exercises.length; i++) {
                const exerciseID = exercises[i].exerciseID;
                const exerciseTitle = exercises[i].exerciseTitle;
                const images = exercises[i].images;
                this.exercises[i] = { id: exerciseID, title: exerciseTitle, images: images, selected: false };
            }
        });
    }
    /** This function uses the workout service to submit a request to create a workout.
     * The workout service will return the status of the request:
     * 200 -> Success
     * 400 -> Incorrect Data
     * 500 -> Server not responding
     *
     * Thereafter,
     * Error states [400,500] will result in an alert
     * Success states [200] will result in a logged in a Planner being navigated to the logged in User's homescreen.
     *
     * @author Luca Azmanov, u19004185
     */
    submitCreateRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const newWorkout = new _Models_workout__WEBPACK_IMPORTED_MODULE_3__.Workout(this.title, this.description, []);
            // console.log(this.format(this.exercises));
            // return ;
            const status = yield this.workoutService.attemptSubmitWorkout(newWorkout, this.format(this.exercises), this.loop, this.genre, this.resolutionWidth, this.resolutionHeight);
            if (status < 400) {
                // Success State
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Workout Submitted",
                    buttons: ["Go Back"]
                });
                yield this.presentAlert(alert);
                this.route.navigate(["/your-workouts"]).then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Input
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not create workout",
                    message: "Please fill all of the fields.",
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
                throw new Error("Data is invalid.");
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
    /**
     * Helper Function to physically present alert to User independent of OS.
     *
     * @param alert
     * @author Luca Azmanov, u19004185
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
    format(data) {
        const formattedExercises = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].selected) {
                formattedExercises.push({ exerciseID: data[i].id });
            }
        }
        return formattedExercises;
    }
    select(id) {
        for (let i = 0; i < this.exercises.length; i++) {
            if (this.exercises[i].id === id) {
                this.exercises[i].selected = !this.exercises[i].selected;
                return;
            }
        }
    }
    filterSelection(event) {
        const text = event.srcElement.value.trim().toLowerCase();
        for (let i = 0; i < this.exercises.length; i++) {
            const exercise = this.exercises[i];
            document.getElementById(exercise.id).style.display = "inline-block";
        }
        for (let i = 0; i < this.exercises.length; i++) {
            const exercise = this.exercises[i];
            if (!exercise.title.trim().toLowerCase().includes(text)) {
                document.getElementById(exercise.id).style.display = "none";
            }
        }
    }
    showExercises() {
        const options = document.getElementById("exerciseDropdown");
        const expand = document.getElementById("expandExercises");
        const hide = document.getElementById("hideExercises");
        if (options.style.display === "block") {
            options.style.display = "none";
            hide.style.display = "none";
            expand.style.display = "inline-block";
        }
        else {
            options.style.display = "block";
            hide.style.display = "inline-block";
            expand.style.display = "none";
        }
    }
    showVideoOptions() {
        const options = document.getElementById("videoGen");
        const expand = document.getElementById("expandVideo");
        const hide = document.getElementById("hideVideo");
        if (options.style.display === "block") {
            options.style.display = "none";
            hide.style.display = "none";
            expand.style.display = "inline-block";
        }
        else {
            options.style.display = "block";
            hide.style.display = "inline-block";
            expand.style.display = "none";
        }
    }
};
CreateWorkoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
CreateWorkoutPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["searchBar", { static: false },] }]
};
CreateWorkoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-create-workout",
        template: _raw_loader_create_workout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateWorkoutPage);



/***/ }),

/***/ 8300:
/*!*********************************************************!*\
  !*** ./src/app/create-workout/create-workout.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  --background: var(--ion-off-white);\n}\n\n.back {\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-secondary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-secondary);\n  --color-hover: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\n.header {\n  --background: var(--ion-color-secondary);\n}\n\n.scrollable-title {\n  width: 180px;\n  margin-top: 20px;\n  padding-bottom: 20px;\n}\n\n.custom-row {\n  height: 500px;\n}\n\n.editBtn {\n  --background: none;\n  --background-hover: none;\n  --color: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n  display: block;\n}\n\n.exercises {\n  transition: border 0.1s;\n  transition-timing-function: linear;\n  width: 300px;\n}\n\n.imagePose {\n  height: 150px;\n  width: 300px;\n  object-fit: cover;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n\n.input-div {\n  display: block;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: var(--ion-color-tertiary);\n}\n\n.selector {\n  background-color: var(--ion-color-secondary);\n  border-radius: 9px;\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n}\n\n.resolution {\n  display: inline-block;\n  width: 80px;\n}\n\n.input-description {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n}\n\n.radios {\n  --background: var(--ion-off-white);\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-off-white);\n  --color-hover: var(--ion-color-primary);\n}\n\n.submit {\n  width: var(--button-width);\n  display: block;\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  margin: 20px auto;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  border: none;\n}\n\nion-item {\n  --background: none;\n}\n\n.required, .optional {\n  display: inline-block;\n  color: var(--ion-color-tertiary);\n  margin-bottom: 10px;\n}\n\n.hint {\n  color: gray;\n  font-size: 10px;\n}\n\n.required, .optional {\n  cursor: pointer;\n}\n\n#videoGen, #exerciseDropdown {\n  display: none;\n}\n\n#hideExercises, #hideVideo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS13b3Jrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscURBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHVDQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLDJDQUFBO0VBQ0EsNkNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUYiLCJmaWxlIjoiY3JlYXRlLXdvcmtvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG59XG5cbi5iYWNre1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhlYWRlcntcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnNjcm9sbGFibGUtdGl0bGV7XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jdXN0b20tcm93e1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uZWRpdEJ0bntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGVyY2lzZXN7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pbWFnZVBvc2V7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1zbGlkZXN7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLUtUX0JMQUNLKTtcbn1cblxuLmlucHV0LWRpdntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5zZWxlY3RvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuLmtlbnpvLWlucHV0e1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gUmVndWxhclwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgLy9ib3JkZXI6IHNvbGlkIDAuNXB4IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5yZXNvbHV0aW9ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uaW5wdXQtZGVzY3JpcHRpb257XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBNZWRpdW1cIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yYWRpb3N7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zdWJtaXR7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uZm9vdGVye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5yZXF1aXJlZCwgLm9wdGlvbmFse1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGludHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnJlcXVpcmVkLCAub3B0aW9uYWx7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3ZpZGVvR2VuLCAjZXhlcmNpc2VEcm9wZG93bntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hpZGVFeGVyY2lzZXMsICNoaWRlVmlkZW97XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 5151:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-workout/create-workout.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"back\" mode=\"ios\" defaultHref=\"/your-workouts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Create a Workout</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\" id=\"title\" placeholder=\"Shred Program\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Description</ion-label>\n    <ion-input [(ngModel)]=\"description\" id=\"desc\" placeholder=\"3 week program to lose weight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n<!--  VIDEO GENERATION -->\n  <div class=\"input-div\" (click)=\"showVideoOptions()\">\n    <ion-label class=\"input-description required\">Video Options</ion-label>\n    <ion-icon id=\"expandVideo\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hideVideo\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <div id=\"videoGen\" class=\"input-div\">\n    <br>\n    <ion-label class=\"input-description\">Pose Frame Length</ion-label>\n    <ion-input [(ngModel)]=\"loop\" id=\"loop\" class=\"kenzo-input resolution\"></ion-input> seconds\n    <span class=\"hint\">(minimum 10)</span>\n    <br>\n    <br>\n    <ion-label class=\"input-description\">Resolution <span class=\"hint\">(Width x Height)</span></ion-label>\n    <ion-input [(ngModel)]=\"resolutionWidth\" class=\"kenzo-input resolution\"></ion-input>\n    x\n    <ion-input [(ngModel)]=\"resolutionHeight\" class=\"kenzo-input resolution\"></ion-input>\n    pixels\n    <br>\n    <br>\n    <ion-select [(ngModel)]=\"genre\" class=\"selector\" placeholder=\"Genre Selection\">\n      <ion-select-option value=\"chill\">Chill</ion-select-option>\n      <ion-select-option value=\"upbeat\">Upbeat</ion-select-option>\n      <ion-select-option value=\"hardcore\">Hardcore</ion-select-option>\n    </ion-select>\n  </div>\n  <br>\n<!--  EXERCISES -->\n  <div class=\"input-div\" (click)=\"showExercises()\">\n    <ion-label class=\"input-description required\">Exercises</ion-label>\n    <ion-icon id=\"expandExercises\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hideExercises\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <span id=\"exerciseDropdown\">\n    <div class=\"input-div\">\n      <ion-searchbar #searchBar (ionInput)=\"filterSelection($event)\" placeholder=\"Search Exercises\" mode=\"ios\"></ion-searchbar>\n    </div>\n    <ion-row class=\"ion-justify-content-center\">\n        <span *ngFor=\"let exercise of exercises\" mode=\"ios\">\n          <ion-card [id]=\"exercise.id\" class=\"exercises\">\n            <ion-slides scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n              <ion-slide *ngFor=\"let image of exercise.images\">\n                <ion-img alt=\"exercise pose\" class=\"imagePose\" [src]=\"image\"></ion-img>\n              </ion-slide>\n            </ion-slides>\n            <ion-item>\n              <ion-card-title class=\"scrollable-title\" slot=\"start\" [textContent]=\"exercise.title\"></ion-card-title>\n              <ion-checkbox slot=\"end\" (ionChange)=\"select(exercise.id)\"></ion-checkbox>\n            </ion-item>\n          </ion-card>\n        </span>\n    </ion-row>\n  </span>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"footer\">\n    <ion-button (click)=\"submitCreateRequest()\" mode=\"ios\" class=\"submit\">Create</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_create-workout_create-workout_module_ts.js.map