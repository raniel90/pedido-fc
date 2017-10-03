import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProdutoProvider {
  private URL_ROOT = "https://jsonplaceholder.typicode.com";

  constructor(public http: Http) {}

  get(url) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(this.URL_ROOT + url)
        .map(responseData => responseData.json())
        .subscribe(
          responseData => {
            resolve(responseData);
          },
          error => {
            reject(error);
            console.debug("ERROR", error);
          }
        );
    });
  }
}
