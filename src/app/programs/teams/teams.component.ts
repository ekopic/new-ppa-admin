import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
/* import Quill from 'quill';*/
import 'quill-emoji/dist/quill-emoji.js';
import 'quill-emoji/dist/quill-emoji.css'; 

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: any;
  seasons: any;
  selectedSeason: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getTeams().subscribe((data: any) => {
      this.teams = data;
    });

    this.userService.getStatistics().subscribe((data: any) => {
      this.seasons = data;
    });
  }

  addNewTeam()
  {
    this.router.navigate(['/programs/newteam']);
  }

  seasonChange(){
    //debugger
    //this.teams = this.teams.filter(a => a.sport == "Soccer");
  }

  /* addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      console.log('KEYBINDING B', range, context);
    });

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      console.log('KEYBINDING SHIFT + B', range, context);
    });
  } */

}
