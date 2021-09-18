(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_update-exercise_update-exercise_module_ts"],{

/***/ 2869:
/*!*******************************************************************!*\
  !*** ./src/app/update-exercise/update-exercise-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateExercisePageRoutingModule": () => (/* binding */ UpdateExercisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_exercise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-exercise.page */ 4090);




const routes = [
    {
        path: '',
        component: _update_exercise_page__WEBPACK_IMPORTED_MODULE_0__.UpdateExercisePage
    }
];
let UpdateExercisePageRoutingModule = class UpdateExercisePageRoutingModule {
};
UpdateExercisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateExercisePageRoutingModule);



/***/ }),

/***/ 2025:
/*!***********************************************************!*\
  !*** ./src/app/update-exercise/update-exercise.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateExercisePageModule": () => (/* binding */ UpdateExercisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-exercise-routing.module */ 2869);
/* harmony import */ var _update_exercise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-exercise.page */ 4090);







let UpdateExercisePageModule = class UpdateExercisePageModule {
};
UpdateExercisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateExercisePageRoutingModule
        ],
        declarations: [_update_exercise_page__WEBPACK_IMPORTED_MODULE_1__.UpdateExercisePage]
    })
], UpdateExercisePageModule);



/***/ }),

/***/ 4090:
/*!*********************************************************!*\
  !*** ./src/app/update-exercise/update-exercise.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateExercisePage": () => (/* binding */ UpdateExercisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_exercise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-exercise.page.html */ 1358);
/* harmony import */ var _update_exercise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-exercise.page.scss */ 2138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/kenzo-tag */ 1903);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _Models_exercise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/exercise */ 1925);










