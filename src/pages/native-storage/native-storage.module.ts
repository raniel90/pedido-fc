import { NgModule } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPageModule } from 'ionic-angular';

import { NativeStorageProvider } from './../../providers/native-storage/native-storage.provider';
import { NativeStoragePage } from './native-storage';

@NgModule({
  declarations: [NativeStoragePage],
  imports: [IonicPageModule.forChild(NativeStoragePage)],
  providers: [NativeStorage, NativeStorageProvider]
})
export class NativeStoragePageModule {}
