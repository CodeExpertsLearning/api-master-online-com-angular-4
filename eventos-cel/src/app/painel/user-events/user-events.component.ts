import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  private events: Array<{}>;

  constructor(
    private httpService: HttpService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let token = this.storage.get('token');

    this.httpService.get('users/events', token).subscribe(data => {
        this.events = data;
    });
  }

}
