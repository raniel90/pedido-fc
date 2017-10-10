import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrmStoragePage } from './orm-storage';

@NgModule({
  declarations: [
    OrmStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(OrmStoragePage),
  ],
})
export class OrmStoragePageModule {}
