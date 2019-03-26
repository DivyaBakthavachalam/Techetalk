import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DataService {

 private userUrl = 'http://localhost:9091/';

 constructor(private http: HttpClient){}

 getUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.userUrl);
 }
}
