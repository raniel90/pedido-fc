import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: "page-sqlite-storage",
  templateUrl: "sqlite-storage.html"
})
export class SqliteStoragePage {
  inputForm: FormGroup;
  items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public databaseProvider: DatabaseProvider
  ) {
    this.inputForm = formBuilder.group({
      input: ["", [Validators.required]]
    });
  }

  async ionViewDidLoad() {
    this.items = await this.getItems();
  }

  async onSubmit() {
    await this.insertItem();
    this.items = await this.getItems();
    console.log(this.items);
  }

  async insertItem() {
    let query =
      "INSERT INTO item (nome) VALUES ('" + this.inputForm.value.input + "')";
    return await this.databaseProvider.executeQuery(query);
  }

  async getItems() {
    let query = "SELECT * FROM item";
    return await this.databaseProvider.executeQuery(query);
  }
}
