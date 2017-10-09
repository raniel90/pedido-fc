import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private nativeStorage: NativeStorage,
    public formBuilder: FormBuilder
  ) {
    this.inputForm = formBuilder.group({
      input: ["", [Validators.required]]
    });
  }

  async ionViewDidLoad() {
    await this.inicializarStorage();
    this.itemsStorage = await this.getItems();
  }

  async onSubmit() {
    this.itemsStorage = await this.getItems();

    if (this.itemsStorage == undefined || this.itemsStorage == null) {
      this.itemsStorage = [];
    }

    this.itemsStorage.push(this.inputForm.value.input);
    this.inserirItem(this.itemsStorage);

    this.inputForm.reset();
  }

  async inicializarStorage() {
    try {
      this.nativeStorage.getItem("items");
    } catch (err) {
      this.inserirItem([]);
    }
  }

  inserirItem(value) {
    this.nativeStorage
      .setItem("items", JSON.stringify(value))
      .then(
        () => console.log("Stored item!"),
        error => console.error("Error storing item", error)
      );
  }

  async getItems() {
    try {
      let data = await this.nativeStorage.getItem("items");
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }
}
