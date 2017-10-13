import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicGenericPage } from './ionic-generic';

@NgModule({
  declarations: [
    IonicGenericPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicGenericPage),
  ],
})
export class IonicGenericPageModule {}
