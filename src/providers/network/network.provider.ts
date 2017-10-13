import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var navigator: any;
declare var Connection: any;
declare var WifiWizard: any;

@Injectable()
export class NetworkProvider {
  constructor(private platform: Platform) {}

  checkConnection() {
    if (this.platform.is("cordova")) {
      var networkState = navigator.connection.type;

      var states = {};
      states[Connection.UNKNOWN] = "Unknown connection";
      states[Connection.ETHERNET] = "Ethernet connection";
      states[Connection.WIFI] = "WiFi connection";
      states[Connection.CELL_2G] = "Cell 2G connection";
      states[Connection.CELL_3G] = "Cell 3G connection";
      states[Connection.CELL_4G] = "Cell 4G connection";
      states[Connection.CELL] = "Cell generic connection";
      states[Connection.NONE] = "No network connection";

      if (
        networkState == Connection.UNKNOWN ||
        networkState == Connection.NONE
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  ssidHandler(s) {
    console.log("[NETWORK SSID] Current SSID: " + s);
  }

  ssidFail(e) {
    console.log("[NETWORK SSID] Failed" + e);
  }

  getCurrentSSID() {
    if (this.platform.is("cordova")) {
      if (WifiWizard) {
        WifiWizard.getCurrentSSID(this.ssidHandler, this.ssidFail);
      }
    }
  }
}
