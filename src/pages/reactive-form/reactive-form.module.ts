import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormPage } from './reactive-form';

@NgModule({
  declarations: [
    ReactiveFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactiveFormPage),
  ],
})
export class ReactiveFormPageModule {}
