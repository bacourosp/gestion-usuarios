(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon (click)=\"logout()\" class=\"ion-padding\" name=\"power-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n    \n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Listado de Usuarios:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n         <ion-item *ngFor=\"let user of users\">\n          <ion-avatar slot=\"start\">\n          <img src=\"../../assets/default-avatar.png\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{user.name}}</h2>\n          <p>{{user.email}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          {{user.userStatus}}\n        </ion-note>\n      </ion-item> \n      </ion-card-content>\n    </ion-card>\n    <ion-list>\n      \n      \n    <!-- Multi-line sliding item with icon options on both sides  \n      <ion-item-sliding  id=\"item100\" href=\"#\">\n        <ion-item   >\n          <ion-label>\n            <h2>{{user.name}}</h2>\n            <p>{user.email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\">\n            {{user.userStatus}}\n          </ion-note>\n        </ion-item>\n     \n    \n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n          <ion-item-option>\n            <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>-->\n    \n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n/* #container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n} */\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-item {\n  padding: 2px;\n  margin: 2px;\n  border: solid #65636388;\n}\n\nion-card {\n  border: solid 2px #65636388;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWQvdGVzdEZpcmVCYXNlL3NyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTs7Ozs7OztHQUFBOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qICNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59ICovXG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlcjogc29saWQgIzY1NjM2Mzg4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogc29saWQgMnB4ICM2NTYzNjM4ODtcbn0iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiAjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSAqL1xuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyOiBzb2xpZCAjNjU2MzYzODg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzY1NjM2Mzg4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/storage.service */ "./src/app/api/storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _api_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/loading.service */ "./src/app/api/loading.service.ts");








let FolderPage = class FolderPage {
    constructor(menu, userService, alertController, loadingCtrl, router, storage, activatedRoute) {
        this.menu = menu;
        this.userService = userService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.users = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menu.enable(true);
            // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
            this.userService.validateLogin().subscribe((susses) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('this.userService.validateLogin');
                console.log(susses);
                if (susses === true) {
                    this.userService.getUser().subscribe((sussesGetUser) => {
                        console.log('sussesGetUser');
                        console.log(sussesGetUser);
                        this.users = sussesGetUser;
                    }, (error) => {
                        console.log('error');
                        console.log(error);
                    });
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Información',
                        subHeader: 'Ya ha expirado la sesión',
                        message: 'Por favor, Inicia sesión nuevamente!',
                        backdropDismiss: false,
                        buttons: ['OK']
                    });
                    yield alert.present();
                    this.router.navigate(['login']);
                }
            }));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.menu.enable(true);
        });
    }
    logout() {
        this.userService.logout().pipe().subscribe((susses) => {
            this.storage.save(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].session, susses);
            this.router.navigate(['login']);
        }, (error) => {
            console.log('error logout');
            console.log(error);
        });
    }
};
FolderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _api_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map