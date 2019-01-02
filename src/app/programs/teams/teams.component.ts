import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewTeam()
  {
    this.router.navigate(['/programs/newteam']);
  }

}
