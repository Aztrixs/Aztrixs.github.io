(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["default-src_app_your-workouts_your-workouts_page_ts"],{

/***/ 5777:
/*!*****************************************************!*\
  !*** ./src/app/your-workouts/your-workouts.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourWorkoutsPage": () => (/* binding */ YourWorkoutsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_your_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./your-workouts.page.html */ 1917);
/* harmony import */ var _your_workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./your-workouts.page.scss */ 1947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/WorkoutService/workout.service */ 8238);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ClientService/client.service */ 6245);
/* harmony import */ var _modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-popup/modal-popup.page */ 3041);










/**
 * Workouts class to store the information obtained from requests in member array workouts to dynamically populate cards
 *
 * @author Jia Hui Wang, u18080449
 */
class Workouts {
    constructor(workoutID, title, description, exercises, images) {
        this._workoutID = workoutID;
        this._title = title;
        this._description = description;
        this._exercises = exercises;
        this._images = images;
    }
    get images() {
        return this._images;
    }
    set images(value) {
        this._images = value;
    }
    get workoutID() {
        return this._workoutID;
    }
    set workoutID(value) {
        this._workoutID = value;
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
    get exercises() {
        return this._exercises;
    }
    set exercises(value) {
        this._exercises = value;
    }
}
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
let YourWorkoutsPage = class YourWorkoutsPage {
    constructor(http, workoutService, clientService, alertController, router, actionSheetController, modalController) {
        this.http = http;
        this.workoutService = workoutService;
        this.clientService = clientService;
        this.alertController = alertController;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.workouts = new Array();
        this.exercises = new Array();
    }
    /**
     * Upon loading of the current page, call functions to load all the workouts and exercises to be displayed.
     *
     * @author Jia Hui Wang, u18080449
     */
    ngOnInit() {
        this.loadExercises();
    }
    /**
     * Load all the workouts by calling the workoutService function and then return data accordingly based on status code
     *
     * @author Jia Hui Wang, u18080449
     */
    loadWorkouts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const tempWorkouts = yield this.workoutService.attemptGetWorkoutsByPlanner();
            if (tempWorkouts.status === 200) {
                let images = new Array();
                for (let i = 0; i < tempWorkouts.data.length; i++) {
                    for (let j = 0; j < this.exercises.length; j++) {
                        if (this.exercises[j].exerciseID === tempWorkouts.data[i].exercises[0].exerciseID) {
                            for (let k = 0; k < this.exercises[j].images.length; k++) {
                                if (this.exercises[j].images[k] !== null) {
                                    images.push(this.exercises[j].images[k]);
                                    continue;
                                }
                            }
                        }
                    }
                    this.workouts[i] = new Workouts(tempWorkouts.data[i].workoutID, tempWorkouts.data[i].workoutTitle, tempWorkouts.data[i].workoutDescription, tempWorkouts.data[i].exercises, images);
                    images = [];
                }
                return 200;
            }
            else if (tempWorkouts.status === 404) {
                return 404;
            }
            else {
                return 500;
            }
        });
    }
    /**
     * Load all the exercises and then filter to find the respective exercises for each workout to display the preview images
     *
     * @author Luca Azmanov, u19004185
     */
    loadExercises() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const tempExercises = yield this.workoutService.attemptGetExercises();
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
                yield this.loadWorkouts();
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
        this.workouts.forEach(data => {
            const currElement = document.getElementById(data.workoutID);
            if (!(data.title.toLowerCase().includes(text)) && !(data.description.toLowerCase().includes(text))) {
                currElement.style.display = "none";
            }
            else {
                currElement.style.display = "block";
            }
        });
    }
    presentAlert(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    /**
     * Attempt to obtain the PDF of the workout and based on the status, either present an Action Sheet for the user to choose from multiple options then
     * return a code or just return a code.
     *
     * @param id The id of the workout of which the pdf is to obtained for.
     * @author Jia Hui Wang, u18080449
     */
    shareMedia(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const _contacts = yield this.presentModal();
            if (_contacts === "Cancelled") {
                return "Cancelled";
            }
            else {
                this.pdf = yield this.workoutService.attemptGetPDF(id);
                if (this.pdf.status === 200) {
                    this.presentActionSheet(id, _contacts);
                    return 200;
                }
                else if (this.pdf.status === 404) {
                    return 404;
                }
                else {
                    return 500;
                }
            }
        });
    }
    /**
     * Attempt to obtain the PDF of the workout and based on the status, either present an Action Sheet for the user to choose from multiple options then
     * return a code or just return a code.
     *
     * @param id The id of the workout of which the pdf is to obtained for.
     * @author Jia Hui Wang, u18080449
     */
    getPDF(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.pdf = yield this.workoutService.attemptGetPDF(id);
            if (this.pdf.status === 200) {
                yield this.getVideo(id, this.pdf.data);
                return 200;
            }
            else if (this.pdf.status === 404) {
                return 404;
            }
            else {
                return 500;
            }
        });
    }
    getVideo(id, pdf) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.video = yield this.workoutService.attemptGetVideo(id);
            if (this.video.status === 200) {
                yield this.presentDownloadSheet(this.video.data, pdf);
                return 200;
            }
            else if (this.video === 404) {
                return 404;
            }
            else if (this.video === 400) {
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Generating workout...",
                    message: "Video of workout is still processing, please try again in a moment!",
                    buttons: ["Dismiss"]
                });
                yield this.presentAlert(alert);
                return 400;
            }
            else {
                return 500;
            }
        });
    }
    /**
     * Modal to display all the contacts to choose for emailing of pdf or video
     * and then recieve data back based upon the user's choice.
     *
     * @author Jia Hui Wang, u180080449
     */
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__.ModalPopupPage,
                cssClass: "modalPopupCSS",
                showBackdrop: true,
                backdropDismiss: false
            });
            yield modal.present();
            const _contacts = yield modal.onWillDismiss();
            if (_contacts.data === "Cancelled") {
                return "Cancelled";
            }
            else {
                return _contacts.data;
            }
        });
    }
    /**
     * ActionSheet to display a list of options for the user to choose from, from emailing the pdf, video, or both, to downloading the pdf.
     *
     * @param pdf the base64 data of the image if the user wishes to download the file.
     * @param workoutID the id of the chosen workout should the user wish to choose either email option, then the data can be passed back to back-end to find the file and send it.
     * @author Jia Hui Wang, u18080449
     */
    presentActionSheet(workoutID, procedure) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Share documents",
                cssClass: "actionOptions",
                buttons: [{
                        text: "Email PDF",
                        role: "selected",
                        icon: "mail-outline",
                        handler: () => {
                            if (procedure === "Submit all") {
                                this.clientService.attemptEmailAllClientsPDF(workoutID);
                            }
                            else {
                                this.clientService.attemptEmailClientsPDF(workoutID, procedure);
                            }
                            return true;
                        }
                    }, {
                        text: "Email video",
                        role: "selected",
                        icon: "videocam-outline",
                        handler: () => {
                            if (procedure === "Submit all") {
                                this.clientService.attemptEmailAllClientsVideo(workoutID);
                            }
                            else {
                                this.clientService.attemptEmailClientsVideo(workoutID, procedure);
                            }
                            return true;
                        }
                    }, {
                        text: "Email PDF and video",
                        role: "selected",
                        icon: "documents-sharp",
                        handler: () => {
                            if (procedure === "Submit all") {
                                this.clientService.attemptEmailAllClientsMedia(workoutID);
                            }
                            else {
                                this.clientService.attemptEmailClientsMedia(workoutID, procedure);
                            }
                            return true;
                        }
                    }, {
                        text: "Cancel",
                        icon: "close",
                        role: "cancel",
                        handler: () => false
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            return role;
        });
    }
    presentDownloadSheet(video, pdf) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Download documents",
                cssClass: "actionOptions",
                buttons: [{
                        text: "Download PDF",
                        role: "selected",
                        icon: "download-outline",
                        handler: () => {
                            const source = pdf;
                            const link = document.createElement("a");
                            link.href = source;
                            link.download = "workout.pdf";
                            link.click();
                            return true;
                        }
                    }, {
                        text: "Download video",
                        role: "selected",
                        icon: "download-outline",
                        handler: () => {
                            const source = video;
                            const link = document.createElement("a");
                            link.href = "data:video/mpeg;base64," + source;
                            link.download = "workout.mp4";
                            link.click();
                            return true;
                        }
                    }, {
                        text: "Cancel",
                        icon: "close",
                        role: "cancel",
                        handler: () => false
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            return role;
        });
    }
    /**
     * Navigate to the update-workout page with the respective ID of the selected workout in order to update the workout.
     *
     * @author Jia Hui Wang, u18080449
     */
    sendWorkoutID(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/update-workout"], {
                state: {
                    id: id
                }
            });
        });
    }
    /**
     * Helper function to navigate to the search/browse page
     *
     * @author Jia Hui Wang, u18080449
     */
    goToSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/search"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    /**
     * Helper function to navigate to the profile page
     *
     * @author Jia Hui Wang, u18080449
     */
    goToProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/profile"])
                .then(() => {
                window.location.reload();
            });
        });
    }
    goToClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/client-list"])
                .then(() => {
                window.location.reload();
            });
        });
    }
};
YourWorkoutsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _Services_WorkoutService_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
YourWorkoutsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-your-workouts",
        template: _raw_loader_your_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_your_workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], YourWorkoutsPage);



