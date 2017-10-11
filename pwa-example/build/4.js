webpackJsonp([4],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeStoragePageModule", function() { return NativeStoragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_native_storage_native_storage_provider__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__native_storage__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NativeStoragePageModule = /** @class */ (function () {
    function NativeStoragePageModule() {
    }
    NativeStoragePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__native_storage__["a" /* NativeStoragePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__native_storage__["a" /* NativeStoragePage */])],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_3__providers_native_storage_native_storage_provider__["a" /* NativeStorageProvider */]]
        })
    ], NativeStoragePageModule);
    return NativeStoragePageModule;
}());

//# sourceMappingURL=native-storage.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Native Storage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from '@ionic-native/native-storage';
 *
 * constructor(private nativeStorage: NativeStorage) { }
 *
 * ...
 *
 * this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * this.nativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
var NativeStorage = (function (_super) {
    __extends(NativeStorage, _super);
    function NativeStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.setItem = function (reference, value) { return; };
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.getItem = function (reference) { return; };
    /**
     * Retrieving all keys
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.keys = function () { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.remove = function (reference) { return; };
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.clear = function () { return; };
    return NativeStorage;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
NativeStorage.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
NativeStorage.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "setItem", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "getItem", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "keys", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "remove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "clear", null);
NativeStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'NativeStorage',
        plugin: 'cordova-plugin-nativestorage',
        pluginRef: 'NativeStorage',
        repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage',
        platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
    })
], NativeStorage);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(287);
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


var NativeStorageProvider = /** @class */ (function () {
    function NativeStorageProvider(nativeStorage) {
        this.nativeStorage = nativeStorage;
    }
    NativeStorageProvider.prototype.inicializarStorage = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.getDataNativeStorage(key);
                }
                catch (err) {
                    this.insertDataNativeStorage(key, value);
                }
                return [2 /*return*/];
            });
        });
    };
    NativeStorageProvider.prototype.insertDataNativeStorage = function (key, value) {
        this.nativeStorage
            .setItem(key, JSON.stringify(value))
            .then(function () { return console.log("Stored item!"); }, function (error) { return console.error("Error storing item", error); });
    };
    NativeStorageProvider.prototype.getDataNativeStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.nativeStorage.getItem(key)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, JSON.parse(data)];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NativeStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], NativeStorageProvider);
    return NativeStorageProvider;
}());

//# sourceMappingURL=native-storage.provider.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeStoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_native_storage_native_storage_provider__ = __webpack_require__(288);
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




var NativeStoragePage = /** @class */ (function () {
    function NativeStoragePage(navCtrl, navParams, nativeStorageProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorageProvider = nativeStorageProvider;
        this.formBuilder = formBuilder;
        this.itemsStorage = [];
        this.inputForm = formBuilder.group({
            input: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    NativeStoragePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.nativeStorageProvider.inicializarStorage("items", [])];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.nativeStorageProvider.getDataNativeStorage("items")];
                    case 2:
                        _a.itemsStorage = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NativeStoragePage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.nativeStorageProvider.getDataNativeStorage("items")];
                    case 1:
                        _a.itemsStorage = _b.sent();
                        if (this.itemsStorage == undefined || this.itemsStorage == null) {
                            this.itemsStorage = [];
                        }
                        this.itemsStorage.push(this.inputForm.value.input);
                        this.nativeStorageProvider.insertDataNativeStorage("items", this.itemsStorage);
                        this.inputForm.reset();
                        return [2 /*return*/];
                }
            });
        });
    };
    NativeStoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-native-storage",template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\native-storage\native-storage.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n              <ion-icon color="exemplo" name="menu"></ion-icon>\n            </button>\n    <ion-title>Native Storage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="inputForm">\n    <ion-grid>\n      <ion-item>\n        <ion-label color="fc" floating>Input Native Storage</ion-label>\n        <ion-input formControlName="input" type="text" required></ion-input>\n      </ion-item>\n\n      <button (click)="onSubmit()" [disabled]="inputForm.status==\'INVALID\'" ion-button>\n        Adicionar item\n      </button>\n    </ion-grid>\n  </form>\n\n\n  <ion-list>\n    <button ion-item *ngFor="let item of itemsStorage">\n        {{ item }}\n      </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\native-storage\native-storage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_native_storage_native_storage_provider__["a" /* NativeStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], NativeStoragePage);
    return NativeStoragePage;
}());

//# sourceMappingURL=native-storage.js.map

/***/ })

});
//# sourceMappingURL=4.js.map