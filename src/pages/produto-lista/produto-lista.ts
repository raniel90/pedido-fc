import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

import { NetworkProvider } from './../../providers/network/network.provider';
import { ProdutoProvider } from './../../providers/produto/produto';

@IonicPage()
@Component({
  selector: "page-produto-lista",
  templateUrl: "produto-lista.html"
})
export class ProdutoListaPage {
  produtos = [];
  comments = [];
  exibeBarcodeScanner: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtoProvider: ProdutoProvider,
    private barcodeScanner: BarcodeScanner,
    private networkProvider: NetworkProvider,
    public events: Events,
    private socialSharing: SocialSharing
  ) {}

  ionViewDidEnter() {
    this.events.publish("activePage", "ProdutoListaPage");
  }

  async ionViewDidLoad() {
    try {
      //TO DO - IONIC LOADING INIT

      if (this.networkProvider.checkConnection()) {
        this.networkProvider.getCurrentSSID();
        this.comments = await this.produtoProvider.get("/comments");

        //TODO - IONIC LOADING FINISH
      } else {
        alert("Sem conexão com a internet");
        //TODO - IONIC LOADING FINISH
        //TO DO - SHOW DIALOG
      }
    } catch (err) {
      //TODO - IONIC LOADING FINISH
      //TO DO - SHOW DIALOG WITH API ERROR
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

  compartilhar(comment) {
    this.socialSharing.share(comment.name);
  }
}
