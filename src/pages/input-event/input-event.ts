import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { IonicGenericPage } from './../ionic-generic/ionic-generic';

@IonicPage()
@Component({
  selector: "page-input-event",
  templateUrl: "input-event.html"
})
export class InputEventPage extends IonicGenericPage {
  valorDigitado: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    super(navCtrl, navParams, events, viewCtrl);
  }

  exibirValorDigitado(event) {
    this.valorDigitado = event.target.value;
  }
}