/***/ }),

/***/ 1947:
/*!*******************************************************!*\
  !*** ./src/app/your-workouts/your-workouts.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".your-workout-background {\n  --background: var(--ion-off-white);\n}\n\n#WorkoutHeading {\n  font-family: \"SF Pro Medium\", serif;\n  font-size: 25px;\n  color: black;\n  font-weight: bold;\n}\n\n.Spacing-div {\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n}\n\n#SearchBarDiv, #ItemsDiv {\n  margin-top: 13px;\n}\n\n.workouts {\n  transition: border 0.1s;\n  transition-timing-function: linear;\n  width: 300px;\n}\n\n#AddWorkout {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  float: right;\n}\n\n#workout-searchbar {\n  font-family: \"SF Pro Medium\", serif;\n  height: 40px;\n  --placeholder-font-weight: 590;\n  color: #707074;\n  --background: #e7e7e8;\n}\n\n#nav-div {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  align-content: center;\n  align-items: center;\n}\n\n.kenzo-fixed {\n  position: fixed;\n  top: 100px;\n  right: 5px;\n  z-index: 100;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  padding-top: 10px;\n}\n\n.editBtn {\n  display: block;\n  --background: none;\n  --background-hover: none;\n  --color: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n}\n\n.navThumbnail {\n  display: block;\n  float: left;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n}\n\n.NavButtons {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.NavLabel {\n  display: block;\n  float: left;\n  font-size: 15px;\n  margin-left: 45%;\n  margin-right: auto;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.shareBtn {\n  display: block;\n  background: none;\n  color: var(--ion-color-tertiary);\n}\n\n.shareBtn:hover {\n  color: var(--ion-color-primary);\n  background-activated: none;\n}\n\nion-card {\n  cursor: default;\n}\n\nion-card ion-card-header ion-card-title {\n  --color: var(--ion-color-tertiary);\n  overflow-x: hidden;\n}\n\nion-card ion-card-content {\n  margin-top: 10px;\n  color: black;\n}\n\nion-slides {\n  --progress-bar-background: none;\n  --progress-bar-background-activated: none;\n  --bullet-background-active: var(--ion-color-tertiary);\n  --bullet-background: var(--ion-color-KT_BLACK);\n}\n\n.imagePose {\n  height: 150px;\n  width: 300px;\n  object-fit: cover;\n}\n\n.fabButton[data-desc] {\n  position: relative;\n}\n\n.fabButton[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 50px;\n  bottom: 8px;\n  color: var(--ion-color-tertiary);\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItd29ya291dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0NBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBTUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU1BO0VBWUUsZUFBQTtBQWRGOztBQUlJO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtBQUZOOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBU0E7RUFDRSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscURBQUE7RUFDQSw4Q0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5GIiwiZmlsZSI6InlvdXItd29ya291dHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlvdXItd29ya291dC1iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG59XG5cbiNXb3Jrb3V0SGVhZGluZ3tcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uU3BhY2luZy1kaXZ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IHZhcigtLWlucHV0LXdpZHRoKTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI1NlYXJjaEJhckRpdiwgI0l0ZW1zRGl2e1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi53b3Jrb3V0c3tcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuXG4jQWRkV29ya291dHtcbiAgICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jd29ya291dC1zZWFyY2hiYXJ7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTkwO1xuICAgIGNvbG9yOiAjNzA3MDc0O1xuICAgIC0tYmFja2dyb3VuZDogI2U3ZTdlODtcbn1cblxuI25hdi1kaXZ7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IHZhcigtLWlucHV0LXdpZHRoKTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY29udGFpbmVye1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ua2Vuem8tZml4ZWR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZm9vdGVye1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vYm9yZGVyLXJhZGl1czogdmFyKC0tc2Vjb25kYXJ5LXJhZGl1cyk7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVkaXRCdG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xufVxuXG4ubmF2VGh1bWJuYWlse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uTmF2QnV0dG9uc3tcbiAgICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uTmF2TGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbi50ZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24taWNvbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2hhcmVCdG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLnNoYXJlQnRuOmhvdmVye1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbn1cblxuaW9uLWNhcmR7XG4gIGlvbi1jYXJkLWhlYWRlcntcbiAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmlvbi1zbGlkZXN7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLUtUX0JMQUNLKTtcbn1cblxuLmltYWdlUG9zZXtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuXG4uZmFiQnV0dG9uW2RhdGEtZGVzY10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmFiQnV0dG9uW2RhdGEtZGVzY106OmFmdGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1kZXNjKTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 1917:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/your-workouts/your-workouts.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"your-workout-background\">\n<div class=\"container\">\n  <div class=\"Spacing-div\">\n    <ion-label id=\"WorkoutHeading\" >Workouts</ion-label>\n    <div class=\"kenzo-fixed\">\n      <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button>\n          <ion-icon name=\"create\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"bottom\">\n            <ion-fab-button class=\"fabButton\" data-desc=\"Workout\">\n              <ion-icon name=\"body-outline\" class=\"icons\" routerLink=\"/create-workout\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n      </ion-fab>\n    </div>\n  </div>\n  <div class=\"Spacing-div\" id=\"SearchBarDiv\">\n    <ion-searchbar  #searchbar (ionInput)=\"eventHandler($event)\" id=\"workout-searchbar\" mode=\"ios\" inputmode=\"search\"></ion-searchbar>\n  </div>\n      <ion-row class=\"ion-justify-content-center\">\n        <span *ngFor=\"let workout of workouts\">\n            <ion-card mode=\"ios\" class=\"workouts\" id=\"{{workout.workoutID}}\">\n              <ion-slides scrollbar=\"true\" pager=\"true\" options=\"slideOpts\">\n                <ion-slide *ngFor=\"let img of workout.images;\">\n                   <img class=\"imagePose\" [src]=\"img\" alt=\"Exercise Pose Image Missing\">\n                </ion-slide>\n              </ion-slides>\n              <ion-card-header>\n                <ion-card-title>{{ workout.title }}</ion-card-title>\n              </ion-card-header>\n<!--              <ion-card-content>{{ workout.description}}</ion-card-content>-->\n              <ion-item>\n                <ion-button slot=\"start\" size=\"medium\" mode=\"ios\" class=\"editBtn\" (click)=\"sendWorkoutID(workout.workoutID)\">Edit</ion-button>\n                <ion-icon slot=\"end\" size=\"medium\" name=\"download-outline\" class=\"shareBtn\" (click)=\"getPDF(workout.workoutID)\"></ion-icon>\n                <ion-icon slot=\"end\" size=\"medium\" name=\"share-outline\" class=\"shareBtn\" (click)=\"shareMedia(workout.workoutID)\"></ion-icon>\n              </ion-item>\n\n              </ion-card>\n        </span>\n      </ion-row>\n</div>\n</ion-content>\n<ion-tab-bar mode=\"md\" slot=\"bottom\">\n  <ion-tab-button>\n    <ion-label>Workouts</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clipboard_activated.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToSearch()\">\n    <ion-label>Exercises</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Library.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToClients()\">\n    <ion-label>Clients</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clients.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToProfile()\">\n    <ion-label>Settings</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Setting.svg\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_your-workouts_your-workouts_page_ts.js.map