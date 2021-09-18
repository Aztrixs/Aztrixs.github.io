(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["src_app_client-list_client-list_module_ts"],{

/***/ 7364:
/*!**********************************!*\
  !*** ./src/app/Models/client.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client)
/* harmony export */ });
class Client {
    constructor(firstName, lastName, email, contactID) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._contactID = contactID;
    }
    get contactID() {
        return this._contactID;
    }
    set contactID(value) {
        this._contactID = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}


/***/ }),

/***/ 6245:
/*!**********************************************************!*\
  !*** ./src/app/Services/ClientService/client.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);




let ClientService = class ClientService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
    }
    /**
     * This function gets the list of all clients associated with a planner
     *
     * @author Luca Azmanov, u19004185
     */
    getClientList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/getAllPlannersContacts";
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
     * This function accepts a client object in order to add the client to the planner's list.
     *
     * @param client represents the details of the client being added
     * @return status is the code of the response
     * @author Luca Azmanov, u19004185
     */
    addClient(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/createClientContact";
            const body = {
                contactEmail: client.email,
                name: client.firstName,
                surname: client.lastName
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Deletes a client contact given the client ID
     *
     * @param id is the contactID
     * @return status is the code of the response
     * @author Luca Azmanov, u19004185
     */
    removeClient(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/deleteClientContact";
            const body = {
                contactID: id,
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
     * Updates client's credentials based on client object provided.
     *
     * @param client is the client credentials used for updating
     * @return status is the code of the response
     * @author Luca Azmanov, u19004185
     */
    updateClient(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/updateClientContact";
            const body = {
                contactID: client.contactID,
                email: client.email,
                name: client.firstName,
                surname: client.lastName
            };
            return this.http.put(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's PDF to all clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf from
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailAllClientsPDF(workoutID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsPDFToAllContacts";
            const body = {
                workoutID: workoutID
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's video to all clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf from
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailAllClientsVideo(workoutID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsVideoToAllContacts";
            const body = {
                workoutID: workoutID
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's PDF and video to all clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf and video from
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailAllClientsMedia(workoutID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsMultimediaToAllContacts";
            const body = {
                workoutID: workoutID
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's PDF to selected clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf from
     * @param clients is an array of the selected clients
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailClientsPDF(workoutID, contact) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsPDFToContacts";
            const body = {
                contacts: contact,
                workoutID: workoutID,
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's video to selected clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf from
     * @param clients is an array of the selected clients
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailClientsVideo(workoutID, contact) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsVideoToContacts";
            const body = {
                contacts: contact,
                workoutID: workoutID,
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
    /**
     * Send an email of the workout's PDF and video to selected clients of the planner.
     *
     * @param workoutID is the id of the workout to get the pdf from
     * @param clients is an array of the selected clients
     * @return status is the code of the response
     * @author Jia Hui Wang, u18080449
     */
    attemptEmailClientsMedia(workoutID, contact) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiURL + "/client-contact/sendEmailsMultimediaToContacts";
            const body = {
                contacts: contact,
                workoutID: workoutID,
            };
            return this.http.post(url, body).toPromise().then(() => 200).catch(error => {
                if (error.status === 0) {
                    return 500;
                }
                return error.status;
            });
        });
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
    })
], ClientService);



/***/ }),

/***/ 3009:
/*!***********************************************************!*\
  !*** ./src/app/client-list/client-list-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientListPageRoutingModule": () => (/* binding */ ClientListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _client_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-list.page */ 5412);




const routes = [
    {
        path: "",
        component: _client_list_page__WEBPACK_IMPORTED_MODULE_0__.ClientListPage
    }
];
let ClientListPageRoutingModule = class ClientListPageRoutingModule {
};
ClientListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientListPageRoutingModule);



/***/ }),

/***/ 4571:
/*!***************************************************!*\
  !*** ./src/app/client-list/client-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientListPageModule": () => (/* binding */ ClientListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _client_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-list-routing.module */ 3009);
/* harmony import */ var _client_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-list.page */ 5412);







