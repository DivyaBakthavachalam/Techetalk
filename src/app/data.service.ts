import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {
  private contents = new BehaviorSubject<any>(['50 Must-have plugins for extending Twitter Bootstrap', 'Making a Super Simple Registration System With PHP and MySQL','Create a slide-out footer with this neat z-index trick','How to Make a Digital Clock with jQuery and CSS3']);
  goal = this.contents.asObservable();

  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8090';
    // Uses http.get() to load data from a single API endpoint
    public getUsers() {
      return this.http.get<User[]>(this.userUrl);
    }
  

  changeGoal(goal) {
    this.contents.next(goal)
  }
}
