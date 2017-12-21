import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { StorageService } from './../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Object = {
    'email': '',
    'password': ''
  };

  constructor(
    private http: HttpService,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  login() {
    this.http.post('auth/login', this.user)
            .subscribe(res => { this.storage.set('token', res.token); });
  }
}
