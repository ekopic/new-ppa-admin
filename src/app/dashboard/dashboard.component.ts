import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userClaims: any;
  statistics: any;
  programRegistration: any;
  @ViewChildren(DxChartComponent) allCharts: QueryList<DxChartComponent> //get all charts for rendering after data is ready
  /* @ViewChild(DxChartComponent) dxchart1: DxChartComponent;
  @ViewChild("chart2") dxchart2: DxChartComponent; */
  //users: any;
  card1;
  card2;
  card3;

  rows = [];

  chart1Data: any[] = [];
  chart1FullData: any[] = [];
  startDateChart1: Date;
  endDateChart1: Date;
  chart2Data: any[] = [];
  chart2FullData: any[] = [];
  startDateChart2: Date;
  endDateChart2: Date;

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

    /* this.chart1Data = [{
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
      }]; */

  }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });

    this.userService.getStatistics().subscribe((data: any) => {
      this.statistics = data;
    });

    this.userService.getProgramRegistration().subscribe((data: any) => {
      //debugger
      this.programRegistration = data;
      this.chart1FullData = this.programRegistration['stats'];
      this.chart2FullData = data['stats'];

      var tempPlCount = 0;
      this.chart1FullData.forEach(element => {
        tempPlCount += element.playersCount;
        element.fullplayersCount = tempPlCount; //add playersCount to previous value to get chart that increase
        //and set that in new parameter fullplayersCount
      });

      this.filterChart1Data(true);
      this.filterChart2Data(true);

      this.allCharts.forEach(function (chart) { //render again charts to fix width
        chart.instance.render();
      })
    });

    /* this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    }); */
  }

  customizeTooltip(arg: any) {
    return {
      text: arg.argumentText + " - " + arg.valueText
    };
  }

  customAggregateFunc(aggregationInfo, series) {
    debugger
    let dataObjects = aggregationInfo.data;
    let result = {}; // or [ ]
    // ...
    // Aggregate the data objects here
    // ...
    return result;
  };

  filterChart1Data(initCall = false) {
    //debugger
    if (initCall)
      this.chart1Data = this.chart1FullData;
    else if (this.startDateChart1 && this.endDateChart1)
      this.chart1Data = this.chart1FullData.filter(dat => new Date(dat.date) >= new Date(this.startDateChart1) && new Date(dat.date) <= new Date(this.endDateChart1));
    else if (this.startDateChart1)
      this.chart1Data = this.chart1FullData.filter(dat => new Date(dat.date) >= new Date(this.startDateChart1)); //filter from date
    else if (this.endDateChart1)
      this.chart1Data = this.chart1FullData.filter(dat => new Date(dat.date) <= new Date(this.endDateChart1)); //filter to date
  }

  filterChart2Data(initCall = false) {
    //debugger
    if (initCall)
      this.chart2Data = this.chart2FullData;
    else if (this.startDateChart2 && this.endDateChart2)
      this.chart2Data = this.chart2FullData.filter(dat => new Date(dat.date) >= new Date(this.startDateChart2) && new Date(dat.date) <= new Date(this.endDateChart2)); //filter from date to date
    else if (this.startDateChart2)
      this.chart2Data = this.chart2FullData.filter(dat => new Date(dat.date) >= new Date(this.startDateChart2)); //filter to date
    else if (this.endDateChart2)
      this.chart2Data = this.chart2FullData.filter(dat => new Date(dat.date) <= new Date(this.endDateChart2)); //filter to date
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/user/login']);
  }

  goToSchedule() {
    this.router.navigate(['/schedule']);
  }
  goToPayments() {
    this.router.navigate(['/payments']);
  }


}
