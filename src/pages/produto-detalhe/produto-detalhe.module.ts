import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProdutoListaPageModule } from './../produto-lista/produto-lista.module';
import { ProdutoDetalhePage } from './produto-detalhe';

@NgModule({
  declarations: [ProdutoDetalhePage],
  imports: [
    IonicPageModule.forChild(ProdutoDetalhePage),
    ProdutoListaPageModule
  ]
})
export class ProdutoDetalhePageModule {}
