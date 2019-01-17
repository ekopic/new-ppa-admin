import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getTeams().subscribe((data: any) => {
      this.teams = data;
    });
  }

  addNewTeam()
  {
    this.router.navigate(['/programs/newteam']);
  }

}
