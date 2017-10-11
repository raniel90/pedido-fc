webpackJsonp([7],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqliteStoragePageModule", function() { return SqliteStoragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sqlite_storage__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SqliteStoragePageModule = /** @class */ (function () {
    function SqliteStoragePageModule() {
    }
    SqliteStoragePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sqlite_storage__["a" /* SqliteStoragePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sqlite_storage__["a" /* SqliteStoragePage */])]
        })
    ], SqliteStoragePageModule);
    return SqliteStoragePageModule;
}());

//# sourceMappingURL=sqlite-storage.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteStoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite_provider__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SqliteStoragePage = /** @class */ (function () {
    function SqliteStoragePage(navCtrl, navParams, formBuilder, sqLiteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.sqLiteProvider = sqLiteProvider;
        this.items = [];
        this.inputForm = formBuilder.group({
            input: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    SqliteStoragePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getItems()];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SqliteStoragePage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.insertItem()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.getItems()];
                    case 2:
                        _a.items = _b.sent();
                        console.log(this.items);
                        return [2 /*return*/];
                }
            });
        });
    };
    SqliteStoragePage.prototype.insertItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "INSERT INTO item (nome) VALUES ('" + this.inputForm.value.input + "')";
                        return [4 /*yield*/, this.sqLiteProvider.executeQuery(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SqliteStoragePage.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM item";
                        return [4 /*yield*/, this.sqLiteProvider.executeQuery(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SqliteStoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-sqlite-storage",template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\sqlite-storage\sqlite-storage.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n                <ion-icon color="exemplo" name="menu"></ion-icon>\n              </button>\n    <ion-title>SQLite Storage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <form [formGroup]="inputForm">\n    <ion-grid>\n      <ion-item>\n        <ion-label color="fc" floating>Input SQLite Storage</ion-label>\n        <ion-input formControlName="input" type="text" required></ion-input>\n      </ion-item>\n\n      <button (click)="onSubmit()" [disabled]="inputForm.status==\'INVALID\'" ion-button>\n          Adicionar item\n        </button>\n    </ion-grid>\n  </form>\n\n\n  <ion-list *ngFor="let item of items">\n    <ion-col>\n      {{ item.nome }}\n    </ion-col>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\sqlite-storage\sqlite-storage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite_provider__["a" /* SQLiteProvider */]])
    ], SqliteStoragePage);
    return SqliteStoragePage;
}());

//# sourceMappingURL=sqlite-storage.js.map

/***/ })

});
//# sourceMappingURL=7.js.map