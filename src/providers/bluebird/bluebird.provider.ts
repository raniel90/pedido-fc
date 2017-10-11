import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var window: any;
declare var bluebirdBarcodeScanner: any;

@Injectable()
export class BluebirdProvider {
  constructor(private platform: Platform) {
    if (this.platform.is("cordova")) {
      this.registerBluebirdBarcodeScanner();
    }
  }

  registerBluebirdBarcodeScanner() {
    if (window.bluebirdBarcodeScanner) {
      console.log("[BLUEBIRD] initializing barcode scanner");
      if (bluebirdBarcodeScanner) {
        bluebirdBarcodeScanner.register(this.loadBarcode, function(argument) {
          console.log("[BLUEBIRD] failed to register barcode scanner");
        });
      }
    }
  }

  loadBarcode(barcode) {
    alert("[BLUEBIRD] barcode read : " + barcode);
    console.log("[BLUEBIRD] barcode read : " + barcode);
  }
}
