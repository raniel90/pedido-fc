import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-geolocation",
  templateUrl: "geolocation.html"
})
export class GeolocationPage {
  latitude;
  longitude;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {}

  ionViewDidLoad() {
    this.getPosicaoAtual();
  }

  getPosicaoAtual() {
    console.log("chamou método setCurrentPosition");
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        alert(JSON.stringify(resp));
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      })
      .catch(error => {
        alert(JSON.stringify("Error getting location", error));
        console.log("Error getting location", error);
      });
  }
}
