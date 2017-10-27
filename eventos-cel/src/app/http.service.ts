import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private mainUrl: string = 'http://localhost:3030/';


  constructor(public http: Http) { }

  get(endpoint) {
    return this.http.get(`${this.mainUrl}${endpoint}`)
             .map(res => {
                return res.json();
             });
  }

  getBy(endpoint: string, param: any) {
    return this.http.get(`${this.mainUrl}${endpoint}/${param}`)
      .map(res => {
        return res.json();
      });
  }
}
