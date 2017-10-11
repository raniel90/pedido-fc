webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORMProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { createConnection } from 'ionic-orm-2';
//import { getConnectionManager } from 'ionic-orm-2';
var ORMProvider = /** @class */ (function () {
    function ORMProvider() {
    }
    ORMProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ORMProvider);
    return ORMProvider;
}());

//# sourceMappingURL=orm.provider.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLiteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionix_sqlite__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SQLiteProvider = /** @class */ (function () {
    function SQLiteProvider() {
    }
    SQLiteProvider.prototype.initDB = function () {
        var itemTable = "\n      CREATE TABLE IF NOT EXISTS item (\n        nome VARCHAR(100)\n      )";
        this.dbPromise = __WEBPACK_IMPORTED_MODULE_1_ionix_sqlite__["a" /* SqlDatabase */].open("fc.db", [itemTable]);
    };
    SQLiteProvider.prototype.delete = function (query) {
        return this.dbPromise
            .then(function (db) { return db.execute(query); })
            .then(function (resultSet) {
            return true;
        })
            .catch(function (err) {
            return false;
        });
    };
    SQLiteProvider.prototype.executeQuery = function (query) {
        return this.dbPromise.then(function (db) { return db.execute(query); }).then(function (resultSet) {
            var items = [];
            for (var i = 0; i < resultSet.rows.length; i++) {
                var row = resultSet.rows.item(i);
                items.push(row);
            }
            return items;
        });
    };
    SQLiteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SQLiteProvider);
    return SQLiteProvider;
}());

//# sourceMappingURL=sqlite.provider.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		274,
		10
	],
	"../pages/image-header/image-header.module": [
		275,
		3
	],
	"../pages/input-event/input-event.module": [
		276,
		9
	],
	"../pages/list/list.module": [
		277,
		2
	],
	"../pages/native-storage/native-storage.module": [
		278,
		4
	],
	"../pages/orm-storage/orm-storage.module": [
		279,
		8
	],
	"../pages/produto-detalhe/produto-detalhe.module": [
		280,
		0
	],
	"../pages/produto-lista/produto-lista.module": [
		273,
		1
	],
	"../pages/reactive-form/reactive-form.module": [
		281,
		6
	],
	"../pages/sqlite-storage/sqlite-storage.module": [
		282,
		7
	],
	"../pages/template-form/template-form.module": [
		283,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluebirdProvider; });
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


var BluebirdProvider = /** @class */ (function () {
    function BluebirdProvider(platform) {
        this.platform = platform;
        if (this.platform.is("cordova")) {
            this.registerBluebirdBarcodeScanner();
        }
    }
    BluebirdProvider.prototype.registerBluebirdBarcodeScanner = function () {
        if (window.bluebirdBarcodeScanner) {
            console.log("[BLUEBIRD] initializing barcode scanner");
            if (bluebirdBarcodeScanner) {
                bluebirdBarcodeScanner.register(this.loadBarcode, function (argument) {
                    console.log("[BLUEBIRD] failed to register barcode scanner");
                });
            }
        }
    };
    BluebirdProvider.prototype.loadBarcode = function (barcode) {
        console.log("[BLUEBIRD] barcode read : " + barcode);
    };
    BluebirdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], BluebirdProvider);
    return BluebirdProvider;
}());

//# sourceMappingURL=bluebird.provider.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoneywellProvider; });
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


var HoneywellProvider = /** @class */ (function () {
    function HoneywellProvider(platform) {
        this.platform = platform;
        if (platform.is("cordova")) {
            this.onBarcodeEvent();
            this.onFailureEvent();
        }
    }
    /**
     *
     *
     * @name onBarcodeEvent
     * @function
     * @param {function} success Callback for success
     * @param {function} error Callback for error
     * @param {Object} args Named arguments
   */
    HoneywellProvider.prototype.onBarcodeEvent = function () {
        if (Honeywell != undefined) {
            Honeywell.onBarcodeEvent(function (data) {
                console.log("[HONEYWELL] onBarcodeEvent", data);
            }, function (reason) {
                console.log("[HONEYWELL] onBarcodeEvent", reason);
            });
        }
    };
    /**
     *
     *
     * @name onFailureEvent
     * @function
     * @param {function} success Callback for success
     * @param {function} error Callback for error
     * @param {Object} args Named arguments
   */
    HoneywellProvider.prototype.onFailureEvent = function () {
        if (Honeywell != undefined) {
            Honeywell.onFailureEvent(function (failure) {
                console.log("[HONEYWELL] onFailureEvent", failure);
            }, function (reason) {
                console.log("[HONEYWELL] onFailureEvent", reason);
            });
        }
    };
    HoneywellProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], HoneywellProvider);
    return HoneywellProvider;
}());

