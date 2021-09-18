(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_update-workout_update-workout_module_ts"],{

/***/ 4062:
/*!*****************************************************************!*\
  !*** ./src/app/update-workout/update-workout-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateWorkoutPageRoutingModule": () => (/* binding */ UpdateWorkoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_workout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-workout.page */ 6167);




const routes = [
    {
        path: '',
        component: _update_workout_page__WEBPACK_IMPORTED_MODULE_0__.UpdateWorkoutPage
    }
];
let UpdateWorkoutPageRoutingModule = class UpdateWorkoutPageRoutingModule {
};
UpdateWorkoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateWorkoutPageRoutingModule);



/***/ }),

/***/ 3039:
/*!*********************************************************!*\
  !*** ./src/app/update-workout/update-workout.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateWorkoutPageModule": () => (/* binding */ UpdateWorkoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-workout-routing.module */ 4062);
/* harmony import */ var _update_workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-workout.page */ 6167);







let UpdateWorkoutPageModule = class UpdateWorkoutPageModule {
};
UpdateWorkoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateWorkoutPageRoutingModule
        ],
        declarations: [_update_workout_page__WEBPACK_IMPORTED_MODULE_1__.UpdateWorkoutPage]
    })
], UpdateWorkoutPageModule);



/***/ }),

/***/ 6167:
/*!*******************************************************!*\
  !*** ./src/app/update-workout/update-workout.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateWorkoutPage": () => (/* binding */ UpdateWorkoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_workout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-workout.page.html */ 261);
/* harmony import */ var _update_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-workout.page.scss */ 1188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _Models_workout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/workout */ 2473);









let UpdateWorkoutPage = class UpdateWorkoutPage {
    constructor(http, route, workoutService, alertController) {
        this.http = http;
        this.route = route;
        this.workoutService = workoutService;
        this.alertController = alertController;
        this.description = "";
        this.title = "";
        this.currExercises = [];
        this.exercises = [];
        //Video Generation Options
        this.loop = 10; //seconds
        this.resolutionWidth = 1920;
        this.resolutionHeight = 1080;
        this.id = route.getCurrentNavigation().extras.state.id;
    }
    ngOnInit() {
        this.getDetails();
    }
    getDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const workout = yield this.workoutService.attemptGetWorkouts();
            const data = workout["data"];
            let unit;
            for (let i = 0; i < data.length; i++) {
                unit = data[i];
                if (unit["workoutID"] === this.id) {
                    break;
                }
            }
            this.title = unit["workoutTitle"];
            this.description = unit["workoutDescription"];
            this.currExercises = unit["exercises"];
            yield this.getExercises(this.currExercises);
        });
    }
    /**
     * This function retrieves the exercises for this planner
     *
     * @author Luca Azmanov, u19004185
     */
    getExercises(current) {
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
            for (let i = 0; i < current.length; i++) {
                for (let j = 0; j < this.exercises.length; j++) {
                    if (this.exercises[j].id === current[i].exerciseID) {
                        this.exercises[j].selected = true;
                        continue;
                    }
                }
            }
        });
    }
    /** This function uses the workout service to submit a request to update a workout.
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
    submitUpdateRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const newWorkout = new _Models_workout__WEBPACK_IMPORTED_MODULE_3__.Workout(this.title, this.description, []);
            const status = yield this.workoutService.attemptUpdateWorkout(newWorkout, this.id, this.format(this.exercises), this.loop, this.genre, this.resolutionWidth, this.resolutionHeight);
            if (status < 400) {
                // Success State
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Workout Updated",
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
                    header: "Could not update workout",
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
    /** This function uses the workout service to submit a request to delete a workout.
     * The workout service will return the status of the request:
     * 200 -> Success
     * 400 -> Error
     * 500 -> Server not responding
     *
     * Thereafter,
     * Error states [400,500] will result in an alert
     * Success states [200] will result in a logged in a Planner being navigated to the logged in User's homescreen.
     *
     * @author Luca Azmanov, u19004185
     */
    submitDeleteRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let confirmation = false;
            let alert = yield this.alertController.create({
                cssClass: "kenzo-alert",
                header: "Are you sure you would like to delete this workout?",
                buttons: [{ text: "Delete",
                        handler: () => {
                            confirmation = true;
                        } }, "Cancel"]
            });
            yield this.presentAlert(alert);
            if (!confirmation) {
                return;
            }
            const status = yield this.workoutService.attemptRemoveWorkout(this.id);
            if (status < 400) {
                // Success State
                alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Workout Deleted",
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
                alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not delete workout",
                    message: "Please try again later.",
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
                throw new Error("Data is invalid.");
            }
            else {
                // Server Error
                alert = yield this.alertController.create({
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
UpdateWorkoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
UpdateWorkoutPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["searchBar", { static: false },] }]
};
UpdateWorkoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-update-workout",
        template: _raw_loader_update_workout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateWorkoutPage);



