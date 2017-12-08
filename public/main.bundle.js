webpackJsonp(["main"],{

/***/ "../../../../../../node_modules/ngx-bootstrap/utils/facade/browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export window */
/* unused harmony export document */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return location; });
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];


/***/ }),

/***/ "../../../../../disc/Assets/Images/emailIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "emailIcon.3e63af602836783383fd.png";

/***/ }),

/***/ "../../../../../disc/Assets/Images/mslh.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mslh.9682cbb2965cdf10adca.png";

/***/ }),

/***/ "../../../../../disc/Assets/Images/passwordIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "passwordIcon.47a5ef4429251caa48d0.png";

/***/ }),

/***/ "../../../../../disc/Assets/Images/trashcanicon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "trashcanicon.f2177e12219daff89af6.png";

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

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_permissions__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, permissionsService) {
        this.router = router;
        this.permissionsService = permissionsService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('loggedUser')) {
            //logged in so return true
            var permission = JSON.parse(localStorage.getItem('loggedUser')).role;
            this.permissionsService.flushPermissions();
            this.permissionsService.addPermission(permission);
            return true;
        }
        //not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_permissions__["NgxPermissionsService"]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/adminboard/additem/additem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#registerForm {\n    width: 70%;\n    height: auto;\n    max-height: 80%;\n    margin: 4% 0% 0% 300px; /*top right bottom left*/\n    overflow-y: auto;\n}\n\n#formContent {\n    margin-top: 2%;\n    overflow-y: auto;\n}\n\n#registerBttn {\n    margin-top: 3%;\n}\n\n#error {\n    background-color: rgba(255, 75, 75, 0.356);\n}\n\n#kind {\n    outline: none;\n    overflow: hidden;\n    height: auto;\n}\n#inShop {\n    outline: none;\n    height: 43px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminboard/additem/additem.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<form class=\"ui large form segment\" id=\"registerForm\" #f='ngForm' (ngSubmit)='addItem()'>\n  <div class=\"field\">\n    <h1 class=\"ui header\" id=\"registerTitle\">Add item</h1>\n  </div>\n  <div id=\"formContent\">\n    <div class=\"field\">\n      <label for=\"productname\">Product name:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"name\" placeholder=\"product\" name=\"productname\" [(ngModel)]='newItem.productname'\n         required pattern=\"[a-zA-Z .éèçùà-]*\" #productname=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"productname.invalid && productname.dirty\" id=\"error\">\n        <div *ngIf=\"productname.errors.required\">Name for product is required</div>\n        <div *ngIf=\"productname.errors.pattern\">Should only exist of characters</div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"mark\">Mark:</label>\n      <div class=\"ui corner labeled input\">\n        <input id=\"firstname\" placeholder=\"mark\" name=\"mark\" [(ngModel)]='newItem.mark' \n          required pattern=\"[a-zA-Z .éèçùà-]*\" #mark=\"ngModel\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui pointing label\" *ngIf=\"mark.invalid && mark.dirty\" id=\"error\">\n        <div *ngIf=\"mark.errors.required\">Mark is required</div>\n        <div *ngIf=\"mark.errors.pattern\">Should only exist of characters</div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"kind\">Kind:</label>\n      <select style=\"overflow-y: auto\" size=\"7\" name=\"kind\" id=\"kind\" [(ngModel)]=\"newItem.kind\" required #kind=\"ngModel\">\n        <option>Meats</option>\n        <option>Dairy</option>\n        <option>Bakery</option>\n        <option>Fruits</option>\n        <option>Oil/Sauce</option>\n        <option>Chips</option>\n        <option>Vegetables</option>\n        <option>Drinks</option>\n        <option>Frozen goods</option>\n        <option>Non-food</option>\n      </select>\n    </div>\n    <div class=\"field\">\n      <label for=\"inShop\">Buy at:</label>\n      <select name=\"inShop\" id=\"inShop\" [(ngModel)]=\"newItem.inShop\" required #inShop=\"ngModel\">\n        <option value='' disabled selected>Choose shop</option>\n        <option>Delhaize</option>\n        <option>Carrefour</option>\n        <option>Colruyt</option>\n        <option>Albert hein</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"ui blue button\" id=\"registerBttn\" [disabled]='!f.valid'>Add Item</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/adminboard/additem/additem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_bootstrap_utils_facade_browser__ = __webpack_require__("../../../../../../node_modules/ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
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




var AdditemComponent = (function () {
    function AdditemComponent(alertService, itemService) {
        this.alertService = alertService;
        this.itemService = itemService;
        this.newItem = {
            "kind": "",
            "inShop": "",
        };
    }
    AdditemComponent.prototype.ngOnInit = function () { };
    AdditemComponent.prototype.addItem = function () {
        var _this = this;
        console.log(this.newItem);
        this.itemService.create(this.newItem).subscribe(function (data) {
            _this.alertService.success("Item was created");
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_0_ngx_bootstrap_utils_facade_browser__["a" /* location */].reload();
            }, 1500);
        });
    };
    return AdditemComponent;
}());
AdditemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-additem',
        template: __webpack_require__("../../../../../src/app/adminboard/additem/additem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminboard/additem/additem.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]) === "function" && _b || Object])
], AdditemComponent);

var _a, _b;
//# sourceMappingURL=additem.component.js.map

/***/ }),

