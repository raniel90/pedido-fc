import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmailValidator } from '../../validators/email.validator';

@IonicPage()
@Component({
  selector: "page-reactive-form",
  templateUrl: "reactive-form.html"
})
export class ReactiveFormPage {
  clienteForm: FormGroup;
  telefones: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.clienteForm = formBuilder.group({
      razaoSocial: ["", [Validators.required]],
      email: ["", [Validators.required, EmailValidator.validate]],
      telefones: this.formBuilder.array([this.criarFormTelefone()])
    });
  }

  criarFormTelefone(): FormGroup {
    return this.formBuilder.group({
      ddd: ["", [Validators.required, Validators.maxLength(3)]],
      numero: ["", [Validators.required]]
    });
  }

  adicionarTelefone(): void {
    this.telefones = this.clienteForm.get("telefones") as FormArray;
    this.telefones.push(this.criarFormTelefone());
  }

  exibirBotaoAdicionarTelefone(index) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReactiveFormPage");
  }

  onSubmit() {
    console.log(this.clienteForm.value);
  }
}
