webpackJsonp([9],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEventPageModule", function() { return InputEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_event__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputEventPageModule = /** @class */ (function () {
    function InputEventPageModule() {
    }
    InputEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_event__["a" /* InputEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__input_event__["a" /* InputEventPage */]),
            ],
        })
    ], InputEventPageModule);
    return InputEventPageModule;
}());

//# sourceMappingURL=input-event.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the InputEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputEventPage = /** @class */ (function () {
    function InputEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valorDigitado = "";
    }
    InputEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputEventPage');
    };
    InputEventPage.prototype.exibirValorDigitado = function (event) {
        this.valorDigitado = event.target.value;
    };
    InputEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-input-event',template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\input-event\input-event.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n            <ion-icon color="exemplo" name="menu"></ion-icon>\n          </button>\n    <ion-title>Input Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="fc" floating>Input Event</ion-label>\n        <ion-input (keyup)="exibirValorDigitado($event)" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  {{valorDigitado}}\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\input-event\input-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InputEventPage);
    return InputEventPage;
}());

//# sourceMappingURL=input-event.js.map

/***/ })

});
//# sourceMappingURL=9.js.map