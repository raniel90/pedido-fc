import { Component, ViewChild } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, Nav, Platform } from 'ionic-angular';

import { ItemOrm } from './../domain/item-orm.domain';
import { environments } from './../environments/environments';
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
    private bluebirdProvider: BluebirdProvider,
    private ga: GoogleAnalytics,
    public events: Events,
    private oneSignal: OneSignal
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
      { title: "Image Header", component: "ImageHeaderPage" },
      { title: "Geolocation", component: "GeolocationPage" }
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

      /**
       * Registro do evento que checa a página ativa no app e envia esta informação
       * para o Google Analytics
       */
      this.setActivePage();

      this.startTrackGoogleAnalytics();

      this.initOneSignal();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  startTrackGoogleAnalytics() {
    this.ga
      .startTrackerWithId(environments.GA_TRACKER_ID)
      .then(() => {
        console.log("Google analytics is ready now");
        this.ga.setAppVersion("0.0.1");
      })
      .catch(e => console.log("Error starting GoogleAnalytics", e));
  }

  setActivePage() {
    this.events.subscribe("activePage", (activePage: string) => {
      if (activePage != null) {
        console.log(activePage);
        if (this.platform.is("cordova")) {
          this.ga.trackView(activePage);
        }
      }
    });
  }

  initOneSignal() {
    this.oneSignal.startInit(
      "1c283a3e-e95a-4d82-acd3-73251feb165f",
      "898128186875"
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.InAppAlert
    );

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
}
