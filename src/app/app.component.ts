import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { ItemOrm } from './../domain/item-orm.domain';
import { BluebirdProvider } from './../providers/bluebird/bluebird.provider';
import { HoneywellProvider } from './../providers/honeywell/honeywell.provider';
import { ORMProvider } from './../providers/orm/orm.provider';
import { SQLiteProvider } from './../providers/sqlite/sqlite.provider';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "ProdutoListaPage";

  pages: Array<{ title: string; component: any }>;

  domains = [{ entity: ItemOrm, tableName: "item_orm" }];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private sqLiteProvider: SQLiteProvider,
    private ormProvider: ORMProvider,
    private honeywellProvider: HoneywellProvider,
    private bluebirdProvider: BluebirdProvider
  ) {
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

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.sqLiteProvider.initDB();
      this.ormProvider.initDB(this.domains);

      if (this.platform.is("cordova")) {
        /**
         * Init Honeywell Scanner
         */
        this.honeywellProvider.onBarcodeEvent();
        this.honeywellProvider.onFailureEvent();

        /**
         * Init Bluebird Scanner
         */
        this.bluebirdProvider.registerBluebirdBarcodeScanner();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
