webpackJsonp([5],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFormPageModule", function() { return TemplateFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_form__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemplateFormPageModule = /** @class */ (function () {
    function TemplateFormPageModule() {
    }
    TemplateFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__template_form__["a" /* TemplateFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__template_form__["a" /* TemplateFormPage */]),
            ],
        })
    ], TemplateFormPageModule);
    return TemplateFormPageModule;
}());

//# sourceMappingURL=template-form.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente__ = __webpack_require__(304);
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
 * Generated class for the TemplateFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemplateFormPage = /** @class */ (function () {
    function TemplateFormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__cliente__["a" /* Cliente */]("", "");
        /*
        this.model = {
          razaoSocial: "",
          telefone: ""
        } */
    }
    TemplateFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemplateFormPage');
    };
    TemplateFormPage.prototype.onSubmit = function () {
        console.log(this.model);
    };
    TemplateFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-template-form',template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\template-form\template-form.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n            <ion-icon color="exemplo" name="menu"></ion-icon>\n          </button>\n    <ion-title>Template Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <form (ngSubmit)="onSubmit()" #clienteForm="ngForm">\n    <ion-grid>\n      <ion-item>\n        <ion-label color="fc" floating>Razão Social</ion-label>\n        <ion-input [(ngModel)]="model.razaoSocial" name="razaoSocial" type="text" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="fc" floating>Telefone</ion-label>\n        <ion-input [(ngModel)]="model.telefone" name="telefone" type="tel"></ion-input>\n      </ion-item>\n    </ion-grid>\n\n    <button [disabled]="!clienteForm.form.valid" ion-button full outline>Salvar cliente</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\template-form\template-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TemplateFormPage);
    return TemplateFormPage;
}());

//# sourceMappingURL=template-form.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(razaoSocial, telefone) {
        this.razaoSocial = razaoSocial;
        this.telefone = telefone;
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.js.map

/***/ })

});
//# sourceMappingURL=5.js.map