let ClientListPageModule = class ClientListPageModule {
};
ClientListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _client_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientListPageRoutingModule
        ],
        declarations: [_client_list_page__WEBPACK_IMPORTED_MODULE_1__.ClientListPage]
    })
], ClientListPageModule);



/***/ }),

/***/ 5412:
/*!*************************************************!*\
  !*** ./src/app/client-list/client-list.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientListPage": () => (/* binding */ ClientListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_client_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./client-list.page.html */ 5986);
/* harmony import */ var _client_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-list.page.scss */ 7320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _Models_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/client */ 7364);
/* harmony import */ var _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ClientService/client.service */ 6245);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);








let ClientListPage = class ClientListPage {
    constructor(router, clientService, alertController) {
        this.router = router;
        this.clientService = clientService;
        this.alertController = alertController;
        this._name = "";
        this._surname = "";
        this._email = "";
        this._contactID = "";
        this.getClients();
    }
    ngOnInit() {
    }
    /**
     * This function queries the user service to retrieve a list of clients for the logged in planner.
     *
     * @author Luca Azmanov, u19004185
     */
    getClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.clientService.getClientList();
            const data = resp.data;
            // console.log(data);
            this._contacts = new Array();
            this._contactsOriginal = new Array();
            for (let i = 0; i < data.length; i++) {
                this._contacts[i] = new _Models_client__WEBPACK_IMPORTED_MODULE_2__.Client(data[i].name, data[i].surname, data[i].contactEmail, data[i].contactId);
                this._contactsOriginal[i] = new _Models_client__WEBPACK_IMPORTED_MODULE_2__.Client(data[i].name, data[i].surname, data[i].contactEmail, data[i].contactId);
            }
        });
    }
    /**
     * Displays a form to fill in to create a contact
     *
     * @author Luca Azmanov, u19004185
     */
    createContact() {
        document.getElementById("create").style.display = "block";
        document.getElementById("list").style.display = "none";
    }
    /**
     * Displays a form to fill in to create a contact
     *
     * @param id is the contactID of the contact
     * @author Luca Azmanov, u19004185
     */
    editContact(id) {
        document.getElementById("edit").style.display = "block";
        document.getElementById("list").style.display = "none";
        document.getElementById("create").style.display = "none";
        for (let i = 0; i < this._contacts.length; i++) {
            if (this._contacts[i].contactID === id) {
                this._name = this._contacts[i].firstName;
                this._surname = this._contacts[i].lastName;
                this._email = this._contacts[i].email;
                this._contactID = id;
                break;
            }
        }
    }
    /**
     * Returns planner to list of contacts
     *
     * @author Luca Azmanov, u19004185
     */
    cancel() {
        document.getElementById("create").style.display = "none";
        document.getElementById("edit").style.display = "none";
        document.getElementById("list").style.display = "block";
    }
    /**
     * This function uses the user service to add a client to the planner's contact list
     *
     * @author Luca Azmanov, u19004185
     */
    submitContact() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const client = new _Models_client__WEBPACK_IMPORTED_MODULE_2__.Client(this._name, this._surname, this._email, "");
            const resp = yield this.clientService.addClient(client);
            if (resp >= 200 && resp < 300) {
                yield this.router.navigate(["/client-list"])
                    .then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (resp >= 400 && resp < 500) {
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not create contact",
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
     * This function uses the user service to update a client's credentials
     *
     * @author Luca Azmanov, u19004185
     */
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const client = new _Models_client__WEBPACK_IMPORTED_MODULE_2__.Client(this._name, this._surname, this._email, this._contactID);
            const status = yield this.clientService.updateClient(client);
            if (status < 400) {
                // Success State
                this.router.navigate(["/client-list"]).then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Input
                const alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not update contact",
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
     * This function uses the user service to remove a client
     *
     * @author Luca Azmanov, u19004185
     */
    remove() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let confirmation = false;
            let alert = yield this.alertController.create({
                cssClass: "kenzo-alert",
                header: "Are you sure you would like to delete this contact?",
                buttons: [{ text: "Delete",
                        handler: () => {
                            confirmation = true;
                        } }, "Cancel"]
            });
            yield this.presentAlert(alert);
            if (!confirmation) {
                return;
            }
            const status = yield this.clientService.removeClient(this._contactID);
            console.log(" hi " + status);
            if (status < 300) {
                // Success State
                this.router.navigate(["/client-list"]).then(() => {
                    this.reloadWindow();
                });
                return 200;
            }
            else if (status >= 400 && status < 500) {
                // Invalid Input
                alert = yield this.alertController.create({
                    cssClass: "kenzo-alert",
                    header: "Could not delete contact",
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
    goToSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(["/search"])
                .then(() => {
                window.location.reload();
            });
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
    /**
     * This function is activated on a key press in the search bar.
     * The purpose is to present contacts that match the search requirements
     *
     * @author Luca Azmanov, u19004185
     */
    search(event) {
        this._contacts = this._contactsOriginal;
        const result = event.srcElement.value.trim().toLowerCase();
        const resultArray = new Array();
        if (result === "") {
            return;
        }
        for (let i = 0; i < this._contacts.length; i++) {
            if (this._contacts[i].firstName.toLowerCase().trim().includes(result)) {
                resultArray.push(this._contacts[i]);
                continue;
            }
            if (this._contacts[i].lastName.toLowerCase().trim().includes(result)) {
                resultArray.push(this._contacts[i]);
                continue;
            }
            if (this._contacts[i].email.toLowerCase().trim().includes(result)) {
                resultArray.push(this._contacts[i]);
            }
        }
        this._contacts = resultArray;
        if (this._contacts.length === 0) { //no results
            document.getElementById("no-results").style.display = "block";
        }
        else {
            document.getElementById("no-results").style.display = "none";
        }
    }
    //Helper Functions
    reloadWindow() {
        window.location.reload();
    }
    get contacts() {
        return this._contacts;
    }
    set contacts(value) {
        this._contacts = value;
    }
    get contactsOriginal() {
        return this._contactsOriginal;
    }
    set contactsOriginal(value) {
        this._contactsOriginal = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get contactID() {
        return this._contactID;
    }
    set contactID(value) {
        this._contactID = value;
    }
};
ClientListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ClientListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-client-list",
        template: _raw_loader_client_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_client_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientListPage);



/***/ }),

/***/ 7320:
/*!***************************************************!*\
  !*** ./src/app/client-list/client-list.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".your-workout-background {\n  --background: var(--ion-off-white);\n}\n\n.NavLabel {\n  display: block;\n  float: left;\n  font-size: 15px;\n  margin-left: 45%;\n  margin-right: auto;\n}\n\n.your-workout-background {\n  --background: var(--ion-off-white);\n}\n\n#client-heading {\n  font-family: \"SF Pro Medium\", serif;\n  font-size: 25px;\n  color: black;\n  font-weight: bold;\n}\n\n.Spacing-div {\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n}\n\n#SearchBarDiv, #ItemsDiv {\n  margin-top: 13px;\n}\n\n.workouts {\n  margin-bottom: 5.5%;\n  transition: border 0.1s;\n  transition-timing-function: linear;\n}\n\n.workouts:hover {\n  cursor: pointer;\n  border: 3px;\n  border-color: #FF6969;\n  border-style: ridge;\n}\n\n#AddWorkout {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  float: right;\n}\n\n#searchbar {\n  font-family: \"SF Pro Medium\", serif;\n  height: 40px;\n  --placeholder-font-weight: 590;\n  color: #707074;\n  --background: #e7e7e8;\n}\n\n#nav-div {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  width: var(--input-width);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container {\n  align-content: center;\n  align-items: center;\n}\n\n.kenzo-fixed {\n  position: fixed;\n  top: 100px;\n  right: 5px;\n  z-index: 100;\n}\n\n.footer {\n  --background: var(--ion-off-white);\n  padding-top: 10px;\n}\n\n.editBtn {\n  --background: none;\n  --color: var(--ion-color-tertiary);\n  --background-hover: none;\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n  display: block;\n}\n\n.navThumbnail {\n  display: block;\n  float: left;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n}\n\n.NavButtons {\n  width: var(--icon-size);\n  height: var(--icon-size);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.NavLabel {\n  display: block;\n  float: left;\n  font-size: 15px;\n  margin-left: 45%;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 400px) {\n  .NavLabel {\n    margin-left: 25%;\n  }\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.fabButton[data-desc] {\n  position: relative;\n}\n\n.fabButton[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 50px;\n  bottom: 8px;\n  color: var(--ion-color-tertiary);\n  font-size: 16px;\n  font-weight: bold;\n}\n\nion-card {\n  width: 300px;\n  cursor: default;\n}\n\nion-card ion-card-header {\n  --background: var(--ion-color-tertiary);\n}\n\nion-card ion-card-header ion-card-title {\n  --color: var(--ion-off-white);\n}\n\nion-card ion-card-header ion-card-subtitle {\n  --color: var(--ion-off-white);\n}\n\nion-card ion-card-content {\n  margin-top: 10px;\n  color: black;\n}\n\n.options {\n  display: block;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.kenzo-input {\n  font-family: \"SF Pro Regular\", serif;\n  display: block;\n  height: 50px;\n  border-radius: 9px;\n  background-color: white;\n  color: var(--ion-color-tertiary);\n  --padding-start: 10px;\n  --padding-top: 15px;\n  border: solid 0.5px var(--ion-color-tertiary);\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 98%;\n}\n\n#create, #edit {\n  display: none;\n}\n\n.create-card {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.no-results {\n  color: var(--ion-color-medium-shade);\n  width: 100%;\n  display: none;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQWtCQSxlQUFBO0FBbkJGOztBQUVDO0VBQ0UsdUNBQUE7QUFBSDs7QUFFRztFQUNFLDZCQUFBO0FBQUw7O0FBR0c7RUFDRSw2QkFBQTtBQURMOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVNBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GIiwiZmlsZSI6ImNsaWVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55b3VyLXdvcmtvdXQtYmFja2dyb3VuZHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbn1cblxuLk5hdkxhYmVse1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ueW91ci13b3Jrb3V0LWJhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG59XG5cbiNjbGllbnQtaGVhZGluZ3tcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIE1lZGl1bVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uU3BhY2luZy1kaXZ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogdmFyKC0taW5wdXQtd2lkdGgpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jU2VhcmNoQmFyRGl2LCAjSXRlbXNEaXZ7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi53b3Jrb3V0c3tcbiAgbWFyZ2luLWJvdHRvbTogNS41JTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi53b3Jrb3V0czpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAjRkY2OTY5O1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xufVxuXG4jQWRkV29ya291dHtcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jc2VhcmNoYmFye1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gTWVkaXVtXCIsIHNlcmlmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDU5MDtcbiAgY29sb3I6ICM3MDcwNzQ7XG4gIC0tYmFja2dyb3VuZDogI2U3ZTdlODtcbn1cblxuI25hdi1kaXZ7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBSZWd1bGFyXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IHZhcigtLWlucHV0LXdpZHRoKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5jb250YWluZXJ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmtlbnpvLWZpeGVke1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmZvb3RlcntcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb2ZmLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLy9ib3JkZXItcmFkaXVzOiB2YXIoLS1zZWNvbmRhcnktcmFkaXVzKTtcbiAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAvL21hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5lZGl0QnRue1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZTtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdlRodW1ibmFpbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjUlO1xufVxuXG4uTmF2QnV0dG9uc3tcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5OYXZMYWJlbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gIC5OYXZMYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG59XG5cbi50ZXh0e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mYWJCdXR0b25bZGF0YS1kZXNjXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mYWJCdXR0b25bZGF0YS1kZXNjXTo6YWZ0ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogYXR0cihkYXRhLWRlc2MpO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZHtcbiAgd2lkdGg6IDMwMHB4O1xuIGlvbi1jYXJkLWhlYWRlcntcbiAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcblxuICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgIC0tY29sb3I6IHZhcigtLWlvbi1vZmYtd2hpdGUpO1xuICAgfVxuXG4gICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgLS1jb2xvcjogdmFyKC0taW9uLW9mZi13aGl0ZSk7XG4gICB9XG4gfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5vcHRpb25ze1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5rZW56by1pbnB1dHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFJlZ3VsYXJcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDk4JTtcbn1cblxuI2NyZWF0ZSwgI2VkaXR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcmVhdGUtY2FyZHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5vLXJlc3VsdHN7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 5986:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client-list/client-list.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content id=\"list\" class=\"your-workout-background\">\n  <div class=\"Spacing-div\">\n    <ion-label id=\"client-heading\">Clients</ion-label>\n  </div>\n  <div class=\"Spacing-div\" id=\"SearchBarDiv\">\n    <ion-searchbar (ionInput)=\"search($event)\" id=\"searchbar\" mode=\"ios\" inputmode=\"search\"></ion-searchbar>\n    <ion-label class=\"no-results\" id=\"no-results\">No contacts found!</ion-label>\n  </div>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"createContact()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-row class=\"ion-justify-content-center\">\n      <span *ngFor=\"let client of contacts\">\n        <ion-card mode=\"ios\">\n          <ion-card-header>\n            <ion-card-subtitle>Contact</ion-card-subtitle>\n            <ion-card-title>{{client.firstName}} {{client.lastName}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{client.email}}\n          </ion-card-content>\n          <ion-item>\n            <ion-button size=\"medium\" mode=\"ios\" class=\"editBtn\" (click)=\"editContact(client.contactID)\">Edit</ion-button>\n          </ion-item>\n        </ion-card>\n      </span>\n    </ion-row>\n</ion-content>\n<ion-content id=\"create\" class=\"your-workout-background\">\n  <ion-card class=\"create-card\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        Contact\n      </ion-card-subtitle>\n      <ion-card-title>\n        Add Client\n      </ion-card-title>\n    </ion-card-header>\n    <br>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"name\" placeholder=\"First name\"></ion-input>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"surname\" placeholder=\"Last name\"></ion-input>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n    <br>\n    <ion-item class=\"options\" >\n      <ion-button size=\"medium\" mode=\"ios\" slot=\"start\" (click)=\"cancel()\" class=\"editBtn\">Cancel</ion-button>\n      <ion-button (click)=\"submitContact()\" size=\"medium\" mode=\"ios\" slot=\"end\" class=\"editBtn\">Create</ion-button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n<ion-content id=\"edit\" class=\"your-workout-background\">\n  <ion-card class=\"create-card\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        Contact\n      </ion-card-subtitle>\n      <ion-card-title>\n        Edit Client\n      </ion-card-title>\n    </ion-card-header>\n    <br>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"name\" placeholder=\"First name\"></ion-input>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"surname\" placeholder=\"Last name\"></ion-input>\n    <ion-input class=\"kenzo-input\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n    <br>\n    <ion-item class=\"options\" >\n      <ion-button (click)=\"cancel()\" size=\"medium\" mode=\"ios\" class=\"editBtn\" >Cancel</ion-button>\n      <ion-button (click)=\"update()\" slot=\"end\" size=\"medium\" class=\"editBtn\">Update</ion-button>\n      <ion-button (click)=\"remove()\" size=\"medium\" color=\"danger\" class=\"editBtn\">Delete</ion-button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n<ion-tab-bar mode=\"md\" slot=\"bottom\">\n  <ion-tab-button (click)=\"goToFYP()\">\n    <ion-label>Workouts</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clipboard.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToSearch()\">\n    <ion-label>Exercises</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Library.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button>\n    <ion-label>Clients</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Clients_activated.svg\"></ion-icon>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"goToProfile()\">\n    <ion-label>Settings</ion-label>\n    <ion-icon src=\"assets/clipart_svg/Setting.svg\"></ion-icon>\n  </ion-tab-button>\n</ion-tab-bar>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_client-list_client-list_module_ts.js.map