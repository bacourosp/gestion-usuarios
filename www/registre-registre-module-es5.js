function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registre-registre-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registre/registre.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registre/registre.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistreRegistrePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n  <form #form=\"ngForm\" (ngSubmit)=\"registry(form)\">\n    <div id=\"container\">\n      <ion-grid class=\"ion-align-items-center\" >\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col  class=\"ion-align-self-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle class=\"ion-text-center\">backend less</ion-card-subtitle>\n            <ion-card-title class=\"ion-text-center\">REGISTRO API REST</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            <div class=\"ion-padding\">\n              <ion-item> \n                <ion-input name=\"name\" type=\"text\" placeholder=\"nombre\" ngModel required maxlength></ion-input>\n              </ion-item>\n              <ion-item> \n                <ion-input name=\"email\" type=\"email\" placeholder=\"tu@email.com\" ngModel required email></ion-input>\n              </ion-item>\n              <ion-item> \n                <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div class=\"ion-padding\">\n              <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">REGISTRO</ion-button>\n            </div>\n            <br>\n            <div class=\"ion-padding\">\n              <p class=\"ion-text-center\" color=\"primary\" (click)=\"goLogin()\">¿Ya tiene tus credenciales?</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    </div>\n  \n</form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/registre/registre-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registre/registre-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistrePageRoutingModule */

  /***/
  function srcAppRegistreRegistreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrePageRoutingModule", function () {
      return RegistrePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _registre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registre.page */
    "./src/app/registre/registre.page.ts");

    var routes = [{
      path: '',
      component: _registre_page__WEBPACK_IMPORTED_MODULE_3__["RegistrePage"]
    }];

    var RegistrePageRoutingModule = function RegistrePageRoutingModule() {
      _classCallCheck(this, RegistrePageRoutingModule);
    };

    RegistrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registre/registre.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/registre/registre.module.ts ***!
    \*********************************************/

  /*! exports provided: RegistrePageModule */

  /***/
  function srcAppRegistreRegistreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrePageModule", function () {
      return RegistrePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registre-routing.module */
    "./src/app/registre/registre-routing.module.ts");
    /* harmony import */


    var _registre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registre.page */
    "./src/app/registre/registre.page.ts");

    var RegistrePageModule = function RegistrePageModule() {
      _classCallCheck(this, RegistrePageModule);
    };

    RegistrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registre_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrePageRoutingModule"]],
      declarations: [_registre_page__WEBPACK_IMPORTED_MODULE_6__["RegistrePage"]]
    })], RegistrePageModule);
    /***/
  },

  /***/
  "./src/app/registre/registre.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/registre/registre.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistreRegistrePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu {\n  display: none !important;\n}\n\n/* ion-row {\n   padding-top: 40%;\n} */\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWQvdGVzdEZpcmVCYXNlL3NyYy9hcHAvcmVnaXN0cmUvcmVnaXN0cmUucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3RyZS9yZWdpc3RyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBOztHQUFBOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyZS9yZWdpc3RyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBpb24tcm93IHtcbiAgIHBhZGRpbmctdG9wOiA0MCU7XG59ICovXG5cbiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH0iLCJpb24tbWVudSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogaW9uLXJvdyB7XG4gICBwYWRkaW5nLXRvcDogNDAlO1xufSAqL1xuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/registre/registre.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/registre/registre.page.ts ***!
    \*******************************************/

  /*! exports provided: RegistrePage */

  /***/
  function srcAppRegistreRegistrePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrePage", function () {
      return RegistrePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegistrePage = /*#__PURE__*/function () {
      function RegistrePage(menu, userService, router) {
        _classCallCheck(this, RegistrePage);

        this.menu = menu;
        this.userService = userService;
        this.router = router;
      }

      _createClass(RegistrePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.menu.enable(false);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "registry",
        value: function registry(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.userService.registry(form.form.value.name, form.form.value.email, form.form.value.password);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.router.navigate(['login']);
        }
      }]);

      return RegistrePage;
    }();

    RegistrePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegistrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registre',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registre.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registre/registre.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registre.page.scss */
      "./src/app/registre/registre.page.scss"))["default"]]
    })], RegistrePage);
    /***/
  }
}]);
//# sourceMappingURL=registre-registre-module-es5.js.map