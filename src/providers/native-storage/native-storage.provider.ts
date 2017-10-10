import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class NativeStorageProvider {
  constructor(private nativeStorage: NativeStorage) {}

  async inicializarStorage(key, value) {
    try {
      this.getDataNativeStorage(key);
    } catch (err) {
      this.insertDataNativeStorage(key, value);
    }
  }

  insertDataNativeStorage(key, value) {
    this.nativeStorage
      .setItem(key, JSON.stringify(value))
      .then(
        () => console.log("Stored item!"),
        error => console.error("Error storing item", error)
      );
  }

  async getDataNativeStorage(key) {
    try {
      let data = await this.nativeStorage.getItem(key);
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }
}
