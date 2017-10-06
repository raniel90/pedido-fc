import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from './cliente'

/**
 * Generated class for the TemplateFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template-form',
  templateUrl: 'template-form.html',
})
export class TemplateFormPage {

  model = new Cliente("", "")

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    /*
    this.model = {
      razaoSocial: "",
      telefone: ""
    } */
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad TemplateFormPage');
  }

  onSubmit() {
    console.log(this.model)
  }
}
