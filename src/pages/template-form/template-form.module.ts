import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateFormPage } from './template-form';

@NgModule({
  declarations: [
    TemplateFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateFormPage),
  ],
})
export class TemplateFormPageModule {}
