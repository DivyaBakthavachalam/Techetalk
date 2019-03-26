import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss']
})
export class HomeComponent implements OnInit {
  public users = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
this._data.getUsers().subscribe(data => this.users = data);
  }

 
}
