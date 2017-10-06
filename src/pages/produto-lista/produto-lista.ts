import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProdutoProvider } from './../../providers/produto/produto';

@IonicPage()
@Component({
  selector: "page-produto-lista",
  templateUrl: "produto-lista.html"
})
export class ProdutoListaPage {
  produtos = [];
  comments = [];
  exibeBarcodeScanner: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtoProvider: ProdutoProvider,
    private barcodeScanner: BarcodeScanner
  ) { }

  ionViewCanEnter() {
    console.log("entrou ionViewCanEnter");
  }

  async ionViewDidLoad() {

    console.log("entrou ionViewDidLoad");
    try {
      this.produtos = await this.produtoProvider.get("/posts");

      this.comments = await this.produtoProvider.get("/comments");
      console.log(this.comments);
    } catch (err) {
      //TO DO - error handling
    }
  }

  detalharProduto(comment) {
    this.navCtrl.push("ProdutoDetalhePage");
  }

  openBarcode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        alert(JSON.stringify(barcodeData));
      },
      err => {
        alert(err);
      }
    );
  }
}
