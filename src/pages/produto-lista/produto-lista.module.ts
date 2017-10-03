import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProdutoProvider } from './../../providers/produto/produto';
import { ProdutoListaPage } from './produto-lista';

@NgModule({
  declarations: [ProdutoListaPage],
  imports: [IonicPageModule.forChild(ProdutoListaPage)],
  exports: [ProdutoListaPageModule],
  providers: [ProdutoProvider]
})
export class ProdutoListaPageModule {}
