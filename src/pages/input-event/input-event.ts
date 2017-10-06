import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InputEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-event',
  templateUrl: 'input-event.html',
})
export class InputEventPage {

  valorDigitado: string = ""

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputEventPage');
  }

  exibirValorDigitado(event) {
    this.valorDigitado = event.target.value
  }

}
