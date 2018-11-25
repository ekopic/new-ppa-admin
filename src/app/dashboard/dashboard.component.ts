import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userClaims: any;
  users: any;
  card1;
  card2;
  card3;

  rows = [];

  chart1Data: any[] = [];

  // project table
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/projects.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

  constructor(private router: Router, private userService: UserService) { 
    this.fetch((data) => { this.rows = data; });

    this.chart1Data = [{
      day: "Monday",
      oranges: 3
      }, {
          day: "Tuesday",
          oranges: 2
      }, {
          day: "Wednesday",
          oranges: 3
      }, {
          day: "Thursday",
          oranges: 4
      }, {
          day: "Friday",
          oranges: 6
      }, {
          day: "Saturday",
          oranges: 11
      }, {
          day: "Sunday",
          oranges: 4
      }];

  }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });

    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/user/login']);
  }

  goToSchedule()
  {
    this.router.navigate(['/schedule']);
  }
  goToPayments()
  {
    this.router.navigate(['/payments']);
  }


}
