import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { IonicGenericPage } from './../ionic-generic/ionic-generic';
import { Cliente } from './cliente';

/**
 * Generated class for the TemplateFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-template-form",
  templateUrl: "template-form.html"
})
export class TemplateFormPage extends IonicGenericPage {
  model = new Cliente("", "");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    super(navCtrl, navParams, events, viewCtrl);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TemplateFormPage");
  }

  onSubmit() {
    console.log(this.model);
  }
}
