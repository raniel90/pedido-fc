import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SqliteStoragePage } from './sqlite-storage';

@NgModule({
  declarations: [SqliteStoragePage],
  imports: [IonicPageModule.forChild(SqliteStoragePage)]
})
export class SqliteStoragePageModule {}
