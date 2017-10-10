import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemOrm } from './../../domain/item-orm.domain';
import { ORMProvider } from './../../providers/orm/orm.provider';

@IonicPage()
@Component({
  selector: "page-orm-storage",
  templateUrl: "orm-storage.html"
})
export class OrmStoragePage {
  inputForm: FormGroup;
  itemsORM = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public ormProvider: ORMProvider
  ) {
    this.inputForm = formBuilder.group({
      input: ["", [Validators.required]]
    });
  }

  async ionViewDidLoad() {
    await this.getItems();
  }

  async onSubmit() {
    let itemOrm: ItemOrm = new ItemOrm();
    itemOrm.name = this.inputForm.value.input;
    await this.ormProvider.insert(ItemOrm, itemOrm);

    await this.getItems();

    this.inputForm.reset();
  }

  async getItems() {
    this.itemsORM = await this.ormProvider.findAll(ItemOrm);
  }
}
