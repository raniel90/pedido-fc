import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BluebirdProvider } from '../providers/bluebird/bluebird.provider';
import { HoneywellProvider } from '../providers/honeywell/honeywell.provider';
import { ORMProvider } from '../providers/orm/orm.provider';
import { SQLiteProvider } from './../providers/sqlite/sqlite.provider';
import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    SQLiteProvider,
    ORMProvider,
    SQLite,
    HoneywellProvider,
    BluebirdProvider,
    GoogleAnalytics
  ]
})
export class AppModule {}
