(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_create-exercise_create-exercise_module_ts"],{

/***/ 5393:
/*!*******************************************************************!*\
  !*** ./src/app/create-exercise/create-exercise-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExercisePageRoutingModule": () => (/* binding */ CreateExercisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_exercise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-exercise.page */ 9198);




const routes = [
    {
        path: '',
        component: _create_exercise_page__WEBPACK_IMPORTED_MODULE_0__.CreateExercisePage
    }
];
let CreateExercisePageRoutingModule = class CreateExercisePageRoutingModule {
};
CreateExercisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateExercisePageRoutingModule);



/***/ }),

/***/ 5661:
/*!***********************************************************!*\
  !*** ./src/app/create-exercise/create-exercise.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExercisePageModule": () => (/* binding */ CreateExercisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-exercise-routing.module */ 5393);
/* harmony import */ var _create_exercise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-exercise.page */ 9198);







let CreateExercisePageModule = class CreateExercisePageModule {
};
CreateExercisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateExercisePageRoutingModule,
        ],
        declarations: [_create_exercise_page__WEBPACK_IMPORTED_MODULE_1__.CreateExercisePage]
    })
], CreateExercisePageModule);



/***/ }),

/***/ 9198:
/*!*********************************************************!*\
  !*** ./src/app/create-exercise/create-exercise.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExercisePage": () => (/* binding */ CreateExercisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_exercise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-exercise.page.html */ 7289);
/* harmony import */ var _create_exercise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-exercise.page.scss */ 7202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _Models_exercise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/exercise */ 1925);
/* harmony import */ var _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/kenzo-tag */ 1903);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 1628);











let CreateExercisePage = class CreateExercisePage {
    constructor(http, route, alertController, workoutService, storage) {
        this.http = http;
        this.route = route;
        this.alertController = alertController;
        this.workoutService = workoutService;
        this.storage = storage;
        this.title = "";
        this.description = "";
        this.range = "";
        this.poseDescription = "";
        this.slideshow = new Array();
        this.tags = new Array();
        this.tagBackup = new Array();
        this.selected = new Array();
        this.storage.create();
        this.storage.set("images", []);
        this.storage.set("skeletons", []);
        this.getTags();
        this.newTag = this.getRandomTag("");
    }
    ngOnInit() {
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
    createExercise() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.syncFrames();
            const exercise = new _Models_exercise__WEBPACK_IMPORTED_MODULE_3__.Exercise(this.title, this.description, this.range, this.sets, this.poseDescription, this.rest, this.selected, this.duration * 60, this.images);
            const status = yield this.workoutService.attemptSubmitExercise(exercise);
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
                    message: "Please fill all of the required fields.",
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const allTags = yield this.workoutService.getTags();
            const data = allTags.data;
            for (let i = 0; i < data.length; i++) {
                const tagsKey = data[i];
                const tg = new _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_4__.KenzoTag(tagsKey.textColour, tagsKey.backgroundColour, tagsKey.label, false);
                this.tags.push(tg);
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
            else {
                const id = tag.label;
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
        return new _Models_kenzo_tag__WEBPACK_IMPORTED_MODULE_4__.KenzoTag(colors[randomTC], colors[randomBC], label, false);
    }
    /** This function moves the user to a screen which allows them to manipulate a 3D avatar into specific poses which can be framed
     * and used to depict the exercise
     *
     * @author Luca Azmanov, u1900415
     */
    poseMaker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.route.navigate(["/pose-maker"]);
        });
    }
    /**
     * This function syncs the photos sent from the pose maker
     *
     * @author Luca Azmanov, u19004185
     */
    syncFrames() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.slideshow = new Array();
            this.images = yield this.storage.get("images");
            if (this.images !== null) {
                for (let i = 0; i < this.images.length; i++) {
                    const image = this.images[i];
                    if (image === undefined || image === null) {
                        this.images[i] = null;
                        continue;
                    }
                    this.slideshow.push(image);
                }
                if (this.images.length > 0) {
                    document.getElementById("pose-button").innerHTML = "Edit Poses";
                }
                else {
                    document.getElementById("pose-button").innerHTML = "Add Poses";
                }
            }
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
CreateExercisePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
CreateExercisePage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ["searchBar", { static: false },] }]
};
CreateExercisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-create-exercise",
        template: _raw_loader_create_exercise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_exercise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateExercisePage);



/***/ }),

/***/ 7202:
/*!***********************************************************!*\
  !*** ./src/app/create-exercise/create-exercise.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  --background: var(--ion-off-white);\n}\n\n.back {\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-color-secondary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-secondary);\n  --color-hover: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\n.header {\n  --background: var(--ion-color-secondary);\n}\n\n.input-div {\n  display: block;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#tags {\n  display: block;\n  height: 80px;\n  overflow-y: scroll;\n}\n\n#selected {\n  display: none;\n}\n\n.title {\n  color: var(--ion-color-tertiary);\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n}\n\n.input-description {\n  font-family: \"SF Pro Medium\", serif;\n  display: block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: 500;\n}\n\n.required, .optional {\n  font-family: \"SF Pro Medium\", serif;\n  display: inline-block;\n  color: var(--ion-color-tertiary);\n  padding-left: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  font-size: 28px;\n  margin-bottom: 10px;\n}\n\n.optional {\n  cursor: pointer;\n}\n\n.expand {\n  display: inline-block;\n}\n\n#optionalFields {\n  display: none;\n}\n\n#hide {\n  display: none;\n}\n\n.radios {\n  --background: var(--ion-off-white);\n  --color: var(--ion-color-tertiary);\n  --background-activated: var(--ion-off-white);\n  --color-hover: var(--ion-color-primary);\n}\n\n.submit {\n  width: var(--button-width);\n  display: block;\n  --background-activated: var(--ion-color-tertiary);\n  --color-activated: var(--ion-color-primary);\n  --background-hover: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  margin: 20px auto;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  border: none;\n}\n\n.imagePose {\n  width: 100%;\n  object-fit: cover;\n}\n\n::-webkit-scrollbar {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--ion-color-tertiary);\n  border-radius: 20px;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1leGVyY2lzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxrREFBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscURBQUE7RUFDQSw4Q0FBQTtBQUFGIiwiZmlsZSI6ImNyZWF0ZS1leGVyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbn1cblxuLmJhY2t7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uaW5wdXQtZGl2e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jdGFnc3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogODBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jc2VsZWN0ZWR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4ua2Vuem8taW5wdXR7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSZWd1bGFyXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiAxNXB4O1xuICAvL2JvcmRlcjogc29saWQgMC41cHggdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLmlucHV0LWRlc2NyaXB0aW9ue1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmVxdWlyZWQsIC5vcHRpb25hbHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5vcHRpb25hbHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5ke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNvcHRpb25hbEZpZWxkc3tcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hpZGV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYWRpb3N7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zdWJtaXR7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uZm9vdGVye1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbWFnZVBvc2V7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tc2xpZGVze1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiBub25lO1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1LVF9CTEFDSyk7XG59XG4iXX0= */");

