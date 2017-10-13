import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-ionic-generic",
  templateUrl: "ionic-generic.html"
})
export class IonicGenericPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {}

  ionViewDidEnter() {
    this.events.publish("activePage", this.viewCtrl.component.name);
  }
}