/***/ }),

/***/ 1188:
/*!*********************************************************!*\
  !*** ./src/app/update-workout/update-workout.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".delete {\n  width: var(--button-width);\n  display: block;\n  --background: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-primary);\n  --color-activated: var(--ion-color-tertiary);\n  --background-hover: var(--ion-color-primary);\n  --color-hover: var(--ion-color-tertiary);\n  margin: 20px auto;\n}\n\n.background {\n  --background: var(--ion-off-white);\n}\n\n.back {\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-secondary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-secondary);\n  --color-hover: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\n.header {\n  --background: var(--ion-color-secondary);\n}\n\n.scrollable-title {\n  width: 180px;\n  margin-top: 20px;\n  padding-bottom: 20px;\n}\n\n.custom-row {\n  height: 500px;\n}\n\n.editBtn {\n  --background: none;\n  --background-hover: none;\n  --color: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n  display: block;\n}\n\n.exercises {\n  transition: border 0.1s;\n  transition-timing-function: linear;\n  width: 300px;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n\n.imagePose {\n  height: 150px;\n  width: 300px;\n  object-fit: cover;\n}\n\n.input-div {\n  display: block;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: var(--ion-color-tertiary);\n}\n\n.selector {\n  background-color: var(--ion-color-secondary);\n  border-radius: 9px;\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n}\n\n.resolution {\n  display: inline-block;\n  width: 80px;\n}\n\n.input-description {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n}\n\n.radios {\n  --background: var(--ion-off-white);\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-off-white);\n  --color-hover: var(--ion-color-primary);\n}\n\n.submit {\n  width: var(--button-width);\n  display: block;\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  margin: 20px auto;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  border: none;\n}\n\nion-item {\n  --background: none;\n}\n\n.required, .optional {\n  display: inline-block;\n  color: var(--ion-color-tertiary);\n  margin-bottom: 10px;\n}\n\n.hint {\n  color: gray;\n  font-size: 10px;\n}\n\n.required, .optional {\n  cursor: pointer;\n}\n\n#videoGen, #exerciseDropdown {\n  display: none;\n}\n\n#hideExercises, #hideVideo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS13b3Jrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxxREFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRiIsImZpbGUiOiJ1cGRhdGUtd29ya291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRle1xuICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uYmFja2dyb3VuZHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbn1cblxuLmJhY2t7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uc2Nyb2xsYWJsZS10aXRsZXtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmN1c3RvbS1yb3d7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5lZGl0QnRue1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmV4ZXJjaXNlc3tcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogbm9uZTtcbiAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItS1RfQkxBQ0spO1xufVxuXG4uaW1hZ2VQb3Nle1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW5wdXQtZGl2e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLnNlbGVjdG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4ua2Vuem8taW5wdXR7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSZWd1bGFyXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiAxNXB4O1xuICAvL2JvcmRlcjogc29saWQgMC41cHggdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLnJlc29sdXRpb257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5pbnB1dC1kZXNjcmlwdGlvbntcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJhZGlvc3tcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnN1Ym1pdHtcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5mb290ZXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnJlcXVpcmVkLCAub3B0aW9uYWx7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oaW50e1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucmVxdWlyZWQsIC5vcHRpb25hbHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdmlkZW9HZW4sICNleGVyY2lzZURyb3Bkb3due1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jaGlkZUV4ZXJjaXNlcywgI2hpZGVWaWRlb3tcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 261:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-workout/update-workout.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"back\" mode=\"ios\" defaultHref=\"/your-workouts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update a Workout</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\" id=\"title\" placeholder=\"Shred Program\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Description</ion-label>\n    <ion-input [(ngModel)]=\"description\" id=\"desc\" placeholder=\"3 week program to lose weight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <br>\n  <!--  VIDEO GENERATION -->\n  <div class=\"input-div\" (click)=\"showVideoOptions()\">\n    <ion-label class=\"input-description required\">Video Options</ion-label>\n    <ion-icon id=\"expandVideo\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hideVideo\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <div id=\"videoGen\" class=\"input-div\">\n    <br>\n    <ion-label class=\"input-description\">Pose Frame Length</ion-label>\n    <ion-input [(ngModel)]=\"loop\" id=\"loop\" class=\"kenzo-input resolution\"></ion-input> seconds\n    <span class=\"hint\">(minimum 10)</span>\n    <br>\n    <br>\n    <ion-label class=\"input-description\">Resolution <span class=\"hint\">(Width x Height)</span></ion-label>\n    <ion-input [(ngModel)]=\"resolutionWidth\" class=\"kenzo-input resolution\"></ion-input>\n    x\n    <ion-input [(ngModel)]=\"resolutionHeight\" class=\"kenzo-input resolution\"></ion-input>\n    pixels\n    <br>\n    <br>\n    <ion-select [(ngModel)]=\"genre\" class=\"selector\" placeholder=\"Genre Selection\">\n      <ion-select-option value=\"chill\">Chill</ion-select-option>\n      <ion-select-option value=\"upbeat\">Upbeat</ion-select-option>\n      <ion-select-option value=\"hardcore\">Hardcore</ion-select-option>\n    </ion-select>\n  </div>\n  <br>\n  <!--  EXERCISES -->\n  <div class=\"input-div\" (click)=\"showExercises()\">\n    <ion-label class=\"input-description required\">Exercises</ion-label>\n    <ion-icon id=\"expandExercises\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hideExercises\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <span id=\"exerciseDropdown\">\n    <div class=\"input-div\">\n      <ion-searchbar #searchBar (ionInput)=\"filterSelection($event)\" placeholder=\"Search Exercises\" mode=\"ios\"></ion-searchbar>\n    </div>\n    <ion-row class=\"ion-justify-content-center\">\n        <span *ngFor=\"let exercise of exercises\" mode=\"ios\">\n          <ion-card [id]=\"exercise.id\" class=\"exercises\">\n            <ion-slides scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n              <ion-slide *ngFor=\"let image of exercise.images\">\n                <ion-img alt=\"exercise pose\" class=\"imagePose\" [src]=\"image\"></ion-img>\n              </ion-slide>\n            </ion-slides>\n            <ion-item>\n              <ion-card-title class=\"scrollable-title\" slot=\"start\" [textContent]=\"exercise.title\"></ion-card-title>\n              <ion-checkbox slot=\"end\" checked=\"{{exercise.selected}}\" (ionChange)=\"select(exercise.id)\"></ion-checkbox>\n            </ion-item>\n          </ion-card>\n        </span>\n    </ion-row>\n  </span>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"footer\">\n    <ion-button (click)=\"submitDeleteRequest()\" mode=\"ios\" class=\"delete\">Delete</ion-button>\n    <ion-button (click)=\"submitUpdateRequest()\" mode=\"ios\" class=\"submit\">Update</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_update-workout_update-workout_module_ts.js.map