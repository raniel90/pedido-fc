webpackJsonp([6],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormPageModule", function() { return ReactiveFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactive_form__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReactiveFormPageModule = /** @class */ (function () {
    function ReactiveFormPageModule() {
    }
    ReactiveFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reactive_form__["a" /* ReactiveFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reactive_form__["a" /* ReactiveFormPage */]),
            ],
        })
    ], ReactiveFormPageModule);
    return ReactiveFormPageModule;
}());

//# sourceMappingURL=reactive-form.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveFormPage = /** @class */ (function () {
    function ReactiveFormPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.telefones = [];
        this.clienteForm = formBuilder.group({
            razaoSocial: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__["a" /* EmailValidator */].validate]],
            telefones: this.formBuilder.array([this.criarFormTelefone()])
        });
    }
    ReactiveFormPage.prototype.criarFormTelefone = function () {
        return this.formBuilder.group({
            ddd: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(3)]],
            numero: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    };
    ReactiveFormPage.prototype.adicionarTelefone = function () {
        this.telefones = this.clienteForm.get("telefones");
        this.telefones.push(this.criarFormTelefone());
    };
    ReactiveFormPage.prototype.exibirBotaoAdicionarTelefone = function (index) { };
    ReactiveFormPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ReactiveFormPage");
    };
    ReactiveFormPage.prototype.onSubmit = function () {
        console.log(this.clienteForm.value);
    };
    ReactiveFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-reactive-form",template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\reactive-form\reactive-form.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n              <ion-icon color="exemplo" name="menu"></ion-icon>\n            </button>\n    <ion-title>Reactive Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <form [formGroup]="clienteForm">\n    <ion-grid>\n      <ion-item>\n        <ion-label color="fc" floating>Razão Social</ion-label>\n        <ion-input formControlName="razaoSocial" type="text" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="fc" floating>E-mail</ion-label>\n        <ion-input formControlName="email" type="email"></ion-input>\n      </ion-item>\n\n      <div formArrayName="telefones" *ngFor="let item of clienteForm.get(\'telefones\').controls; let i = index;">\n        <div [formGroupName]="i">\n          <ion-row>\n            <ion-col col-3>\n              <ion-item>\n                <ion-label color="fc" floating>DDD</ion-label>\n                <ion-input formControlName="ddd" type="number"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-7>\n              <ion-item>\n                <ion-label color="fc" floating>Telefone</ion-label>\n                <ion-input formControlName="numero" type="number"></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col (click)="adicionarTelefone()" align="center" style="margin-top:7%">\n              <button [disabled]="item.status==\'INVALID\'" style="border-radius:100%;width:80% " ion-button icon-only>\n                    <ion-icon name="add"></ion-icon>\n                  </button>\n            </ion-col>\n\n          </ion-row>\n        </div>\n      </div>\n    </ion-grid>\n\n\n\n    <button (click)="onSubmit() " [disabled]="clienteForm.status==\'INVALID\' " ion-button full outline>Salvar cliente</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\reactive-form\reactive-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ReactiveFormPage);
    return ReactiveFormPage;
}());

//# sourceMappingURL=reactive-form.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { "INVALID_EMAIL": true };
        }
        return null;
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.validator.js.map

/***/ })

});
//# sourceMappingURL=6.js.map