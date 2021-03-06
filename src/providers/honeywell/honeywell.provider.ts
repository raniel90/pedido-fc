import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var Honeywell: any;

@Injectable()
export class HoneywellProvider {
  constructor(private platform: Platform) {
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
  onBarcodeEvent() {
    if (Honeywell != undefined) {
      Honeywell.onBarcodeEvent(
        function(data) {
          console.log("[HONEYWELL] onBarcodeEvent", data);
        },
        function(reason) {
          console.log("[HONEYWELL] onBarcodeEvent", reason);
        }
      );
    }
  }

  /**
   *
   *
   * @name onFailureEvent
   * @function
   * @param {function} success Callback for success
   * @param {function} error Callback for error
   * @param {Object} args Named arguments
 */

  onFailureEvent() {
    if (Honeywell != undefined) {
      Honeywell.onFailureEvent(
        function(failure) {
          console.log("[HONEYWELL] onFailureEvent", failure);
        },
        function(reason) {
          console.log("[HONEYWELL] onFailureEvent", reason);
        }
      );
    }
  }
}