/***/ }),

/***/ 7289:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-exercise/create-exercise.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"back\" mode=\"ios\" defaultHref=\"/search\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Create an Exercise</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"required\">Required</ion-label>\n  </div>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\" placeholder=\"Shred Program\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Description</ion-label>\n    <ion-input [(ngModel)]=\"description\" placeholder=\"3 week program to lose weight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n\n  <div class=\"input-div\">\n    <ion-label class=\"input-description\">Describe your workout with Kenzo Tags</ion-label>\n    <ion-searchbar #searchBar (ionInput)=\"filterSelection($event)\" placeholder=\"Search tags\" mode=\"ios\"></ion-searchbar>\n\n    <span id=\"tags\">\n      <ion-chip *ngFor=\"let tag of tags\" (click)=\"select(tag.label)\"\n                [style]=\"{'--background': 'var(--ion-color-KTB_'+tag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+tag.textColour+')'}\" >\n        <ion-label>{{tag.label}}</ion-label>\n      </ion-chip>\n    </span>\n    <span style=\"display: none\" id=\"no-tag-create\">\n      <span style=\"padding-left: 10px; color: var(--ion-color-tertiary); font-size: 15px\">Create: </span>\n      <ion-chip name=\"newChip\" ngDefaultControl [(ngModel)]=\"newTag\" id=\"{{newTag.label}}\" (click)=\"select(newTag.label)\"\n                [style]=\"{'--background': 'var(--ion-color-KTB_'+newTag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+newTag.textColour+')'}\" >\n        <ion-label>{{newTag.label}}</ion-label>\n      </ion-chip>\n    </span><br>\n    <div id=\"selected\">\n      <ion-label class=\"input-description\">Selected</ion-label>\n      <ion-chip *ngFor=\"let tag of selected\" (click)=\"select(tag.label)\"\n                [style]=\"{'--background': 'var(--ion-color-KTB_'+tag.backgroundColour+')', '--color': 'var(--ion-color-KT_'+tag.textColour+')'}\" >\n        <ion-label>{{tag.label}}</ion-label>\n      </ion-chip>\n      <br>\n    </div>\n  </div>\n  <div class=\"input-div\">\n<!--      <ion-label class=\"input-description\">Poses</ion-label>-->\n    <ion-card>\n      <ion-slides id=\"slideshow\" scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n        <button id=\"sync\" style=\"display: none\" (click)=\"syncFrames()\"></button>\n        <ion-slide *ngFor=\"let image of slideshow\">\n          <ion-img class=\"imagePose\" [src]=\"image\" alt=\"exercise pose image\"></ion-img>\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n    <ion-button mode=\"ios\" id=\"pose-button\" (click)=\"poseMaker()\">Add Poses</ion-button>\n  </div>\n  <br>\n  <div class=\"input-div\">\n    <ion-label  class=\"input-description\">Pose Description</ion-label>\n    <ion-input [(ngModel)]=\"poseDescription\" placeholder=\"Ensure that your shoulders are straight\" class=\"kenzo-input\"></ion-input>\n  </div>\n  <br>\n  <br>\n\n<!--  OPTIONAL -->\n  <div class=\"input-div\" (click)=\"showOptional()\">\n    <ion-label class=\"optional\">Optional</ion-label>\n    <ion-icon id=\"expand\" name=\"chevron-down-outline\"></ion-icon>\n    <ion-icon id=\"hide\" name=\"chevron-up-outline\"></ion-icon>\n  </div>\n  <span id=\"optionalFields\">\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Rep Range</ion-label>\n      <ion-input [(ngModel)]=\"range\" placeholder=\"4-6\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Sets</ion-label>\n      <ion-input [(ngModel)]=\"sets\" type=\"number\" placeholder=\"3\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Rest Period (seconds)</ion-label>\n      <ion-input [(ngModel)]=\"rest\"  type=\"number\" placeholder=\"40\" class=\"kenzo-input\"></ion-input>\n    </div>\n    <br>\n    <div class=\"input-div\">\n      <ion-label class=\"input-description\">Duration of exercise (minutes)</ion-label>\n      <ion-input [(ngModel)]=\"duration\"  type=\"number\" placeholder=\"10\" class=\"kenzo-input\"></ion-input>\n    </div>\n  </span>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"footer\">\n    <ion-button (click)=\"createExercise()\" mode=\"ios\" class=\"submit\">Create</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_create-exercise_create-exercise_module_ts.js.map