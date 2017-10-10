import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DirectivesModule } from './../../directives/directives.module';
import { ImageHeaderPage } from './image-header';

@NgModule({
  declarations: [ImageHeaderPage],
  imports: [IonicPageModule.forChild(ImageHeaderPage), DirectivesModule]
})
export class ImageHeaderPageModule {}