/***/ "../../../../../src/app/adminboard/adminallitems/adminallitems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allItemsContent {\n    width: 70%;\n    margin: 4% 0 0 300px;\n    height: 630px;\n}\n\n.searchBox {\n    float: right;\n    outline: none;\n    height: 55px;\n    width: 25%;\n    border: none;\n    background-color: #f1f1f1;\n    color: #707070;\n    font-size: 18px;\n    padding-left: 10px;\n}\n\n.ui.table thead th {\n    padding: 0;\n    height: 55px;\n}\n.ui.table thead th p {\n    margin: 2% 0 0 2%;\n    float: left;\n}\n\n.ui.table tbody tr {\n    height: 45px;\n}\n\n.removeItem {\n    background-color: rgb(224, 104, 104);\n    width: 5%;\n    padding: 0;\n}\n.ui.table tbody tr td:last-child {\n   padding: 1px 0 0 0;\n}\n.ui.table tbody tr td:last-child:hover {\n    background-color: rgba(235, 108, 108, 0.788);\n    cursor: pointer;\n }\n\n.removeIcon {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/trashcanicon.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 42px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminboard/adminallitems/adminallitems.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<div class=\"allItemsContent\">\n  <table class=\"ui celled striped table\">\n    <thead>\n      <tr>\n        <th colspan=\"5\">\n          <p>ITEMS</p>\n          <input type=\"text\" placeholder=\"search\" class=\"searchBox\" #searchValue (input)=\"filterItems(searchValue.value)\" />\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of searchItems\">\n        <td>{{item.productname}}</td>\n        <td>{{item.mark}}</td>\n        <td>{{item.kind}}</td>\n        <td>{{item.inShop}}</td>\n        <td class=\"removeItem\" (click)=\"deleteItem(item._id)\">\n          <div class=\"removeIcon\"></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/adminboard/adminallitems/adminallitems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminallitemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminallitemsComponent = (function () {
    function AdminallitemsComponent(alertService, itemService) {
        this.alertService = alertService;
        this.itemService = itemService;
    }
    AdminallitemsComponent.prototype.ngOnInit = function () {
        this.geefAllItems();
    };
    AdminallitemsComponent.prototype.geefAllItems = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (items) {
            _this.allItems = items;
            _this.searchItems = items;
            _this.sortByProductName();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    AdminallitemsComponent.prototype.deleteItem = function (id) {
        var _this = this;
        var item = this.allItems.find(function (item) { return item._id == id; });
        this.itemService.delete(id).subscribe(function (data) {
            _this.alertService.success("Item '" + item.productname + "' was deleted");
            _this.geefAllItems();
        }, function (error) {
            _this.alertService.error("Deletion failed: " + error);
        });
    };
    AdminallitemsComponent.prototype.filterItems = function (searchValue) {
        var _this = this;
        this.searchItems = [];
        if (searchValue != "") {
            this.allItems.forEach(function (element) {
                if (element.productname.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
                    _this.searchItems.push(element);
                }
            });
        }
        else {
            this.searchItems = this.allItems;
        }
    };
    //Sort function fot the students in the current class
    AdminallitemsComponent.prototype.sortByProductName = function () {
        this.allItems.sort(function (a, b) {
            if (a.productname < b.productname) {
                return -1;
            }
            else if (a.productname > b.productname) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    return AdminallitemsComponent;
}());
AdminallitemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminallitems',
        template: __webpack_require__("../../../../../src/app/adminboard/adminallitems/adminallitems.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminboard/adminallitems/adminallitems.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]) === "function" && _b || Object])
], AdminallitemsComponent);

var _a, _b;
//# sourceMappingURL=adminallitems.component.js.map

/***/ }),

/***/ "../../../../../src/app/adminboard/adminboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    height:60px;\n    text-align: left;\n    position:relative;\n    padding-top: 15px;\n    background-color: white;\n    border-bottom: 1px solid #353534;\n}\n.header label {\n    text-align: center;\n    font-size: 30px;\n    margin: 0 0 0 10px;\n    color: rgb(29, 28, 28);\n}\n\n.navmenu {\n    position: fixed;\n    z-index: 100;\n    padding: 0;\n    margin: 0;\n    width: 200px;\n    height: 100%;\n    background-color: rgb(247, 245, 245);\n    border-right: 1px solid #353534;\n}\n\n.ui.vertical.demo.menu {\n    width: 100%;\n    border-radius: 0;\n    box-shadow: white;\n}\n\n.logout {\n    outline: none;\n    background-color: rgb(212, 211, 211);\n    border-top: 2px solid rgba(88, 88, 88, 0.144);\n    border-right: 1px solid #353534;\n    text-align: center;\n    height: 35px;\n    width: 200px;\n    bottom: 0px; \n}\n.logout:hover {\n    background-color: rgb(197, 197, 197);\n    cursor: pointer;\n}\n.logout a{\n    line-height: 35px;\n    color: white;\n    text-decoration: none; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminboard/adminboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\"><label><strong>ADMIN page</strong></label></div>\n<div class=\"navmenu\">\n  <div class=\"ui vertical demo menu\">\n    <a class=\"item {{showAddItem}}\" (click)=\"showAddItemBoard()\">\n        Add item\n    </a>\n    <a class=\"item {{showAllUsers}}\" (click)=\"showAllUsersBoard()\">\n        All users\n    </a>\n    <a class=\"item {{showAdminAllItems}}\" (click)=\"showAdminAllItemsBoard()\">\n        All items\n    </a>\n  </div>\n  <div [routerLink]=\"['/login']\" class=\"logout\">\n    <a>Afmelden</a>\n  </div>\n</div>\n\n<div *ngIf=\"addItem\">\n  <app-additem></app-additem>\n</div>\n<div *ngIf=\"allUsers\">\n  <app-allusers></app-allusers>\n</div>\n<div *ngIf=\"adminAllItems\">\n  <app-adminallitems></app-adminallitems>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/adminboard/adminboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminboardComponent; });
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