let UpdateExercisePage = class UpdateExercisePage {
    constructor(http, route, alertController, workoutService) {
        this.http = http;
        this.route = route;
        this.alertController = alertController;
        this.workoutService = workoutService;
        this.tags = new Array();
        this.tagBackup = new Array();
        this.selected = new Array();
        this.newTag = this.getRandomTag("");
        this.id = route.getCurrentNavigation().extras.state.id;
    }
    ngOnInit() {
        this.getDetails();
    }
    getDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getTags();
            const exercises = yield this.workoutService.attemptGetExercises();
            const data = exercises["data"];
            let unit;
            for (let i = 0; i < data.length; i++) {
                unit = data[i];
                if (unit["exerciseID"] === this.id) {
                    break;
                }
            }
            this.title = unit["exerciseTitle"];
            this.description = unit["exerciseDescription"];
            this.range = unit["repRange"];
            this.sets = unit["sets"];
            this.poseDescription = unit["poseDescription"];
            this.rest = unit["restPeriod"];
            this.duration = unit["duration"] / 60;
            this.images = unit["images"];
            const tags = unit["tags"];
            for (let j = 0; j < tags.length; j++) {
                const currTag = tags[j];
                for (let i = 0; i < this.tagBackup.length; i++) {
                    if (this.tagBackup[i].label === currTag["label"]) {
                        document.getElementById("selected").style.display = "block";
                        this.selected.push(this.tagBackup[i]);
                        this.tagBackup[i].selected = true;
                    }
                }
            }
            for (let i = 0; i < this.tagBackup.length; i++) {
                if (this.tagBackup[i].selected === false) {
                    this.tags.push(this.tagBackup[i]);
                }
            }
        });
    }
    /** This function uses the workout service to submit a request to create an exercise.
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const exercise = new _Models_exercise__WEBPACK_IMPORTED_MODULE_4__.Exercise(this.title, this.description, this.range, this.sets, this.poseDescription, this.rest, this.selected, this.duration * 60, this.images);
            const status = yield this.workoutService.attemptUpdateExercise(exercise, this.id);
            console.log(exercise);
            if (status < 400) {
                // Success State
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Exercise Submitted",
                    buttons: ["Go Back"]
                });
                yield this.presentAlert(alert);
                this.route.navigate(["/search"]).then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Input
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not create exercise",
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
    /** This function uses the workout service to submit a request to delete an exercise.
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let confirmation = false;
            let alert = yield this.alertController.create({
                cssClass: "kenzo-alert",
                header: "Are you sure you would like to delete this exercise?",
                buttons: [{ text: "Delete",
                        handler: () => {
                            confirmation = true;
                        } }, "Cancel"]
            });
            yield this.presentAlert(alert);
            if (!confirmation) {
                return;
            }
            const status = yield this.workoutService.attemptRemoveExercise(this.id);
            if (status < 400) {
                // Success State
                alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Exercise Deleted",
                    buttons: ["Go Back"]
                });
                yield this.presentAlert(alert);
                this.route.navigate(["/search"]).then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Input
                alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not delete exercise",
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    reloadWindow() {
        window.location.reload();
    }
    /** This function uses the server to retrieve an array of all possible tags for the system
     * With these tags, the User will be able to select tags for their exercise
     *
     * @author Luca Azmanov, u19004185
     */
    getTags() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const allTags = yield this.workoutService.getTags();
            const data = allTags["data"];
            for (let i = 0; i < data.length; i++) {
                const tagsKey = data[i];
                const tg = new _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_2__.KenzoTag(tagsKey["textColour"], tagsKey["backgroundColour"], tagsKey["label"], false);
                this.tagBackup.push(tg);
            }
        });
    }
    /** This function serves the purpose of selecting and deselecting tags for the creation of an exercise
     *
     * @param id specifies the id of the tag selected/deselected
     *
     * If the selected tag is already selected it is returned to the unselected, else it is placed in the new selected choices
     * @author Luca Azmanov, u19004185
     */
    select(id) {
        if (id === this.newTag.label && !this.newTag.selected) {
            this.tagBackup.push(this.newTag);
            this.newTag.selected = true;
            this.selected.push(this.newTag);
            this.searchbar.value = "";
            const resultArray = new Array();
            for (let i = 0; i < this.tagBackup.length; i++) {
                const tag = this.tagBackup[i];
                // if not selected
                if (!tag.selected) {
                    resultArray.push(tag);
                }
            }
            this.tags = resultArray;
            document.getElementById("no-tag-create").style.display = "none";
            this.newTag = this.getRandomTag("");
            if (this.selected.length === 0) {
                document.getElementById("selected").style.display = "none";
            }
            else {
                document.getElementById("selected").style.display = "block";
            }
            return;
        }
        const unselected = new Array();
        const selected = new Array();
        for (let i = 0; i < this.tags.length; i++) {
            const tag = this.tags[i];
            if (tag.label === id) {
                tag.selected = true;
            }
        }
        for (let i = 0; i < this.selected.length; i++) {
            const tag = this.selected[i];
            if (tag.label === id) {
                tag.selected = false;
            }
        }
        for (let i = 0; i < this.tagBackup.length; i++) {
            const tag = this.tagBackup[i];
            if (tag.selected) {
                selected.push(tag);
            }
            else {
                unselected.push(tag);
            }
        }
        this.selected = selected;
        this.tags = unselected;
        if (this.selected.length === 0) {
            document.getElementById("selected").style.display = "none";
        }
        else {
            document.getElementById("selected").style.display = "block";
        }
    }
    /** This function is called upon input of the search bar and will filter the selection of tags
     * by the specified text. This function will be able to determine whether a tag is already
     * selected or not and decide whether it is appropriate to display this tag.
     *
     * @param event contains the result of the search
     *
     * i.e. If a tag is selected, it must not be displayed under search results
     * @author Luca Azmanov, u19004185
     */
    filterSelection(event) {
        const text = event.srcElement.value.trim();
        this.tags = this.tagBackup;
        const resultArray = new Array();
        if (text === "" || text === null) {
            document.getElementById("no-tag-create").style.display = "none";
            return;
        }
        let exactMatch = false;
        for (let i = 0; i < this.tags.length; i++) {
            const tag = this.tags[i];
            // if not selected
            if (!tag.selected) {
                const id = tag.label;
                // if tag label does contain the searched tag
                if (id.toLowerCase().trim().includes(text.toLowerCase())) {
                    resultArray.push(tag);
                }
                if (id.toLowerCase().trim() === (text.toLowerCase())) {
                    exactMatch = true;
                }
            }
        }
        this.tags = resultArray;
        if (!exactMatch) {
            document.getElementById("no-tag-create").style.display = "block";
            this.newTag.label = text;
        }
        else {
            document.getElementById("no-tag-create").style.display = "none";
        }
    }
    /** This function serves the purpose of resetting the selection div after
     * the addition of a new tag is performed
     *
     * @param label is the name to be displayed after creation
     *
     * @author Luca Azmanov, u19004185
     */
    reset(label) {
        this.searchbar.value = label;
        const text = label;
        for (let i = 0; i < this.tags.length; i++) {
            const tag = this.tags[i];
            // if not selected
            if (!tag.selected) {
                const id = tag.label;
                const tagElement = document.getElementById(id);
                // if tag label does not contain the searched tag
                if (!id.toLowerCase().includes(text.toLowerCase())) {
                    tagElement.style.display = "none";
                }
                else { // if tag label contains the searched tag
                    tagElement.style.display = "inline-block";
                }
            }
        }
        document.getElementById("no-tag-create").style.display = "none";
    }
    /** This function creates a new random tag with random colors and waits for the new
     * specified label
     *
     * @param label is the name for new newly created tag
     * @author Luca Azmanov, u19004185
     */
    getRandomTag(label) {
        const colors = ["RED", "PINK", "PURPLE", "BLUE", "YELLOW", "ORANGE", "GREEN"];
        const randomTC = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        const randomBC = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        return new _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_2__.KenzoTag(colors[randomTC], colors[randomBC], label, false);
    }
    /** This function moves the user to a screen which allows them to manipulate a 3D avatar into specific poses which can be framed
     * and used to depict the exercise
     *
     * @author Luca Azmanov, u1900415
     */
    poseMaker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.route.navigate(["/pose-maker"], {});
        });
    }
    /**
     * This function will hide or show the optional fields
     *
     * @author Luca Azmanov, u19004185
     */
    showOptional() {
        const options = document.getElementById("optionalFields");
        const expand = document.getElementById("expand");
        const hide = document.getElementById("hide");
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
UpdateExercisePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_3__.WorkoutService }
];
UpdateExercisePage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["searchBar", { static: false },] }]
};
UpdateExercisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-update-exercise",
        template: _raw_loader_update_exercise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_exercise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateExercisePage);



