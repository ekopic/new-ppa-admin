import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://159.89.230.146';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    debugger
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/User/Register', body, { headers: reqHeader });
  }

  userAuthentication(userName, password) {
    debugger
    var data = {
      username: userName,
      password: password,
      type: "admin"
    }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/users/login', data, { headers: reqHeader });
  }


  getUserClaims() {
    return this.http.get(this.rootUrl + '/users');
  }

  getUsers() {
    return this.http.get(this.rootUrl + '/users/all');
  }

  getSchedule() {
    return this.http.get(this.rootUrl + '/schedule/full');
  }

  getPayments() {
    return this.http.get(this.rootUrl + '/payments/full');
  }

  getStatistics() {
    return this.http.get(this.rootUrl + '/statistics/seasons');
  }

  getProgramRegistration() {
    return this.http.get(this.rootUrl + '/statistics/programRegistrationsPerSeason');
  }

}