var AdminboardComponent = (function () {
    function AdminboardComponent() {
        this.showAddItem = "";
        this.addItem = false;
        this.showAllUsers = "";
        this.allUsers = false;
        this.showAdminAllItems = "";
        this.adminAllItems = false;
    }
    AdminboardComponent.prototype.ngOnInit = function () {
        this.showAddItem = "active";
        this.addItem = true;
    };
    AdminboardComponent.prototype.showAddItemBoard = function () {
        this.showAddItem = "active";
        this.addItem = true;
        this.showAllUsers = "";
        this.allUsers = false;
        this.showAdminAllItems = "";
        this.adminAllItems = false;
    };
    AdminboardComponent.prototype.showAllUsersBoard = function () {
        this.showAllUsers = "active";
        this.allUsers = true;
        this.showAddItem = "";
        this.addItem = false;
        this.showAdminAllItems = "";
        this.adminAllItems = false;
    };
    AdminboardComponent.prototype.showAdminAllItemsBoard = function () {
        this.showAdminAllItems = "active";
        this.adminAllItems = true;
        this.showAddItem = "";
        this.addItem = false;
        this.showAllUsers = "";
        this.allUsers = false;
    };
    return AdminboardComponent;
}());
AdminboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminboard',
        template: __webpack_require__("../../../../../src/app/adminboard/adminboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminboard/adminboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminboardComponent);

//# sourceMappingURL=adminboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/adminboard/allusers/allusers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allUsersContent {\n    width: 70%;\n    margin: 4% 0 0 300px;\n    height: 630px;\n}\n\n.searchBox {\n    float: right;\n    outline: none;\n    height: 55px;\n    width: 25%;\n    border: none;\n    background-color: #f1f1f1;\n    color: #707070;\n    font-size: 18px;\n    padding-left: 10px;\n}\n\n.ui.table thead th {\n    padding: 0;\n    height: 55px;\n}\n.ui.table thead th p {\n    margin: 2% 0 0 2%;\n    float: left;\n}\n\n.ui.table tbody tr {\n    height: 45px;\n}\n\n.removeUser {\n    background-color: rgb(224, 104, 104);\n    width: 5%;\n    padding: 0;\n}\n.ui.table tbody tr td:last-child {\n   padding: 1px 0 0 0;\n}\n.ui.table tbody tr td:last-child:hover {\n    background-color: rgba(235, 108, 108, 0.788);\n    cursor: pointer;\n }\n\n.removeIcon {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/trashcanicon.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 42px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminboard/allusers/allusers.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<div class=\"allUsersContent\">\n  <table class=\"ui celled striped table\">\n    <thead>\n      <tr>\n        <th colspan=\"5\">\n          <p>USERS</p>\n          <input type=\"text\" placeholder=\"search\" class=\"searchBox\" #searchValue (input)=\"filterUsers(searchValue.value)\" />\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of searchUsers\">\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.username}}</td>\n        <td class=\"removeUser\" (click)=\"deleteUser(user._id)\">\n          <div class=\"removeIcon\"></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/adminboard/allusers/allusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllusersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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



var AllusersComponent = (function () {
    function AllusersComponent(alertService, userService) {
        this.alertService = alertService;
        this.userService = userService;
        this.allUsers = [];
        this.searchUsers = [];
    }
    AllusersComponent.prototype.ngOnInit = function () {
        this.geefAlleUsers();
    };
    AllusersComponent.prototype.geefAlleUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (users) {
            _this.allUsers.length = 0;
            users.forEach(function (user) {
                if (user.role != "ADMIN")
                    _this.allUsers.push(user);
            });
            _this.searchUsers = _this.allUsers;
            _this.sortByfirstName();
        });
    };
    AllusersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var user = this.allUsers.find(function (user) { return user._id == id; });
        this.userService.delete(id).subscribe(function (data) {
            _this.alertService.success("User '" + user.username + "' was deleted");
            _this.geefAlleUsers();
        }, function (error) {
            _this.alertService.error("Deletion failed: " + error);
        });
    };
    AllusersComponent.prototype.filterUsers = function (searchValue) {
        var _this = this;
        this.searchUsers = [];
        if (searchValue != "") {
            this.allUsers.forEach(function (element) {
                if (element.firstName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
                    _this.searchUsers.push(element);
                }
            });
        }
        else {
            this.searchUsers = this.allUsers;
        }
    };
    //Sort function fot the students in the current class
    AllusersComponent.prototype.sortByfirstName = function () {
        this.allUsers.sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            }
            else if (a.firstName > b.firstName) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    return AllusersComponent;
}());
AllusersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-allusers',
        template: __webpack_require__("../../../../../src/app/adminboard/allusers/allusers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminboard/allusers/allusers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AllusersComponent);

var _a, _b;
//# sourceMappingURL=allusers.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export appRoutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminboard_adminboard_component__ = __webpack_require__("../../../../../src/app/adminboard/adminboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainboard_mainboard_component__ = __webpack_require__("../../../../../src/app/mainboard/mainboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'mainboard', component: __WEBPACK_IMPORTED_MODULE_2__mainboard_mainboard_component__["a" /* MainboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN', 'USER'],
                redirectTo: '/login'
            }
        } },
    { path: 'adminboard', component: __WEBPACK_IMPORTED_MODULE_1__adminboard_adminboard_component__["a" /* AdminboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN'],
                redirectTo: '/login'
            }
        } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__mainboard_mainboard_component__["a" /* MainboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6_ngx_permissions__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN', 'USER'],
                redirectTo: '/login'
            }
        } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"]],
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(routes)]
    })
], AppRoutingModule);

// for testing
var appRoutes = routes;
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__adminboard_adminboard_component__ = __webpack_require__("../../../../../src/app/adminboard/adminboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__adminboard_additem_additem_component__ = __webpack_require__("../../../../../src/app/adminboard/additem/additem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__adminboard_allusers_allusers_component__ = __webpack_require__("../../../../../src/app/adminboard/allusers/allusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_itemList_service__ = __webpack_require__("../../../../../src/app/services/itemList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_permissions__ = __webpack_require__("../../../../ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adminboard_adminallitems_adminallitems_component__ = __webpack_require__("../../../../../src/app/adminboard/adminallitems/adminallitems.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mainboard_mainboard_component__["a" /* MainboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mainboard_createlist_createlist_component__["a" /* CreatelistComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mainboard_allitems_allitems_component__["a" /* AllitemsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mainboard_mylists_mylists_component__["a" /* MylistsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_16__adminboard_adminboard_component__["a" /* AdminboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__adminboard_additem_additem_component__["a" /* AdditemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__adminboard_allusers_allusers_component__["a" /* AllusersComponent */],
            __WEBPACK_IMPORTED_MODULE_23__adminboard_adminallitems_adminallitems_component__["a" /* AdminallitemsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_22_ngx_permissions__["NgxPermissionsModule"].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_19__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_20__services_itemList_service__["a" /* ItemListService */],
            __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message!='' && message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n  <h4>{{message.text}}</h4><i class=\"close icon succes\" *ngIf=\"message.type === 'success'\" (click)=\"closeAlert()\"></i><i class=\"close icon error\" *ngIf=\"message.type === 'error'\" (click)=\"closeAlert()\"></i>\n</div>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
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
exports.push([module.i, "#loginForm {\n    width: 40%;\n    height: auto;\n    margin: 12% 0% 0% 30%; /*top right bottom left*/\n}\n\n#loginIcon {\n    font-size: 18px;\n    margin: 0% 1% 0% 0%; /*top right bottom left*/\n}\n\n#usernameIcon,#passwordIcon {\n    font-size: 11px;\n}\n\n#loginTitle {\n    display: inline;\n}\n\n#loginRegisterBttns {\n    width: 60%;\n    margin: 0% 0% 0% 20%; /*top right bottom left*/\n}\n\n#loginBttn, #registerBttn {\n    font-size: 15px;\n    width: 30%;\n}\n\n#error {\n    background-color: rgba(255, 75, 75, 0.356);\n}\n\n#password {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/passwordIcon.png") + ");\n\tbackground-position: left;\n    background-repeat: no-repeat;\n    padding-left: 40px;\n}\n\n.choiceWindow {\n    top: 0;\n    left: 0;\n    z-index: 200;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.747);\n}\n.ui.raised.segment {\n    position: relative;\n    margin-top: 15%;\n    border-radius: 5px;\n    height: 200px;\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#questionandicondiv {\n    margin: 2% 0 15px 10%;\n    width: 80%;\n    height: 80px;\n}\n.questiondiv {\n    float: left;\n    width: 80%;\n}\n.icondiv {\n    margin-top: 5%;\n    float: left;\n}\n\n.ui.header {\n    text-align: center;\n    margin-bottom: 1%;\n    margin-top: 0;\n}\n\n.group.icon {\n    height: auto;\n    font-size: 50px;\n}\n\n#choiceBttns {\n    position: relative;\n    margin: 0 0 0 10%;\n    width: 80%;\n}\n#bttnYes {\n    text-align: center;\n    width: 48%;\n}\n#bttnNo {\n    text-align: center;\n    width: 48%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<form class=\"ui large form segment\" id=\"loginForm\" #f='ngForm' (ngSubmit)='login()'>\n  <div class=\"field\">\n    <i class=\"bordered inverted black users icon\" id=\"loginIcon\"></i>\n    <h1 class=\"ui header\" id=\"loginTitle\">Login</h1>\n  </div>\n  <div class=\"field\">\n    <label for=\"name\"><i class=\"home icon\" id=\"usernameIcon\"></i>Username:</label> \n    <input id=\"name\" placeholder=\"example\" name=\"username\" [(ngModel)]='user.username' required pattern=\"[a-zA-Z0-9]*\" #username=\"ngModel\">\n    <div class=\"ui pointing label\" *ngIf=\"username.errors && username.dirty\" id=\"error\">\n        <div *ngIf=\"username.errors.required\">Username is required</div>\n        <div *ngIf=\"username.errors.pattern\">Username has unidentified characters</div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label for=\"password\"><i class=\"privacy icon\" id=\"passwordIcon\"></i>Password:</label> \n    <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]='user.password' required #password=\"ngModel\">\n    <div class=\"ui pointing label\" *ngIf=\"password.errors?.required && password.dirty\" id=\"error\">\n        Password is required\n    </div>\n  </div>\n  <div class=\"ui buttons\" id=\"loginRegisterBttns\" >\n    <button type=\"submit\" class=\"ui button\" id=\"loginBttn\" [disabled]='!f.valid'>Log in</button>\n    <div class=\"or\"></div>\n    <button class=\"ui blue button\" id=\"registerBttn\" (click)=\"register()\">Register</button>\n  </div>\n</form>\n\n<div *ngIf=\"adminLogin\" class=\"choiceWindow\">\n    <div class=\"ui raised segment\">\n      <div class=\"field\" id=\"questionandicondiv\">\n        <div class=\"questiondiv\">\n          <h2 class=\"ui header\">Do you want to log in as ADMIN?</h2>\n        </div>\n        <div class=\"icondiv\">\n          <i class=\"group icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\" id=\"choiceBttns\">\n        <div id=\"bttnYes\"  class=\"ui green left attached animated fade button\" (click)=\"login(true)\">\n          <div class=\"visible content\">Yes</div>\n          <div class=\"hidden content\">\n            <i class=\"checkmark icon\"></i>\n          </div>\n        </div>\n        <div id=\"bttnNo\" class=\"ui red right attached animated fade button\" (click)=\"login(false)\">\n          <div class=\"visible content\">No</div>\n          <div class=\"hidden content\">\n            <i class=\"remove icon\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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
        this.adminLogin = false;
        this.user = {};
        this.allUsers = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("userCount"))
            localStorage.setItem("userCount", "0");
        console.log(localStorage.getItem("userCount"));
        this.userService.getAllUsers().subscribe(function (users) {
            if (users.length > parseInt(localStorage.getItem("userCount"))) {
                _this.alertService.success("You are registerd as " + users[parseInt(localStorage.getItem("userCount"))].username);
            }
            localStorage.setItem("userCount", users.length.toString());
            console.log(localStorage.getItem("userCount"));
            _this.allUsers = users;
        }, function (error) {
            _this.alertService.error(error);
        });
        //when the logincomponent is loaded we clear the localstorage of the user that was logged in before
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (this.returnUrl == "/")
            this.returnUrl = '/mainboard';
    };
    LoginComponent.prototype.login = function (asUser) {
        var _this = this;
        this.authService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            var user = _this.allUsers.find(function (user) { return user._id === data._id; });
            if (user.role == "ADMIN") {
                console.log("aaa");
                _this.adminLogin = true;
                if (asUser) {
                    _this.router.navigate(['/adminboard']);
                }
                else if (asUser == false) {
                    _this.adminLogin = false;
                    _this.router.navigate([_this.returnUrl]);
                }
            }
            else {
                //if there is data we navigate to the mainboard with the user logged in
                _this.router.navigate([_this.returnUrl]);
            }
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#allItemsContent {\n    width: 70%;\n    margin: 3% 0 0 300px;\n    height: 630px;\n}\n\n.searchBox {\n    float: right;\n    outline: none;\n    height: 55px;\n    width: 25%;\n    border: none;\n    background-color: #f1f1f1;\n    color: #707070;\n    font-size: 18px;\n    padding-left: 10px;\n}\n\n.ui.table thead th {\n    padding: 0;\n    height: 55px;\n}\n.ui.table thead th p {\n    margin: 2% 0 0 2%;\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"allItemsContent\">\n  <table class=\"ui celled striped table\">\n    <thead>\n      <tr>\n        <th colspan=\"3\">\n          <p>ALL ITEMS</p>\n          <input type=\"text\" placeholder=\"search\" class=\"searchBox\" #searchValue (input)=\"filterItems(searchValue.value)\"/>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of searchItems; let i = index\">\n        <td>{{item.productname}}</td>\n        <td>{{item.mark}}</td>\n        <td class=\"right aligned collapsing\">{{item.kind}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/allitems/allitems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllitemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
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
    function AllitemsComponent(alertService, itemService) {
        this.alertService = alertService;
        this.itemService = itemService;
    }
    AllitemsComponent.prototype.ngOnInit = function () {
        this.geefAllItems();
    };
    AllitemsComponent.prototype.geefAllItems = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (items) {
            _this.allItems = items;
            _this.searchItems = items;
            _this.sortByProductName();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    AllitemsComponent.prototype.filterItems = function (searchValue) {
        var _this = this;
        this.searchItems = [];
        if (searchValue != "") {
            this.allItems.forEach(function (element) {
                if (element.productname.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
                    _this.searchItems.push(element);
                }
            });
        }
        else {
            this.searchItems = this.allItems;
        }
    };
    //Sort function fot the students in the current class
    AllitemsComponent.prototype.sortByProductName = function () {
        this.allItems.sort(function (a, b) {
            if (a.productname < b.productname) {
                return -1;
            }
            else if (a.productname > b.productname) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    return AllitemsComponent;
}());
AllitemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-allitems',
        template: __webpack_require__("../../../../../src/app/mainboard/allitems/allitems.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/allitems/allitems.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */]) === "function" && _b || Object])
], AllitemsComponent);

var _a, _b;
//# sourceMappingURL=allitems.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#createListContent {\n    width: 70%;\n    margin: 3% 0 0 300px;\n    height: 625px;\n}\n\n.ui.compact.celled.definition.table {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\ntable thead tr th:first-child {\n    border-radius: 0;\n}\ntable tbody tr td.addbuttonColumn:first-child {\n    width: 10%;\n    height: 50px;\n    text-align: center;\n    font-size: 20px;\n    color: rgb(77, 133, 49);\n    background-color: rgba(190, 255, 183, 0.473);\n}\ntable tbody tr td.addbuttonColumn:first-child:hover {\n    background-color: rgba(170, 231, 165, 0.664);\n    cursor: pointer;\n}\ntable tbody tr td.removebuttonColumn:first-child {\n    width: 10%;\n    height: 50px;\n    text-align: center;\n    font-size: 20px;\n    color: rgb(207, 96, 96);\n    background-color: rgba(238, 149, 149, 0.473);\n}\ntable tbody tr td.removebuttonColumn:first-child:hover {\n    background-color: rgba(231, 165, 165, 0.664);\n    cursor: pointer;\n}\ntable tfoot tr th:first-child {\n    text-align: center;\n}\n\n#shopIcon {\n    font-size: 25px;\n    color: black;\n    margin: 0 auto 0 auto;\n    width: 100%;\n}\n\n.ui.buttons {\n    margin-left: 300px;\n}\n\n.choiceWindow {\n    top: 0;\n    left: 0;\n    z-index: 200;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.747);\n}\n.ui.raised.segment {\n    position: relative;\n    margin-top: 15%;\n    border-radius: 5px;\n    height: 200px;\n    width: 33%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.close.icon {\n    height: auto;\n}\n.close.icon:hover {\n    cursor: pointer;\n    background-color: black;\n    color: white;\n}\n\n#questionandicondiv {\n    margin: 2% 0 10px 17%;\n    width: 80%;\n    height: 80px;\n}\n.questiondiv {\n    float: left;\n    width: 70%;\n}\n.icondiv {\n    margin-top: 5%;\n    float: left;\n}\n\n.ui.header {\n    text-align: center;\n    margin-bottom: 1%;\n    margin-top: 0;\n}\n\n.help.icon {\n    height: auto;\n    font-size: 42px;\n}\n\n#listnameSave {\n    padding-left: 20%;\n}\n.name {\n    height: 34px;\n    outline: none;\n}\n.errorInput {\n    height: 34px;\n    border-color: red;\n    outline: none;\n}\n.ui.button {\n    margin-left: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<div id=\"createListContent\">\n  <table class=\"ui compact celled definition table\">\n    <thead>\n      <tr>\n        <th><i class=\"shop icon\" id=\"shopIcon\"></i></th>\n        <th>Name</th>\n        <th>Mark</th>\n        <th>Kind</th>\n        <th>Found in</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of rangeItems; let i = index\">\n        <td *ngIf=\"!isInList(item._id)\" class=\"addbuttonColumn\" (click)=\"addItemToList(item._id)\">+</td>\n        <td *ngIf=\"isInList(item._id)\" class=\"removebuttonColumn\" (click)=\"removeFromList(item._id)\">-</td>\n        <td>{{item.productname}}</td>\n        <td>{{item.mark}}</td>\n        <td>{{item.kind}}</td>\n        <td>{{item.inShop}}</td>\n      </tr>\n    </tbody>\n    <tfoot class=\"full-width\">\n      <tr>\n        <th>Itemcount:  {{allItems.length}}</th>\n        <th colspan=\"4\">\n          <div class=\"ui small button\" (click)=\"create()\">\n            Create list\n          </div>\n        </th>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n\n<div class=\"ui buttons\">\n    <div class=\"ui button {{page==activePage? 'active': ''}}\" *ngFor=\"let page of pages\" (click)=\"setPage(page)\">{{page}}</div>\n</div>\n\n<div *ngIf=\"creatingList\" class=\"choiceWindow\">\n    <div class=\"ui raised segment\">\n      <div><i class=\"close icon\" (click)=\"closeCreateList()\"></i></div>\n      <div class=\"field\" id=\"questionandicondiv\">\n        <div class=\"questiondiv\">\n          <h2 class=\"ui header\">How do you wish to name you list?</h2>\n        </div>\n        <div class=\"icondiv\">\n          <i class=\"help icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\" id=\"listnameSave\">\n        <input name=\"listname\" [(ngModel)]='listName.listname' pattern=\"[a-zA-Z0-9 ]*\" #listname=\"ngModel\" required\n          [ngClass]=\"{'errorInput': listname.invalid && listname.dirty, 'name': listname.valid }\">\n        <button class=\"ui button\" (click)=\"createList()\">OK</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/createlist/createlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_itemList_service__ = __webpack_require__("../../../../../src/app/services/itemList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_itemList_model__ = __webpack_require__("../../../../../src/app/models/itemList.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function CreatelistComponent(alertService, itemService, itemListService, userService) {
        this.alertService = alertService;
        this.itemService = itemService;
        this.itemListService = itemListService;
        this.userService = userService;
        this.allItems = [];
        this.localList = [];
        this.listName = { "listname": "Default" };
        this.creatingList = false;
        this.rangeItems = [];
        this.pages = [];
        this.activePage = 0;
    }
    CreatelistComponent.prototype.ngOnInit = function () {
        this.geefAllItems();
    };
    CreatelistComponent.prototype.geefAllItems = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (items) {
            _this.allItems = items;
            _this.pageButtons();
            _this.setPage(1);
        });
    };
    CreatelistComponent.prototype.addItemToList = function (id) {
        this.localList.push(id);
    };
    CreatelistComponent.prototype.removeFromList = function (id) {
        var index = this.localList.indexOf(id);
        if (index !== -1)
            this.localList.splice(index, 1);
    };
    CreatelistComponent.prototype.isInList = function (id) {
        var index = this.localList.indexOf(id);
        if (index !== -1)
            return true;
        return false;
    };
    CreatelistComponent.prototype.closeCreateList = function () {
        this.creatingList = false;
    };
    CreatelistComponent.prototype.create = function () {
        if (this.localList.length != 0) {
            this.creatingList = true;
        }
        else {
            this.alertService.error("Creating list failed: No items in list");
        }
    };
    CreatelistComponent.prototype.createList = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem("loggedUser"));
        this.newItemList = new __WEBPACK_IMPORTED_MODULE_4__models_itemList_model__["a" /* ItemList */](this.listName.listname, this.localList, user._id);
        console.log(this.newItemList);
        this.itemListService.create(this.newItemList).subscribe(function (data) {
            _this.alertService.success("Created new list");
            _this.localList.length = 0;
            _this.creatingList = false;
        }, function (error) {
            _this.alertService.error("Creating list failed: " + error);
        });
    };
    CreatelistComponent.prototype.setPage = function (page) {
        this.activePage = page;
        this.createRange(10);
    };
    CreatelistComponent.prototype.createRange = function (number) {
        this.rangeItems.length = 0;
        for (var i = number * (this.activePage - 1); i < number * this.activePage; i++) {
            if (this.allItems[i])
                this.rangeItems.push(this.allItems[i]);
        }
    };
    CreatelistComponent.prototype.pageButtons = function () {
        var number = 0;
        if ((this.allItems.length + 1) % 10 == 0 || (this.allItems.length + 1) / 10 == 1) {
            number = (this.allItems.length + 1) / 10;
        }
        else {
            number = ((this.allItems.length + 1) / 10) + 1;
        }
        for (var i = 1; i <= number; i++) {
            this.pages.push(i);
        }
    };
    return CreatelistComponent;
}());
CreatelistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-createlist',
        template: __webpack_require__("../../../../../src/app/mainboard/createlist/createlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/createlist/createlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_itemList_service__["a" /* ItemListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_itemList_service__["a" /* ItemListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], CreatelistComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=createlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainboard/mainboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainboardMenu {\n    z-index: 100;\n    position: fixed;\n    height: 100%;\n    width: 200px;\n}\n\n.header {\n    height:60px;\n    text-align: left;\n    position: relative;\n    padding-top: 10px;\n    background-color: white;\n    border-bottom: 1px solid #353534;\n}\n.header .logo {\n    background-image: url(" + __webpack_require__("../../../../../disc/Assets/Images/mslh.png") + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    margin: 0 0 0 10px;\n    height: 35px;\n}\n\n.navmenu {\n    position: fixed;\n    z-index: 100;\n    padding: 0;\n    margin: 0;\n    width: 200px;\n    height: 100%;\n    background-color: rgb(247, 245, 245);\n    border-right: 1px solid #353534;\n}\n\n.ui.vertical.demo.menu {\n    width: 100%;\n    border-radius: 0;\n}\n\n.logout {\n    outline: none;\n    background-color: rgb(212, 211, 211);\n    border-top: 2px solid rgba(88, 88, 88, 0.144);\n    border-right: 1px solid #353534;\n    text-align: center;\n    height: 35px;\n    width: 200px;\n    bottom: 0px; \n}\n.logout:hover {\n    background-color: rgb(197, 197, 197);\n    cursor: pointer;\n}\n.logout a{\n    line-height: 35px;\n    color: white;\n    text-decoration: none; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/mainboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\"><div class=\"logo\"></div></div>\n<div class=\"navmenu\">\n  <div class=\"ui vertical demo menu\">\n    <a class=\"item {{showCreateList}}\" (click)=\"showCreateListBoard()\">\n        Create new list\n    </a>\n    <!-- <a class=\"item\" (click)=\"showAllItemsBoard()\">\n        List\n      <div class=\"ui label\">0</div>\n    </a> -->\n    <a class=\"item {{showMyLists}}\" (click)=\"showMyListsBoard()\">\n        My personal lists\n      <div class=\"ui label\">1</div>\n    </a>\n    <a class=\"item {{showAllItems}}\" (click)=\"showAllItemsBoard()\">\n        All items\n    </a>\n  </div>\n  <div [routerLink]=\"['/login']\" class=\"logout\">\n    <a>Afmelden</a>\n  </div>\n</div>\n\n<div *ngIf=\"createList\">\n  <app-createlist></app-createlist>\n</div>\n<div *ngIf=\"allItems\">\n  <app-allitems></app-allitems>\n</div>\n<div *ngIf=\"myLists\">\n  <app-mylists></app-mylists>\n</div>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#pagecontent {\n    height: 639px;\n    margin: 2% 0 0 200px;\n}\n.noLists {\n    text-align: center;\n}\n\n.content {\n    width: 100%;\n}\n\nlistitemsContent::-webkit-scrollbar {\n    width: 0px;\n    background: transparent;\n}\n.listitemsContent {\n    width: 95%;\n    margin: 0 0 0 45px;\n    max-height: 125px;\n    overflow-y: auto;\n}\n.ui.segment {\n    width: 80%;\n    height: 150px;\n    margin: 0 0 2% 10%;\n}\n\n.ui.horizontal.header.divider {\n    margin: 0 20% 20px 20%;\n    z-index: -100;\n}\n\n.ui.buttons {\n    margin-left: 300px;\n}\n\n.ui.top.left.attached.label:hover {\n    cursor: pointer;\n    background-color: rgb(194, 194, 194);\n}\n.ui.bottom.left.attached.label {\n    text-align: center;\n    background-color: rgb(197, 64, 64);\n    width: 46px;\n}\n.ui.bottom.left.attached.label:hover {\n    cursor: pointer;\n    background-color: rgba(235, 114, 114, 0.801);\n    text-align: center;\n}\n\n.trash.icon {\n    margin: 0;\n    color: white;\n}\n\n.ui.divided.relaxed.horizontal.list {\n    width: 100%;\n}\n.ui.horizontal.relaxed.list>.item:not(:first-child) {\n    padding-left: 5px;\n}\n.ui.divided.relaxed.horizontal.list .item {\n    float: left;\n    width: 150px;\n    margin-bottom: 4px;\n}\n\n#error {\n    background-color: rgba(255, 75, 75, 0.356);\n}\n\n.choiceWindow {\n    top: 0;\n    left: 0;\n    z-index: 200;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.747);\n}\n.ui.raised.segment {\n    position: relative;\n    margin-top: 15%;\n    border-radius: 5px;\n    height: 200px;\n    width: 33%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.close.icon {\n    height: auto;\n}\n.close.icon:hover {\n    cursor: pointer;\n    background-color: black;\n    color: white;\n}\n\n#questionandicondiv {\n    margin: 2% 0 10px 17%;\n    width: 80%;\n    height: 80px;\n}\n.questiondiv {\n    float: left;\n    width: 70%;\n}\n.icondiv {\n    margin-top: 5%;\n    float: left;\n}\n\n.ui.header {\n    text-align: center;\n    margin-bottom: 1%;\n    margin-top: 0;\n}\n\n.help.icon {\n    height: auto;\n    font-size: 42px;\n}\n\n#listnameSave {\n    padding-left: 20%;\n}\n.name {\n    height: 34px;\n    outline: none;\n}\n.errorInput {\n    height: 34px;\n    border-color: red;\n    outline: none;\n}\n.ui.button {\n    margin-left: 5px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainboard/mylists/mylists.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<div id=\"pagecontent\">\n  <div *ngIf=\"noLists\" class=\"noLists\"><h3>[There are no lists]</h3></div>\n  <div class=\"listcontent\" *ngFor=\"let itemlist of rangeItems; let i = index\">\n    <div *ngIf=\"geefAllListItems(itemlist._id)\"></div>\n    <h5 class=\"ui horizontal header divider\">\n      {{itemlist.listname}}\n    </h5>\n    <div class=\"ui segment\">\n      <div class=\"ui top left attached label\" (click)=\"editTitle(itemlist._id)\">Edit</div>\n      <div class=\"ui bottom left attached label\" (click)=\"deleteList(itemlist._id)\">\n        <i class=\"trash icon\"></i>\n      </div>\n      <div class=\"listitemsContent\">\n        <div *ngIf=\"!loading\" class=\"ui divided relaxed horizontal list\">\n          <div class=\"item\" *ngFor=\"let item of listItems\">\n            <div class=\"ui top aligned avatar image\">\n              <i class=\"list icon\"></i>\n            </div>\n            <div class=\"content\">\n              <div class=\"header\">{{item.productname}}</div>\n              in {{item.inShop}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"ui buttons\">\n  <div class=\"ui button {{page==activePage? 'active': ''}}\" *ngFor=\"let page of pages\" (click)=\"setPage(page)\">{{page}}</div>\n</div>\n\n<div *ngIf=\"editListname\" class=\"choiceWindow\">\n  <div class=\"ui raised segment\">\n    <div><i class=\"close icon\" (click)=\"closeEditListname()\"></i></div>\n    <div class=\"field\" id=\"questionandicondiv\">\n      <div class=\"questiondiv\">\n        <h2 class=\"ui header\">How do you wish to rename you list?</h2>\n      </div>\n      <div class=\"icondiv\">\n        <i class=\"help icon\"></i>\n      </div>\n    </div>\n    <div class=\"field\" id=\"listnameSave\">\n      <input name=\"listname\" [(ngModel)]='newListName.listname' pattern=\"[a-zA-Z0-9 ]*\" #listname=\"ngModel\" required\n        [ngClass]=\"{'errorInput': listname.invalid && listname.dirty, 'name': listname.valid }\">\n      <!-- <div class=\"ui pointing below label\" *ngIf=\"listname.invalid && listname.dirty\" id=\"error\">\n        <div *ngIf=\"listname.errors.required\">Listname is required</div>\n        <div *ngIf=\"listname.errors.pattern\">Should only exist of characters</div>\n      </div> -->\n      <button class=\"ui button\" (click)=\"saveTitle()\">Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mainboard/mylists/mylists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_itemList_service__ = __webpack_require__("../../../../../src/app/services/itemList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var MylistsComponent = (function () {
    function MylistsComponent(alertService, itemListService, itemService) {
        this.alertService = alertService;
        this.itemListService = itemListService;
        this.itemService = itemService;
        this.itemLists = [];
        this.allItems = [];
        this.listItems = [];
        this.newListName = {};
        this.rangeItems = [];
        this.pages = [];
        this.activePage = 0;
        this.editListname = false;
        this.noLists = false;
        this.loading = true;
    }
    MylistsComponent.prototype.ngOnInit = function () {
        this.geefAllItemLists();
    };
    MylistsComponent.prototype.geefAllItemLists = function () {
        var _this = this;
        this.itemListService.getAllItemLists().subscribe(function (itemlists) {
            _this.itemLists = itemlists;
            if (_this.allItems.length == 0)
                _this.geefAllItems();
            if (_this.itemLists.length == 0)
                _this.noLists = true;
        });
    };
    MylistsComponent.prototype.geefAllItems = function () {
        var _this = this;
        this.itemService.getAllItems().subscribe(function (items) {
            _this.allItems = items;
            _this.loading = false;
            _this.pageButtons();
            _this.setPage(1);
        });
    };
    MylistsComponent.prototype.geefAllListItems = function (id) {
        var _this = this;
        this.listItems.length = 0;
        var list = this.itemLists.find(function (itemlist) { return itemlist._id == id; });
        list.itemIds.forEach(function (itemId) {
            var item = _this.allItems.find(function (item) { return item._id == itemId; });
            _this.listItems.push(item);
        });
        return true;
    };
    MylistsComponent.prototype.deleteList = function (id) {
        var _this = this;
        this.itemListService.delete(id).subscribe(function (data) {
            _this.alertService.success("Deleted the choisen list");
            _this.removeFromItemLists(id);
            _this.createRange(3);
        });
    };
    MylistsComponent.prototype.removeFromItemLists = function (id) {
        var list = this.itemLists.find(function (itemlist) { return itemlist._id == id; });
        var index = this.itemLists.indexOf(list);
        if (index !== -1)
            this.itemLists.splice(index, 1);
    };
    MylistsComponent.prototype.closeEditListname = function () {
        this.editListname = false;
    };
    MylistsComponent.prototype.editTitle = function (id) {
        this.editedList = this.itemLists.find(function (itemlist) { return itemlist._id == id; });
        this.newListName = {
            "listname": this.editedList.listname
        };
        this.editListname = true;
    };
    MylistsComponent.prototype.saveTitle = function () {
        var _this = this;
        if (this.newListName.listname != "" && this.newListName.listname != undefined) {
            this.editedList.listname = this.newListName.listname;
            this.itemListService.update(this.editedList).subscribe(function (data) {
                _this.alertService.success("Updated list");
                _this.newListName = {};
                _this.editListname = false;
                _this.geefAllItemLists();
            });
        }
    };
    MylistsComponent.prototype.setPage = function (page) {
        this.activePage = page;
        this.createRange(3);
    };
    MylistsComponent.prototype.createRange = function (number) {
        console.log(this.rangeItems);
        this.rangeItems.length = 0;
        for (var i = number * (this.activePage - 1); i < number * this.activePage; i++) {
            if (this.itemLists[i])
                this.rangeItems.push(this.itemLists[i]);
        }
        console.log(this.rangeItems);
    };
    MylistsComponent.prototype.pageButtons = function () {
        var number = 0;
        if ((this.itemLists.length + 1) % 3 == 0 || (this.itemLists.length + 1) / 3 == 1) {
            number = (this.itemLists.length + 1) / 3;
        }
        else {
            number = ((this.itemLists.length + 1) / 3) + 1;
        }
        for (var i = 1; i <= number; i++) {
            this.pages.push(i);
        }
    };
    return MylistsComponent;
}());
MylistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-mylists',
        template: __webpack_require__("../../../../../src/app/mainboard/mylists/mylists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainboard/mylists/mylists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_itemList_service__["a" /* ItemListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_itemList_service__["a" /* ItemListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_item_service__["a" /* ItemService */]) === "function" && _c || Object])
], MylistsComponent);

