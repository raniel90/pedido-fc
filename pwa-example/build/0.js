webpackJsonp([0,1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListaPageModule", function() { return ProdutoListaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_lista__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProdutoListaPageModule = /** @class */ (function () {
    function ProdutoListaPageModule() {
    }
    ProdutoListaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__produto_lista__["a" /* ProdutoListaPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__produto_lista__["a" /* ProdutoListaPage */])],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__["a" /* ProdutoProvider */]]
        })
    ], ProdutoListaPageModule);
    return ProdutoListaPageModule;
}());

//# sourceMappingURL=produto-lista.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoDetalhePageModule", function() { return ProdutoDetalhePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_lista_produto_lista_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_detalhe__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProdutoDetalhePageModule = /** @class */ (function () {
    function ProdutoDetalhePageModule() {
    }
    ProdutoDetalhePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__produto_detalhe__["a" /* ProdutoDetalhePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__produto_detalhe__["a" /* ProdutoDetalhePage */]),
                __WEBPACK_IMPORTED_MODULE_2__produto_lista_produto_lista_module__["ProdutoListaPageModule"]
            ]
        })
    ], ProdutoDetalhePageModule);
    return ProdutoDetalhePageModule;
}());

//# sourceMappingURL=produto-detalhe.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutoProvider = /** @class */ (function () {
    function ProdutoProvider(http) {
        this.http = http;
        this.URL_ROOT = "https://jsonplaceholder.typicode.com";
    }
    ProdutoProvider.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.URL_ROOT + url)
                .map(function (responseData) { return responseData.json(); })
                .subscribe(function (responseData) {
                resolve(responseData);
            }, function (error) {
                reject(error);
                console.debug("ERROR", error);
            });
        });
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(197);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produto_produto__ = __webpack_require__(284);
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




var ProdutoListaPage = /** @class */ (function () {
    function ProdutoListaPage(navCtrl, navParams, produtoProvider, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.barcodeScanner = barcodeScanner;
        this.produtos = [];
        this.comments = [];
        this.exibeBarcodeScanner = false;
    }
    ProdutoListaPage.prototype.ionViewCanEnter = function () {
        console.log("entrou ionViewCanEnter");
    };
    ProdutoListaPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("entrou ionViewDidLoad");
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.produtoProvider.get("/posts")];
                    case 2:
                        _a.produtos = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.produtoProvider.get("/comments")];
                    case 3:
                        _b.comments = _c.sent();
                        console.log(this.comments);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _c.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProdutoListaPage.prototype.detalharProduto = function (comment) {
        this.navCtrl.push("ProdutoDetalhePage");
    };
    ProdutoListaPage.prototype.openBarcode = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            alert(JSON.stringify(barcodeData));
        }, function (err) {
            alert(err);
        });
    };
    ProdutoListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-produto-lista",template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\produto-lista\produto-lista.html"*/'<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n          <ion-icon color="exemplo" name="menu"></ion-icon>\n        </button>\n    <ion-title>Pedido FC</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openBarcode()">\n        <ion-icon color="exemplo" name="md-barcode"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-searchbar></ion-searchbar>\n\n  <ion-row padding *ngFor="let comment of comments">\n    <ion-col>\n      {{comment.name}}\n    </ion-col>\n    <ion-col>\n      <button (click)="detalharProduto(comment)" ion-button color="fc">Detalhar produto</button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\produto-lista\produto-lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ProdutoListaPage);
    return ProdutoListaPage;
}());

//# sourceMappingURL=produto-lista.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoDetalhePage; });
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
 * Generated class for the ProdutoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoDetalhePage = /** @class */ (function () {
    function ProdutoDetalhePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdutoDetalhePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProdutoDetalhePage");
    };
    ProdutoDetalhePage.prototype.detalharProduto = function () {
        //TO DO
    };
    ProdutoDetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-produto-detalhe",template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\pages\produto-detalhe\produto-detalhe.html"*/'<!--\n  Generated template for the ProdutoDetalhePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Produto Detalhe</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="produto-detalhe-ion-content" padding>\n    <ion-button (click)="detalharProduto()">\n\n    </ion-button>\n</ion-content>'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\pages\produto-detalhe\produto-detalhe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProdutoDetalhePage);
    return ProdutoDetalhePage;
}());

//# sourceMappingURL=produto-detalhe.js.map

/***/ })

});
//# sourceMappingURL=0.js.map