/***/ }),

/***/ 2138:
/*!***********************************************************!*\
  !*** ./src/app/update-exercise/update-exercise.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  --background: var(--ion-off-white);\n}\n\n.back {\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-secondary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-secondary);\n  --color-hover: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\n.header {\n  --background: var(--ion-color-secondary);\n}\n\n.required, .optional {\n  font-family: \"SF Pro Medium\", serif;\n  display: inline-block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 10px;\n}\n\n.optional {\n  cursor: pointer;\n}\n\n.expand {\n  display: inline-block;\n}\n\n#optionalFields {\n  display: none;\n}\n\n#hide {\n  display: none;\n}\n\n#selected {\n  display: none;\n}\n\n#tags {\n  display: block;\n  height: 80px;\n  overflow-y: scroll;\n}\n\n.imagePose {\n  width: 100%;\n  object-fit: cover;\n}\n\n::-webkit-scrollbar {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-tertiary);\n  border-radius: 20px;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n\n.input-div {\n  display: block;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  color: var(--ion-color-tertiary);\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n}\n\n.input-description {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n}\n\n.radios {\n  --background: var(--ion-off-white);\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-off-white);\n  --color-hover: var(--ion-color-primary);\n}\n\n.submit {\n  width: var(--button-width);\n  display: block;\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  margin: 20px auto;\n}\n\n.delete {\n  width: var(--button-width);\n  display: block;\n  --background: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-primary);\n  --color-activated: var(--ion-color-tertiary);\n  --background-hover: var(--ion-color-primary);\n  --color-hover: var(--ion-color-tertiary);\n  margin: 20px auto;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1leGVyY2lzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxrREFBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsOENBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0NBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBQURGOztBQUtBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0FBRkYiLCJmaWxlIjoidXBkYXRlLWV4ZXJjaXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xufVxuXG4uYmFja3tcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZWFkZXJ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cblxuLnJlcXVpcmVkLCAub3B0aW9uYWx7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBNZWRpdW1cIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ub3B0aW9uYWx7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4cGFuZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jb3B0aW9uYWxGaWVsZHN7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNoaWRle1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2VsZWN0ZWR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0YWdze1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5pbWFnZVBvc2V7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tc2xpZGVze1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiBub25lO1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1LVF9CTEFDSyk7XG59XG5cbi5pbnB1dC1kaXZ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4ua2Vuem8taW5wdXR7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSZWd1bGFyXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiAxNXB4O1xuICAvL2JvcmRlcjogc29saWQgMC41cHggdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLmlucHV0LWRlc2NyaXB0aW9ue1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmFkaW9ze1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3VibWl0e1xuICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmRlbGV0ZXtcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuXG4uZm9vdGVye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 1358:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-exercise/update-exercise.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"back\" mode=\"ios\" defaultHref=\"/your-workouts\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update an Exercise</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"required\">Required</ion-label>\n  </div>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\" placeholder=\"Shred Program\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Description</ion-label>\n    <ion-input [(ngModel)]=\"description\" placeholder=\"3 week program to lose weight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Describe your workout with Kenzo Tags</ion-label>\n    <ion-searchbar #searchBar (ionInput)=\"filterSelection($event)\" placeholder=\"Search tags\" mode=\"ios\"></ion-searchbar>\n\n    <span id=\"tags\">\n        <ion-chip *ngFor=\"let tag of tags\" id=\"{{tag.label}}\" (click)=\"select(tag.label)\"\n                  [style]=\"{'--background': 'var(--ion-color-KTB_'+tag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+tag.textColour+')'}\" >\n          <ion-label>{{tag.label}}</ion-label>\n        </ion-chip>\n    </span>\n    <span style=\"display: none\" id=\"no-tag-create\">\n      <span style=\"padding-left: 10px; color: var(--ion-color-tertiary); font-size: 15px\">Create: </span>\n      <ion-chip name=\"newChip\" ngDefaultControl [(ngModel)]=\"newTag\" id=\"{{newTag.label}}\" (click)=\"select(newTag.label)\"\n                [style]=\"{'--background': 'var(--ion-color-KTB_'+newTag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+newTag.textColour+')'}\" >\n        <ion-label>{{newTag.label}}</ion-label>\n      </ion-chip>\n    </span><br>\n    <div id=\"selected\">\n      <ion-label class=\"input-description\">Selected</ion-label>\n      <ion-chip *ngFor=\"let tag of selected\" (click)=\"select(tag.label)\"\n                [style]=\"{'--background': 'var(--ion-color-KTB_'+tag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+tag.textColour+')'}\" >\n        <ion-label>{{tag.label}}</ion-label>\n      </ion-chip>\n      <br>\n    </div>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <!--      <ion-label class=\"input-description\">Poses</ion-label>-->\n    <ion-card>\n      <ion-slides id=\"slideshow\" scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n        <ion-slide *ngFor=\"let image of images\">\n          <ion-img class=\"imagePose\" [src]=\"image\" alt=\"exercise pose\"></ion-img>\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Pose Description</ion-label>\n    <ion-input [(ngModel)]=\"poseDescription\" placeholder=\"Ensure that your shoulders are straight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n\n  <!--  OPTIONAL -->\n  <div class=\"input-div\" (click)=\"showOptional()\">\n    <ion-label class=\"optional\">Optional</ion-label>\n    <ion-icon id=\"expand\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hide\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <span id=\"optionalFields\">\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Rep Range</ion-label>\n      <ion-input [(ngModel)]=\"range\" placeholder=\"4-6\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Sets</ion-label>\n      <ion-input [(ngModel)]=\"sets\" type=\"number\" placeholder=\"3\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Rest Period (seconds)</ion-label>\n      <ion-input [(ngModel)]=\"rest\"  type=\"number\" placeholder=\"40\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Duration of exercise (minutes)</ion-label>\n      <ion-input [(ngModel)]=\"duration\"  type=\"number\" placeholder=\"10\" class=\"kenzo-input\"></ion-input>\n    </div>\n  </span>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"footer\">\n    <ion-button (click)=\"submitDeleteRequest()\" mode=\"ios\" class=\"delete\">Delete</ion-button>\n    <ion-button (click)=\"submitUpdateRequest()\" mode=\"ios\" class=\"submit\">Update</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_update-exercise_update-exercise_module_ts.js.map