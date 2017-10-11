webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHeaderPageModule", function() { return ImageHeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_header__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageHeaderPageModule = /** @class */ (function () {
    function ImageHeaderPageModule() {
    }
    ImageHeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__image_header__["a" /* ImageHeaderPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__image_header__["a" /* ImageHeaderPage */]), __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* DirectivesModule */]]
        })
    ], ImageHeaderPageModule);
    return ImageHeaderPageModule;
}());

//# sourceMappingURL=image-header.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_header_parallax_header__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__parallax_header_parallax_header__["a" /* ParallaxHeader */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__parallax_header_parallax_header__["a" /* ParallaxHeader */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxHeader = /** @class */ (function () {
    function ParallaxHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ParallaxHeader.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.header = content.getElementsByClassName("header-image")[0];
        var mainContent = content.getElementsByClassName("main-content")[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, "webkitTransformOrigin", "center bottom");
        this.renderer.setElementStyle(this.header, "background-size", "cover");
        this.renderer.setElementStyle(mainContent, "position", "absolute");
    };
    ParallaxHeader.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeader.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeader.prototype.updateParallaxHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, "webkitTransform", "translate3d(0," +
            this.translateAmt +
            "px,0) scale(" +
            this.scaleAmt +
            "," +
            this.scaleAmt +
            ")");
    };
    ParallaxHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[parallax-header]",
            host: {
                "(ionScroll)": "onContentScroll($event)",
                "(window:resize)": "onWindowResize($event)"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], ParallaxHeader);
    return ParallaxHeader;
}());

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageHeaderPage; });
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
 * Generated class for the ImageHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageHeaderPage = /** @class */ (function () {
    function ImageHeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImageHeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageHeaderPage');
    };
    ImageHeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-image-header',template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\image-header\image-header.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n              <ion-icon color="exemplo" name="menu"></ion-icon>\n            </button>\n    <ion-title>Image Header</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content parallax-header>\n\n  <div class="header-image"></div>\n\n  <div class="main-content">\n\n    <h2>Parallax Header</h2>\n\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n      book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\image-header\image-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ImageHeaderPage);
    return ImageHeaderPage;
}());

//# sourceMappingURL=image-header.js.map

/***/ })

});
//# sourceMappingURL=3.js.map