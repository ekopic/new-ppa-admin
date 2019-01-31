import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response, RequestOptions } from "@angular/http";
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

  getTeams() {
    return this.http.get(this.rootUrl + '/teams');
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

  getMasterCommunications() {
    let body = { page: 1, pageItems: 20 };
    //let token = 'Bearer ' + this.loginSvc.GetToken();
    //let headers = new Headers({ 'Content-Type': 'application/json'}); //'Authorization': token
    //let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.rootUrl + '/admin/masterNotifications', body);
  }

  getMessageGroups() {
    return this.http.get(this.rootUrl + '/admin/messageGroups');
  }

  getMessageGroupIDEmails(param1, param2) {
    let body = { messageGroup: "camps", selectedItems: [95, 96] };

    return this.http.post(this.rootUrl + '/admin/messageGroupIdsEmails ', body);
  }

}