//# sourceMappingURL=honeywell.provider.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemOrm; });
//import { Column, PrimaryColumn, Table } from 'ionic-orm-2';
//@Table()
var ItemOrm = /** @class */ (function () {
    function ItemOrm() {
    }
    return ItemOrm;
}());

//# sourceMappingURL=item-orm.domain.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_bluebird_bluebird_provider__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_honeywell_honeywell_provider__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_orm_orm_provider__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_sqlite_sqlite_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-header/image-header.module#ImageHeaderPageModule', name: 'ImageHeaderPage', segment: 'image-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-event/input-event.module#InputEventPageModule', name: 'InputEventPage', segment: 'input-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/native-storage/native-storage.module#NativeStoragePageModule', name: 'NativeStoragePage', segment: 'native-storage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orm-storage/orm-storage.module#OrmStoragePageModule', name: 'OrmStoragePage', segment: 'orm-storage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto-detalhe/produto-detalhe.module#ProdutoDetalhePageModule', name: 'ProdutoDetalhePage', segment: 'produto-detalhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto-lista/produto-lista.module#ProdutoListaPageModule', name: 'ProdutoListaPage', segment: 'produto-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reactive-form/reactive-form.module#ReactiveFormPageModule', name: 'ReactiveFormPage', segment: 'reactive-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sqlite-storage/sqlite-storage.module#SqliteStoragePageModule', name: 'SqliteStoragePage', segment: 'sqlite-storage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/template-form/template-form.module#TemplateFormPageModule', name: 'TemplateFormPage', segment: 'template-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_13__providers_sqlite_sqlite_provider__["a" /* SQLiteProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_orm_orm_provider__["a" /* ORMProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__providers_honeywell_honeywell_provider__["a" /* HoneywellProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_bluebird_bluebird_provider__["a" /* BluebirdProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_item_orm_domain__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bluebird_bluebird_provider__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_honeywell_honeywell_provider__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_orm_orm_provider__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sqlite_sqlite_provider__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, sqLiteProvider, ormProvider, honeywellProvider, bluebirdProvider, ga) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.sqLiteProvider = sqLiteProvider;
        this.ormProvider = ormProvider;
        this.honeywellProvider = honeywellProvider;
        this.bluebirdProvider = bluebirdProvider;
        this.ga = ga;
        this.rootPage = "ProdutoListaPage";
        this.domains = [{ entity: __WEBPACK_IMPORTED_MODULE_5__domain_item_orm_domain__["a" /* ItemOrm */], tableName: "item_orm" }];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Lista de Produtos", component: "ProdutoListaPage" },
            { title: "Input Event", component: "InputEventPage" },
            { title: "Template Form", component: "TemplateFormPage" },
            { title: "Reactive Form", component: "ReactiveFormPage" },
            { title: "Native Storage", component: "NativeStoragePage" },
            { title: "SQLite Storage", component: "SqliteStoragePage" },
            { title: "ORM Storage", component: "OrmStoragePage" },
            { title: "Image Header", component: "ImageHeaderPage" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (!_this.platform.is("browser")) {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.sqLiteProvider.initDB();
                //this.ormProvider.initDB(this.domains);
            }
            _this.startTrackGoogleAnalytics();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.startTrackGoogleAnalytics = function () {
        var _this = this;
        this.ga
            .startTrackerWithId("UA-107922563-1")
            .then(function () {
            console.log("Google analytics is ready now");
            _this.ga.trackView("test");
            _this.ga.setAppVersion("0.0.1");
        })
            .catch(function (e) { return console.log("Error starting GoogleAnalytics", e); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\trinity\Documents\pedido-fc\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\trinity\Documents\pedido-fc\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_sqlite_sqlite_provider__["a" /* SQLiteProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_orm_orm_provider__["a" /* ORMProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_honeywell_honeywell_provider__["a" /* HoneywellProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_bluebird_bluebird_provider__["a" /* BluebirdProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map