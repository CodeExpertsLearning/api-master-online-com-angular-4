import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventos';
  private pokemon: {} = {};

  constructor(public http: HttpService) {}

  ngOnInit() {
    this.http.get('pokemon/1/')
              .subscribe(res => this.pokemon = res);
  }

  hello() {
    alert('App Component');
  }
}
