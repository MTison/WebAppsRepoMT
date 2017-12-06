webpackJsonp(["main"],{

/***/ "../../../../../disc/Assets/Images/emailIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "emailIcon.3e63af602836783383fd.png";

/***/ }),

/***/ "../../../../../disc/Assets/Images/passwordIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "passwordIcon.47a5ef4429251caa48d0.png";

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainboard_mainboard_component__ = __webpack_require__("../../../../../src/app/mainboard/mainboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'mainboard', component: __WEBPACK_IMPORTED_MODULE_0__mainboard_mainboard_component__["a" /* MainboardComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events
            .pairwise()
            .subscribe(function (e) {
            //console.log(e[0].urlAfterRedirects);
            localStorage.setItem('previousUrl', e[0].urlAfterRedirects);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainboard_mainboard_component__ = __webpack_require__("../../../../../src/app/mainboard/mainboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainboard_createlist_createlist_component__ = __webpack_require__("../../../../../src/app/mainboard/createlist/createlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mainboard_allitems_allitems_component__ = __webpack_require__("../../../../../src/app/mainboard/allitems/allitems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mainboard_mylists_mylists_component__ = __webpack_require__("../../../../../src/app/mainboard/mylists/mylists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_alert_component__ = __webpack_require__("../../../../../src/app/directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mainboard_mainboard_component__["a" /* MainboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mainboard_createlist_createlist_component__["a" /* CreatelistComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mainboard_allitems_allitems_component__["a" /* AllitemsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mainboard_mylists_mylists_component__["a" /* MylistsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_alert_component__["a" /* AlertComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message!='' && message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n  <h4>{{message.text}}</h4><i class=\"close icon\" (click)=\"closeAlert()\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent.prototype.closeAlert = function () {
        this.message = '';
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginForm {\n    width: 40%;\n    height: auto;\n    margin: 12% 0% 0% 30%; /*top right bottom left*/\n}\n\n#loginIcon {\n    font-size: 18px;\n    margin: 0% 1% 0% 0%; /*top right bottom left*/\n}\n\n#usernameIcon,#passwordIcon {\n    font-size: 11px;\n}\n\n#loginTitle {\n    display: inline;\n}\n\n#loginRegisterBttns {\n    width: 60%;\n    margin: 0% 0% 0% 20%; /*top right bottom left*/\n}\n\n#loginBttn, #registerBttn {\n    font-size: 15px;\n    width: 30%;\n}\n\n#error {\n    background-color: rgba(255, 75, 75, 0.356);\n}\n\n#password {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/passwordIcon.png") + ");\n\tbackground-position: left;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<form class=\"ui large form segment\" id=\"loginForm\" #f='ngForm' (ngSubmit)='login()'>\n  <div class=\"field\">\n    <i class=\"bordered inverted black users icon\" id=\"loginIcon\"></i>\n    <h1 class=\"ui header\" id=\"loginTitle\">Login</h1>\n  </div>\n  <div class=\"field\">\n    <label for=\"name\"><i class=\"home icon\" id=\"usernameIcon\"></i>Username:</label> \n    <input id=\"name\" placeholder=\"example\" name=\"username\" [(ngModel)]='user.username' required pattern=\"[a-zA-Z0-9]*\" #username=\"ngModel\">\n    <div class=\"ui pointing label\" *ngIf=\"username.errors && username.dirty\" id=\"error\">\n        <div *ngIf=\"username.errors.required\">Username is required</div>\n        <div *ngIf=\"username.errors.pattern\">Username has unidentified characters</div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label for=\"password\"><i class=\"privacy icon\" id=\"passwordIcon\"></i>Password:</label> \n    <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]='user.password' required #password=\"ngModel\">\n    <div class=\"ui pointing label\" *ngIf=\"password.errors?.required && password.dirty\" id=\"error\">\n        Password is required\n    </div>\n  </div>\n  <div class=\"ui buttons\" id=\"loginRegisterBttns\" >\n    <button type=\"submit\" class=\"ui button\" id=\"loginBttn\" [disabled]='!f.valid'>Log in</button>\n    <div class=\"or\"></div>\n    <button class=\"ui blue button\" id=\"registerBttn\" (click)=\"register()\">Register</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, userService, authService, alertService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.alertService = alertService;
        this.user = {};
        this.allUsers = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("userCount"))
            localStorage.setItem("userCount", "0");
        console.log(localStorage.getItem("userCount"));
        this.userService.getAllUsers().subscribe(function (data) {
            if (data.length > parseInt(localStorage.getItem("userCount"))) {
                _this.alertService.success("You are registerd as " + data[parseInt(localStorage.getItem("userCount"))].username);
            }
            localStorage.setItem("userCount", data.length.toString());
            console.log(localStorage.getItem("userCount"));
        }, function (error) {
            _this.alertService.error(error);
        });
        //when the logincomponent is loaded we clear the localstorage of the user that was logged in before
        this.authService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            //if there is data we navigate to the mainboard with the user logged in
            _this.router.navigate(['/mainboard']);
        }, function (error) {
            //implementation alertService
            _this.alertService.error("Ongeldige inloggegevens");
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
        this.ngOnInit();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#allItemsContent {\n    width: 80%;\n    margin: 2% 0 2% 10%;\n}\n\n.searchBox {\n    float: right;\n    outline: none;\n    height: 55px;\n    width: 25%;\n    border: none;\n    background-color: #f1f1f1;\n    color: #707070;\n    font-size: 18px;\n    padding-left: 10px;\n}\n\n.ui.table thead th {\n    padding: 0;\n    height: 55px;\n}\n.ui.table thead th p {\n    margin: 2% 0 0 2%;\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"allItemsContent\">\n  <table class=\"ui celled striped table\">\n    <thead>\n      <tr>\n        <th colspan=\"3\">\n          <p>KIND OF ITEM</p>\n          <input type=\"text\" placeholder=\"search\" class=\"searchBox\"/>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of allItems; let i = index\">\n        <td>{{item._productName}}</td>\n        <td>{{item._mark}}</td>\n        <td class=\"right aligned collapsing\">{{item._productKind}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllitemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllitemsComponent = (function () {
    function AllitemsComponent() {
    }
    AllitemsComponent.prototype.ngOnInit = function () {
    };
    return AllitemsComponent;
}());
AllitemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-allitems',
        template: __webpack_require__("../../../../../src/app/mainboard/allitems/allitems.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/allitems/allitems.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AllitemsComponent);

//# sourceMappingURL=allitems.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#createListContent {\n    width: 80%;\n    margin: 2% 0 2% 10%;\n    height: 620px;\n}\n\n.addButton {\n    height: 35px;\n    width: 100%;\n    outline: none;\n    color: rgb(77, 133, 49);\n    background-color: rgba(115, 248, 106, 0.548);\n    font-size: 20px;\n    border: none;\n}\n.addButton:hover {\n    color: rgb(77, 133, 49);\n    background-color: rgb(115, 248, 106);\n    cursor: pointer;\n}\n.addbuttonColumn {\n    padding: 0 0 0 0;\n    width: 8%;\n    height: 40px;\n}\n\ntable tfoot tr th:first-child {\n    text-align: center;\n}\n\n#shopIcon {\n    font-size: 25px;\n    margin: 0 auto 0 auto;\n    width: 100%;\n}\n\n.ui.buttons {\n    margin-left: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"createListContent\">\n  <table class=\"ui compact celled definition table\">\n    <thead>\n      <tr>\n        <th><i class=\"shop icon\" id=\"shopIcon\"></i></th>\n        <th>Name</th>\n        <th>Mark</th>\n        <th>Kind</th>\n        <th>Found in</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of rangeItems; let i = index\">\n        <td class=\"addbuttonColumn\"><button class=\"addButton\">+</button></td>\n        <td>{{item}}</td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n    </tbody>\n    <tfoot class=\"full-width\">\n      <tr>\n        <th>{{items.length}}</th>\n        <th colspan=\"4\">\n          <div class=\"ui small button\">\n            Create list\n          </div>\n        </th>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n\n<div class=\"ui buttons\">\n    <div class=\"ui button {{page==activePage? 'active': ''}}\" *ngFor=\"let page of pages\" (click)=\"setPage(page)\">{{page}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatelistComponent = (function () {
    function CreatelistComponent() {
        this.items = [];
        this.rangeItems = [];
        this.pages = [];
        this.activePage = 0;
    }
    CreatelistComponent.prototype.ngOnInit = function () {
        this.items.length = 0;
        for (var i = 1; i <= 25; i++) {
            this.items.push("value" + i);
        }
        this.pageButtons();
        this.setPage(1);
    };
    CreatelistComponent.prototype.setPage = function (page) {
        this.activePage = page;
        this.createRange(10);
    };
    CreatelistComponent.prototype.createRange = function (number) {
        this.rangeItems.length = 0;
        for (var i = number * (this.activePage - 1); i < number * this.activePage; i++) {
            if (this.items[i])
                this.rangeItems.push(this.items[i]);
        }
    };
    CreatelistComponent.prototype.pageButtons = function () {
        var number = 0;
        if ((this.items.length + 1) % 10 == 0 || (this.items.length + 1) / 10 == 1) {
            number = (this.items.length + 1) / 10;
        }
        else {
            number = ((this.items.length + 1) / 10) + 1;
        }
        for (var i = 1; i <= number; i++) {
            this.pages.push(i);
        }
    };
    return CreatelistComponent;
}());
CreatelistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-createlist',
        template: __webpack_require__("../../../../../src/app/mainboard/createlist/createlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/createlist/createlist.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreatelistComponent);

//# sourceMappingURL=createlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/mainboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainboardMenu {\n    position:fixed;\n    width: 96%;\n    height: 60px;\n    margin: 1.2% 0 0 0;\n}\n\n.navmenu {\n    position: fixed;\n    padding: 0 2% 0 2%;\n    margin: 0;\n    width: 100%;\n    height: 90px;\n    background-color: rgb(129, 129, 129);\n    border-bottom: 1.5px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/mainboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navmenu\">\n  <div class=\"ui three item menu\" id=\"mainboardMenu\">\n    <a class=\"item {{showCreateList}}\" (click)=\"showCreateListBoard()\">\n      Create new list\n    </a>\n    <a class=\"item {{showAllItems}}\" (click)=\"showAllItemsBoard()\">\n      All items\n    </a>\n    <a class=\"item {{showMyLists}}\" (click)=\"showMyListsBoard()\">\n      My personal lists\n      <div class=\"floating ui teal label\">2</div>\n    </a>\n  </div>\n</div>\n\n<div style=\"height:95px;position:relative;z-index: -100;\"></div>\n<div *ngIf=\"createList\">\n  <app-createlist></app-createlist>\n</div>\n<div *ngIf=\"allItems\">\n  <app-allitems></app-allitems>\n</div>\n<div *ngIf=\"myLists\">\n  <app-mylists></app-mylists>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/mainboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainboardComponent = (function () {
    function MainboardComponent() {
        this.showCreateList = "";
        this.createList = false;
        this.showAllItems = "";
        this.allItems = false;
        this.showMyLists = "";
        this.myLists = false;
    }
    MainboardComponent.prototype.ngOnInit = function () {
        this.showCreateList = "active";
        this.createList = true;
    };
    MainboardComponent.prototype.showCreateListBoard = function () {
        this.showCreateList = "active";
        this.createList = true;
        this.showAllItems = "";
        this.allItems = false;
        this.showMyLists = "";
        this.myLists = false;
    };
    MainboardComponent.prototype.showAllItemsBoard = function () {
        this.showAllItems = "active";
        this.allItems = true;
        this.showCreateList = "";
        this.createList = false;
        this.showMyLists = "";
        this.myLists = false;
    };
    MainboardComponent.prototype.showMyListsBoard = function () {
        this.showMyLists = "active";
        this.myLists = true;
        this.showCreateList = "";
        this.createList = false;
        this.showAllItems = "";
        this.allItems = false;
    };
    return MainboardComponent;
}());
MainboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mainboard',
        template: __webpack_require__("../../../../../src/app/mainboard/mainboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/mainboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainboardComponent);

//# sourceMappingURL=mainboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/mylists/mylists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#pagecontent {\n    height: 651px;\n    margin-top: 2%;\n}\n\n.content {\n    width: 100%;\n}\n\n.ui.segment {\n    width: 80%;\n    height: 150px;\n    margin: 0 0 2% 10%;\n    position:relative;\n    z-index: -100;\n}\n\n.ui.horizontal.header.divider {\n    position:relative;\n    z-index: -100;\n}\n\n.ui.buttons {\n    margin-left: 10%;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/mylists/mylists.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pagecontent\">\n  <div class=\"listcontent\" *ngFor=\"let item of rangeItems; let i = index\">\n  <h5 class=\"ui horizontal header divider\">\n    {{item}}\n  </h5>\n  <div class=\"ui segment\">\n    <a class=\"ui ribbon label\">Ribbon</a>\n  </div>\n</div>\n</div>\n<div class=\"ui buttons\">\n    <div class=\"ui button {{page==activePage? 'active': ''}}\" *ngFor=\"let page of pages\" (click)=\"setPage(page)\">{{page}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/mylists/mylists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MylistsComponent = (function () {
    function MylistsComponent() {
        this.items = [];
        this.rangeItems = [];
        this.pages = [];
        this.activePage = 0;
    }
    MylistsComponent.prototype.ngOnInit = function () {
        this.items.length = 0;
        for (var i = 1; i <= 10; i++) {
            this.items.push("value" + i);
        }
        this.pageButtons();
        this.setPage(1);
    };
    MylistsComponent.prototype.setPage = function (page) {
        this.activePage = page;
        this.createRange(3);
    };
    MylistsComponent.prototype.createRange = function (number) {
        this.rangeItems.length = 0;
        for (var i = number * (this.activePage - 1); i < number * this.activePage; i++) {
            if (this.items[i])
                this.rangeItems.push(this.items[i]);
        }
    };
    MylistsComponent.prototype.pageButtons = function () {
        var number = 0;
        if ((this.items.length + 1) % 3 == 0 || (this.items.length + 1) / 3 == 1) {
            number = (this.items.length + 1) / 3;
        }
        else {
            number = ((this.items.length + 1) / 3) + 1;
        }
        for (var i = 1; i <= number; i++) {
            this.pages.push(i);
        }
    };
    return MylistsComponent;
}());
MylistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mylists',
        template: __webpack_require__("../../../../../src/app/mainboard/mylists/mylists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/mylists/mylists.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MylistsComponent);

//# sourceMappingURL=mylists.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_username, _firstName, _lastName, _email, _password, _id) {
        this._username = _username;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._password = _password;
        this._id = _id;
    }
    User.prototype.setUserName = function (username) {
        this._username = username;
    };
    User.prototype.setFirstName = function (firstname) {
        this._firstName = firstname;
    };
    User.prototype.setLastName = function (lastname) {
        this._lastName = lastname;
    };
    User.prototype.setEmail = function (email) {
        this._email = email;
    };
    User.prototype.toJSON = function () {
        return {
            id: this._id,
            username: this._username,
            firstname: this._firstName,
            lastname: this._lastName,
            email: this._email,
            password: this._password
        };
    };
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choiceWindow {\n    top: 0;\n    left: 0;\n    z-index: 200;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.747);\n}\n.ui.raised.segment {\n    position: relative;\n    margin-top: 15%;\n    border-radius: 5px;\n    height: 300px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n#questionandicondiv {\n    margin: 10% 0 0 10%;\n    width: 80%;\n    height: 125px;\n}\n.questiondiv {\n    float: left;\n}\n.icondiv {\n    float: right;\n}\n\n.ui.header {\n    text-align: center;\n    margin-bottom: 1%;\n    margin-top: 0;\n}\n\n.group.icon {\n    font-size: 70px;\n    margin: 25% 0 0 0;\n}\n\n#choiceBttns {\n    margin: 0 0 0 10%;\n    width: 80%;\n}\n#bttnYes {\n    text-align: center;\n    width: 48%;\n}\n#bttnNo {\n    text-align: center;\n    width: 48%;\n}\n\n#registerForm {\n    width: 55%;\n    height: auto;\n    max-height: 80%;\n    margin: 6% 0% 0% 22.5%; /*top right bottom left*/\n    overflow-y: auto;\n}\n\n#formContent {\n    margin-top: 5%;\n    overflow-y: auto;\n}\n\n#registerBttn {\n    margin-top: 3%;\n}\n\n#error {\n    background-color: rgba(255, 75, 75, 0.356);\n}\n\n#email {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/emailIcon.png") + ");\n\tbackground-position: left;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n}\n#password {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/passwordIcon.png") + ");\n\tbackground-position: left;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<form class=\"ui large form segment\" id=\"registerForm\" #f='ngForm' (ngSubmit)='onSubmit()'>\n  <div class=\"field\">\n    <h1 class=\"ui header\" id=\"registerTitle\">Register</h1>\n  </div>\n  <div id=\"formContent\">\n    <div class=\"field\">\n      <label for=\"name\">Username:</label>\n      <input id=\"name\" placeholder=\"example\" name=\"username\" [(ngModel)]='newUser.username' \n        pattern=\"[a-zA-Z0-9]*\" #username=\"ngModel\">\n      <div class=\"ui pointing label\" *ngIf=\"username.invalid && username.dirty\" id=\"error\">\n        <div *ngIf=\"username.errors.required\">Username is required</div>\n        <div *ngIf=\"username.errors.pattern\">Should only exist of characters</div>\n      </div>\n      <!-- <label for=\"name\">Username:</label> \n          <input id=\"name\" placeholder=\"example\" name=\"username\" [(ngModel)]='newUser.username' \n            required pattern=\"[a-zA-Z0-9]*\" #username=\"ngModel\">\n          <div class=\"ui pointing label\" *ngIf=\"username.invalid && username.dirty\" id=\"error\">\n              <div *ngIf=\"username.errors.required\" >Username is required</div>\n              <div *ngIf=\"username.errors.pattern\" >Should only exist of characters</div>\n          </div> -->\n    </div>\n    <div class=\"field\">\n      <label for=\"firstname\">First name:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"firstname\" placeholder=\"first name\" name=\"firstname\" [(ngModel)]='newUser.firstName' \n          required pattern=\"[a-zA-Z.éèçùà-]*\" #firstname=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"firstname.invalid && firstname.dirty\" id=\"error\">\n        <div *ngIf=\"firstname.errors.required\">Firstname is required</div>\n        <div *ngIf=\"firstname.errors.pattern\">Should only exist of characters</div>\n      </div>\n      <!-- <label for=\"firstname\">First name:</label> \n      <input id=\"firstname\" placeholder=\"first name\" name=\"firstname\" [(ngModel)]='newUser.firstName' \n        required pattern=\"[a-zA-Z.éèçùà-]*\" #firstname=\"ngModel\"> \n      <div class=\"ui pointing label\" *ngIf=\"firstname.invalid && firstname.dirty\" id=\"error\">\n          <div *ngIf=\"firstname.errors.required\" >Firstname is required</div>\n          <div *ngIf=\"firstname.errors.pattern\" >Should only exist of characters</div>\n      </div>  -->\n    </div>\n    <div class=\"field\">\n      <label for=\"lastname\">Last name:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"lastname\" placeholder=\"last name\" name=\"lastname\" [(ngModel)]='newUser.lastName' \n          required pattern=\"[a-zA-Z.éèçùà]*\" #lastname=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"lastname.invalid && lastname.dirty\" id=\"error\">\n        <div *ngIf=\"lastname.errors.required\">Lastname is required</div>\n        <div *ngIf=\"lastname.errors.pattern\">Should only exist of characters</div>\n      </div>\n      <!-- <label for=\"lastname\">Last name:</label> \n      <input id=\"lastname\" placeholder=\"last name\" name=\"lastname\" [(ngModel)]='newUser.lastName' \n        required pattern=\"[a-zA-Z.éèçùà]*\" #lastname=\"ngModel\">\n      <div class=\"ui pointing label\" *ngIf=\"lastname.invalid && lastname.dirty\" id=\"error\">\n          <div *ngIf=\"lastname.errors.required\" >Lastname is required</div>\n          <div *ngIf=\"lastname.errors.pattern\" >Should only exist of characters</div>\n      </div> -->\n    </div>\n    <div class=\"field\">\n      <label for=\"email\">Email:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"email\" placeholder=\"example@example.com\" name=\"email\" [(ngModel)]='newUser.email' \n          required pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" #email=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"email.invalid && email.dirty\" id=\"error\">\n        <div *ngIf=\"email.errors.required\">Email is required</div>\n        <div *ngIf=\"email.errors.pattern\">Not a conventional email adress</div>\n      </div>\n      <!-- <label for=\"email\">Email:</label> \n      <input id=\"email\" placeholder=\"example@example.com\" name=\"email\" [(ngModel)]='newUser.email' \n        required pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" #email=\"ngModel\">\n      <div class=\"ui pointing label\" *ngIf=\"email.invalid && email.dirty\" id=\"error\">\n          <div *ngIf=\"email.errors.required\" >Email is required</div>\n          <div *ngIf=\"email.errors.pattern\" >Not a conventional email adress</div>\n      </div> -->\n    </div>\n    <div class=\"field\">\n      <label for=\"password\">Password:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]='newUser.password'\n          required pattern=\"[a-zA-Z0-9.éèçùà]*\" #password=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"password.invalid && password.dirty\" id=\"error\">\n        <div *ngIf=\"password.errors.required\">Password is required</div>\n        <div *ngIf=\"password.errors.pattern\">Has unallowed characters</div>\n      </div>\n      <!-- <label for=\"password\">Password:</label> \n        <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]='newUser.password' \n          required pattern=\"[a-zA-Z0-9.éèçùà]*\" #password=\"ngModel\">\n        <div class=\"ui pointing label\" *ngIf=\"password.invalid && password.dirty\" id=\"error\">\n            <div *ngIf=\"password.errors.required\" >Password is required</div>\n            <div *ngIf=\"password.errors.pattern\" >Has unallowed characters</div>\n        </div> -->\n    </div>\n    <button type=\"submit\" class=\"ui blue button\" id=\"registerBttn\" [disabled]='!f.valid'>Register</button>\n    <button class=\"ui button\" id=\"backBttn\" (click)=\"back()\">Back</button>\n  </div>\n</form>\n\n<div *ngIf=\"noUsername\" class=\"choiceWindow\">\n  <div class=\"ui raised segment\">\n    <div class=\"field\" id=\"questionandicondiv\">\n      <div class=\"questiondiv\">\n        <h2 id=\"firstUiHeader\" class=\"ui header\">We will use your firstname as username.</h2>\n      <h2 class=\"ui header\">Is this OK?</h2>\n      </div>\n      <div class=\"icondiv\">\n        <i class=\"group icon\"></i>\n      </div>\n    </div>\n    <div class=\"field\" id=\"choiceBttns\">\n      <div id=\"bttnYes\"  class=\"ui green left attached animated fade button\" (click)=\"onSubmit(true)\">\n        <div class=\"visible content\">Yes</div>\n        <div class=\"hidden content\">\n          <i class=\"checkmark icon\"></i>\n        </div>\n      </div>\n      <div id=\"bttnNo\" class=\"ui red right attached animated fade button\" (click)=\"noUsername = false\">\n        <div class=\"visible content\">No</div>\n        <div class=\"hidden content\">\n          <i class=\"remove icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.noUsername = false;
        this.newUser = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (useDefault) {
        var _this = this;
        if (this.newUser.username == undefined || this.newUser.username == "") {
            this.noUsername = true;
            if (useDefault) {
                this.newUser.username = this.newUser.firstName;
                this.userService.create(this.newUser).subscribe(function (data) {
                    _this.router.navigate(["/login"]);
                }, function (error) {
                    _this.alertService.error(error);
                });
            }
        }
        else {
            //creating a new user trough the userService and the model that was filled trough html (newUser)
            this.userService.create(this.newUser).subscribe(function (data) {
                _this.router.navigate(["/login"]);
            }, function (error) {
                _this.alertService.error(error);
            });
        }
    };
    RegisterComponent.prototype.back = function () {
        //we navigate back to the login page
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        //inDevelopment: boolean = true;
        this.inDevelopment = false;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.prepEndPoint("/users/authenticate"), { username: username, password: password }).map(function (response) {
            var user = response.json();
            //if there is a user object from the response AND it has a jwt token,
            //we put the user data in the localstorage to keep the user logged in
            if (user && user.token) {
                localStorage.setItem("loggedUser", JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("loggedUser"); //clearing the storage to log the current user out
    };
    AuthenticationService.prototype.prepEndPoint = function (endPoint) {
        if (this.inDevelopment) {
            return 'http://localhost:4000' + endPoint;
        }
        else {
            return 'https://mtwebappsproject.herokuapp.com' + endPoint;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        //inDevelopment: boolean = true;
        this.inDevelopment = false;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.prepEndPoint('/users/register'), user);
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.prepEndPoint('/users/')).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserById = function (_id) {
        return this.http.get(this.prepEndPoint('/users/current/' + _id)).map(function (response) { return response.json(); })
            .map(function (user) { return new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](user._username, user._firstName, user._lastName, user._email, user._id); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.prepEndPoint('/users/' + user._id), user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndPoint('/users/' + _id));
    };
    UserService.prototype.prepEndPoint = function (endPoint) {
        if (this.inDevelopment) {
            return 'http://localhost:4000' + endPoint;
        }
        else {
            return 'https://mtwebappsproject.herokuapp.com' + endPoint;
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map