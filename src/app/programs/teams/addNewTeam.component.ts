import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-team',
  templateUrl: './addNewTeam.component.html',
  styleUrls: ['./addNewTeam.component.scss']
})
export class AddNewTeamComponent implements OnInit {

  teamNameFormControl = new FormControl('', [
    Validators.required
    ]);

    selectBoxAgeGroup = [ "Item 1", "Item 2", "Item 3" ];
    clinicYesNo = ["YES", "NO"];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