var _a, _b, _c;
//# sourceMappingURL=mylists.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(productName, mark, kind, inShop, _id) {
        this.productname = productName;
        this.mark = mark;
        this.kind = kind;
        this.inShop = inShop;
        this._id = _id;
    }
    Item.prototype.toJSON = function () {
        return {
            id: this._id,
            productname: this.productname,
            mark: this.mark,
            productkind: this.kind,
            shop: this.inShop
        };
    };
    return Item;
}());

//# sourceMappingURL=item.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/itemList.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemList; });
var ItemList = (function () {
    function ItemList(listname, itemIds, userId, id) {
        this.items = [];
        this.itemIds = [];
        this.listname = listname;
        this.itemIds = itemIds;
        this.userId = userId;
        this._id = id;
    }
    ItemList.prototype.toJSON = function () {
        return {
            id: this._id,
            listname: this.listname,
            items: this.items,
            user: this.user,
            itemIds: this.itemIds,
            userId: this.userId,
        };
    };
    return ItemList;
}());

//# sourceMappingURL=itemList.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, firstName, lastName, email, role, _id, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this._id = _id;
    }
    User.prototype.setUserName = function (username) {
        this.username = username;
    };
    User.prototype.setFirstName = function (firstname) {
        this.firstName = firstname;
    };
    User.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.toJSON = function () {
        return {
            id: this._id,
            username: this.username,
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            password: this.password
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
                this.newUser.role = "USER";
                this.userService.create(this.newUser).subscribe(function (data) {
                    _this.router.navigate(["/login"]);
                }, function (error) {
                    _this.alertService.error(error);
                });
            }
        }
        else {
            this.newUser.role = "USER";
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item_model__ = __webpack_require__("../../../../../src/app/models/item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        //inDevelopment: boolean = true;
        this.inDevelopment = false;
    }
    ItemService.prototype.create = function (item) {
        return this.http.post(this.prepEndPoint('/items/create'), item);
    };
    ItemService.prototype.getItemById = function (_id) {
        return this.http.get(this.prepEndPoint('/items/current/' + _id)).map(function (response) { return response.json(); })
            .map(function (item) { return new __WEBPACK_IMPORTED_MODULE_2__models_item_model__["a" /* Item */](item.productname, item.mark, item.kind, item.inShop, item._id); });
    };
    ItemService.prototype.getAllItems = function () {
        return this.http.get(this.prepEndPoint('/items/')).map(function (response) { return response.json(); })
            .map(function (items) {
            console.log(items);
            var result = [];
            items.forEach(function (item) {
                var itm = new __WEBPACK_IMPORTED_MODULE_2__models_item_model__["a" /* Item */](item.productname, item.mark, item.kind, item.inShop, item._id);
                result.push(itm);
            });
            return result;
        });
    };
    ItemService.prototype.update = function (item) {
        return this.http.put(this.prepEndPoint('/items/' + item._id), item);
    };
    ItemService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndPoint('/items/' + _id));
    };
    ItemService.prototype.prepEndPoint = function (endPoint) {
        if (this.inDevelopment) {
            return 'http://localhost:4000' + endPoint;
        }
        else {
            return 'https://mtwebappsproject.herokuapp.com' + endPoint;
        }
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/itemList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_itemList_model__ = __webpack_require__("../../../../../src/app/models/itemList.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemListService = (function () {
    function ItemListService(http) {
        this.http = http;
        //inDevelopment: boolean = true;
        this.inDevelopment = false;
    }
    ItemListService.prototype.create = function (itemList) {
        console.log(itemList);
        return this.http.post(this.prepEndPoint('/itemlists/create'), itemList);
    };
    ItemListService.prototype.getItemListById = function (_id) {
        return this.http.get(this.prepEndPoint('/itemlists/current/' + _id)).map(function (response) { return response.json(); })
            .map(function (itemlist) { return new __WEBPACK_IMPORTED_MODULE_2__models_itemList_model__["a" /* ItemList */](itemlist.listname, itemlist.itemIds, itemlist.userId, itemlist._id); });
    };
    ItemListService.prototype.getAllItemLists = function () {
        console.log("aaa");
        return this.http.get(this.prepEndPoint('/itemlists/')).map(function (response) { return response.json(); })
            .map(function (itemslists) {
            console.log(itemslists);
            var result = [];
            itemslists.forEach(function (itemlist) {
                var itmlist = new __WEBPACK_IMPORTED_MODULE_2__models_itemList_model__["a" /* ItemList */](itemlist.listname, itemlist.itemIds, itemlist.userId, itemlist._id);
                result.push(itmlist);
            });
            return result;
        });
    };
    ItemListService.prototype.update = function (itemList) {
        return this.http.put(this.prepEndPoint('/itemlists/' + itemList._id), itemList);
    };
    ItemListService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndPoint('/itemlists/' + _id));
    };
    ItemListService.prototype.prepEndPoint = function (endPoint) {
        if (this.inDevelopment) {
            return 'http://localhost:4000' + endPoint;
        }
        else {
            return 'https://mtwebappsproject.herokuapp.com' + endPoint;
        }
    };
    return ItemListService;
}());
ItemListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ItemListService);

var _a;
//# sourceMappingURL=itemList.service.js.map

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
        return this.http.get(this.prepEndPoint('/users/')).map(function (response) { return response.json(); })
            .map(function (users) {
            console.log(users);
            var result = [];
            users.forEach(function (user) {
                var usr = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](user.username, user.firstName, user.lastName, user.email, user.role, user._id);
                result.push(usr);
            });
            return result;
        });
    };
    UserService.prototype.getUserById = function (_id) {
        return this.http.get(this.prepEndPoint('/users/current/' + _id)).map(function (response) { return response.json(); });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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