(self["webpackChunkkenzo_workout_suite"] = self["webpackChunkkenzo_workout_suite"] || []).push([["default-src_app_modal-popup_modal-popup_page_ts"],{

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

/***/ 3041:
/*!*************************************************!*\
  !*** ./src/app/modal-popup/modal-popup.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupPage": () => (/* binding */ ModalPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_popup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-popup.page.html */ 924);
/* harmony import */ var _modal_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-popup.page.scss */ 9335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/ClientService/client.service */ 6245);






let ModalPopupPage = class ModalPopupPage {
    constructor(modalController, clientService) {
        this.modalController = modalController;
        this.clientService = clientService;
        this.name = "";
        this.surname = "";
        this.contactEmail = "";
        this.contactID = "";
        this.isChecked = false;
        this.plannerID = "";
    }
    ngOnInit() {
        this.loadClients();
    }
    loadClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resp = yield this.clientService.getClientList();
            const data = resp.data;
            this._contacts = new Array();
            this._contactsOriginal = new Array();
            for (let i = 0; i < data.length; i++) {
                this.name = data[i].name;
                this.surname = data[i].surname;
                this.contactEmail = data[i].contactEmail;
                this.contactID = data[i].contactId;
                this.plannerID = data[i].plannerID;
                this.isChecked = false;
                this._contacts[i] = {
                    contactID: this.contactID,
                    contactEmail: this.contactEmail,
                    name: this.name,
                    surname: this.surname,
                    plannerID: this.plannerID
                };
                //this._contactsOriginal[i] = new Contact(this.contactID, this.contactEmail, this.name, this.surname, this.plannerID);
                this._contactsOriginal[i] = {
                    contactId: this.contactID,
                    contactEmail: this.contactEmail,
                    name: this.name,
                    surname: this.surname,
                    plannerID: this.plannerID
                };
            }
        });
    }
    /**
     * Submit the selected contacts
     *
     * @author Jia Hui Wang u18080449
     */
    submitModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let contactsCounter = 0;
            this._submittedContacts = new Array();
            for (let i = 0; i < this._contacts.length; i++) {
                if (this._contacts[i].isChecked) {
                    this._submittedContacts[contactsCounter] = this._contactsOriginal[i];
                    contactsCounter++;
                }
            }
            if (contactsCounter === 0) {
                alert("You need to select contacts or cancel if you wish to cancel the operation. ");
            }
            else if (contactsCounter === this._contacts.length) {
                yield this.modalController.dismiss("Submit all");
            }
            else {
                yield this.modalController.dismiss(this._submittedContacts);
            }
        });
    }
    /**
     * Cancelling the contact selection
     *
     * @author Jia Hui Wang u18080449
     */
    cancelModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss("Cancelled");
        });
    }
    /**
     * Function to select all the contacts in the list if the top button is clicked, or deselect all of them
     *
     * @author Jia Hui Wang, u18080449
     */
    selectAllContacts() {
        const allCheck = document.getElementById("contactsCbx");
        const allContacts = document.getElementsByClassName("contactSelection");
        if (!allCheck.checked) {
            for (let i = 0; i < this._contacts.length; i++) {
                const thisContact = allContacts.item(i);
                thisContact.checked = true;
                thisContact.disabled = true;
            }
        }
        else {
            for (let i = 0; i < this._contacts.length; i++) {
                const thisContact = allContacts.item(i);
                thisContact.checked = false;
                thisContact.disabled = false;
            }
        }
    }
};
ModalPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _Services_ClientService_client_service__WEBPACK_IMPORTED_MODULE_2__.ClientService }
];
ModalPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-modal-popup",
        template: _raw_loader_modal_popup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPopupPage);



/***/ }),

/***/ 9335:
/*!***************************************************!*\
  !*** ./src/app/modal-popup/modal-popup.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".cancelButton, .submitButton {\n  --background: none;\n  --background-hover: none;\n  --color: var(--ion-color-tertiary);\n  --color-hover: var(--ion-color-primary);\n  --background-activated: none;\n}\n\n.modalButtons {\n  display: block;\n  float: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoibW9kYWwtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbmNlbEJ1dHRvbiwgLnN1Ym1pdEJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbn1cblxuLm1vZGFsQnV0dG9uc3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBib3R0b207XG59XG4iXX0= */");

/***/ }),

/***/ 924:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-popup/modal-popup.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div>\n    <ion-item>\n      <ion-label>Select all contacts</ion-label>\n      <ion-checkbox id=\"contactsCbx\" (click)=\"selectAllContacts()\">Select all</ion-checkbox>\n    </ion-item>\n    <ion-infinite-scroll>\n    <ion-list>\n      <ion-item *ngFor=\"let contact of _contacts\" >\n        <ion-label>{{contact.contactEmail}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"contact.isChecked\" class=\"contactSelection\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    </ion-infinite-scroll>\n  </div>\n  <div class=\"modalButtons\">\n    <ion-button class=\"submitButton\" mode=\"ios\" (click)=\"submitModal()\">Submit</ion-button>\n    <ion-button class=\"cancelButton\" mode=\"ios\" (click)=\"cancelModal()\">Cancel</ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modal-popup_modal-popup_page_ts.js.map