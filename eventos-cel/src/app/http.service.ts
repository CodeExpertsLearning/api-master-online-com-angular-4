import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private mainUrl: string = 'https://pokeapi.co/api/v2/';


  constructor(public http: Http) { }

  get(endpoint) {
    return this.http.get(this.mainUrl + endpoint)
             .map(res => {
                return res.json();
             });
  }

}
