import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeStorageProvider } from './../../providers/native-storage/native-storage.provider';

@IonicPage()
@Component({
  selector: "page-native-storage",
  templateUrl: "native-storage.html"
})
export class NativeStoragePage {
  inputForm: FormGroup;
  itemsStorage = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeStorageProvider: NativeStorageProvider,
    public formBuilder: FormBuilder
  ) {
    this.inputForm = formBuilder.group({
      input: ["", [Validators.required]]
    });
  }

  async ionViewDidLoad() {
    await this.nativeStorageProvider.inicializarStorage("items", []);
    this.itemsStorage = await this.nativeStorageProvider.getDataNativeStorage(
      "items"
    );
  }

  async onSubmit() {
    this.itemsStorage = await this.nativeStorageProvider.getDataNativeStorage(
      "items"
    );

    if (this.itemsStorage == undefined || this.itemsStorage == null) {
      this.itemsStorage = [];
    }

    this.itemsStorage.push(this.inputForm.value.input);
    this.nativeStorageProvider.insertDataNativeStorage(
      "items",
      this.itemsStorage
    );

    this.inputForm.reset();
  }
}
