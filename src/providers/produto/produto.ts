import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environments } from './../../environments/environments';

@Injectable()
export class ProdutoProvider {
  constructor(public http: Http) {}

  get(url) {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environments.URL_ROOT + url)
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
