import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'add-team',
  templateUrl: './addNewTeam.component.html',
  styleUrls: ['./addNewTeam.component.scss']
})
export class AddNewTeamComponent implements OnInit {

  teamNameFormControl = new FormControl('', [
    Validators.required
    ]);
    capacityFormControl = new FormControl('', [
      Validators.required
      ]);

    data: any = {};
    form: FormGroup;

    selectBoxAgeGroup = [ "2001", "2002", "2003", "2004", "2005", "K/1st", "2nd/3rd", "4th/5th" ];
    selectBoxSport = [ "Soccer", "Hoops", "Tennis", "Yoga", "Cross Sport", "Futsal", "Private", "Running", "Flag Football" ];
    selectBoxProgram = [ "Premier", "Development", "Summer League", "Private", "Winter Futsal", "Tots", "School Enrichment", "ODS" ];
    selectBoxGender = [ "Boys", "Girls", "Co-Ed" ];
    clinicYesNo = ["YES", "NO"];
    seasons = [
      { id: 1, name: 'Spring 2017' },
      { id: 2, name: 'Winter 2018/19' },
      { id: 3, name: 'Spring 2019' },
      { id: 4, name: 'Summer 2019' }
    ];

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    // Create a new array with a form control for each order
    const controls = this.seasons.map(c => new FormControl(false));
    //controls[0].setValue(true); // Set the first checkbox to true (checked)

    this.form = this.formBuilder.group({
      seasons: new FormArray(controls)
    });
  }

  ngOnInit() {
  }

}
