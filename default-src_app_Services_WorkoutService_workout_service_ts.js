(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["default-src_app_Services_WorkoutService_workout_service_ts"],{

/***/ 8238:
/*!************************************************************!*\
  !*** ./src/app/Services/WorkoutService/workout.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutService": () => (/* binding */ WorkoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _UserService_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UserService/user.service */ 2993);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);





let WorkoutService = class WorkoutService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL;
    }
    /** This function attempts to submit a workout by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param workout represents a Workout Object that will hold the necessary data for creating a workout.
     *
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptSubmitWorkout(workout, exercises, loop, genre, width, height) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/createWorkout";
            const body = {
                workoutTitle: workout.title,
                workoutDescription: workout.description,
                exercises: exercises,
                loop: loop,
                songChoice: genre,
                resolutionWidth: width,
                resolutionHeight: height
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /** This function attempts to update a workout by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param workout represents a Workout Object that will hold the necessary data for creating a workout.
     * @param id the id corresponding to the workout
     *
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptUpdateWorkout(workout, id, exercises, loop, genre, width, height) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/updateWorkout";
            const body = {
                workoutID: id,
                workoutTitle: workout.title,
                workoutDescription: workout.description,
                exercises: exercises,
                loop: loop,
                songChoice: genre,
                resolutionWidth: width,
                resolutionHeight: height
            };
            return this.http.put(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /** This function attempts to remove a workout by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param id the id corresponding to the workout
     *
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptRemoveWorkout(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/deleteWorkout";
            const body = {
                workoutID: id,
            };
            return this.http.request("delete", url, { body }).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /** This function attempts to submit an exercise by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param exercise represents an Exercise Object that will hold the necessary data for creating an exercise.
     *
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptSubmitExercise(exercise) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/createExercise";
            const body = {
                exerciseTitle: exercise.title,
                exerciseDescription: exercise.description,
                repRange: exercise.repRange,
                sets: exercise.sets,
                poseDescription: exercise.poseDescription,
                restPeriod: exercise.restPeriod,
                tags: exercise.tags,
                duration: exercise.duratime,
                images: exercise.images
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /** This function attempts to update an exercise by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param exercise represents an Exercise Object that will hold the necessary data for creating an exercise.
     * @param id the id corresponding to the exercise
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptUpdateExercise(exercise, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/updateExercise";
            const body = {
                exerciseID: id,
                exerciseTitle: exercise.title,
                exerciseDescription: exercise.description,
                repRange: exercise.repRange,
                sets: exercise.sets,
                poseDescription: exercise.poseDescription,
                restPeriod: exercise.restPeriod,
                tags: exercise.tags,
                duration: exercise.duratime,
                images: exercise.images
            };
            return this.http.put(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /** This function attempts to submit an exercise by using the following parameters:
     *
     * @author Luca Azmanov, u19004185
     * @param id the id corresponding to the exercise
     * @return Number represents the status of the Http request.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     */
    attemptRemoveExercise(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/deleteExercise";
            const body = {
                exerciseID: id,
            };
            return this.http.request("delete", url, { body }).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * This function attempts to obtain all the workouts in the database from the endpoint provided.
     *
     * @returns 200,400,500 represent a success, User error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetWorkouts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getWorkouts";
            return this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(err => err);
        });
    }
    /**
     * This function attempts to obtain all the exercises in the database from the endpoint provided.
     *
     * @returns 200,404,500 represent a success, not found error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetExercises() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getExercises";
            return this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(err => err);
        });
    }
    /**
     * This function attempts to obtain all the workouts in the database for a specific planner from the endpoint provided.
     *
     * @returns 200,404,500 represent a success, not found error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetWorkoutsByPlanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getWorkoutByPlanner";
            return this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(error => {
                if (error.status === 0 || error.status === 500) {
                    return 500;
                }
                return 404;
            });
        });
    }
    /**
     * This function attempts to obtain all the exercises in the database for a specific planner from the endpoint provided.
     *
     * @returns 200,404,500 represent a success, not found error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetExercisesByPlanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getExercisesByPlanner";
            return this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(error => {
                if (error.status === 0 || error.status === 500) {
                    return 500;
                }
                return 404;
            });
        });
    }
    /**
     * This function attempts to obtain the PDF of a specific workout based on the ID passed in from the endpoint provided.
     *
     * @param id unique ID of the workout
     * @returns 200,404,500 represent a success, not found error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetPDF(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getWorkoutPDF/" + id;
            return yield this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(error => {
                if (error.status >= 200 && error.status < 300) {
                    error = {
                        status: 200,
                        data: error.error.text
                    };
                    return error;
                }
                else if (error.status === 0 || error.status === 500) {
                    return 500;
                }
                else {
                    return 404;
                }
            });
        });
    }
    /**
     * This function attempts to obtain the video of a specific workout based on the ID passed in from the endpoint provided.
     *
     * @param id unique ID of the workout
     * @returns 200,404,500 represent a success, not found error and server error, respectively.
     * @author Jia Hui Wang, u18080449
     */
    attemptGetVideo(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getWorkoutVideo/" + id;
            return yield this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(error => {
                if (error.status >= 200 && error.status < 300) {
                    error = {
                        status: 200,
                        data: error.error.text
                    };
                    return error;
                }
                else if (error.status === 0 || error.status === 500) {
                    return 500;
                }
                else if (error.status === 400) {
                    return 400;
                }
                else {
                    return 404;
                }
            });
        });
    }
    getTags() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/workout/getTags";
            return this.http.get(url).toPromise().then(data => {
                data = {
                    status: 200,
                    data: data
                };
                return data;
            }).catch(error => {
                if (error.status === 0 || error.status === 500) {
                    return 500;
                }
                return 404;
            });
        });
    }
};
WorkoutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _UserService_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
WorkoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root"
    })
], WorkoutService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_Services_WorkoutService_workout_service_ts.js.map