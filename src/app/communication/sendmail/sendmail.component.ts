import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { MatSnackBar } from '@angular/material';
import { ComposeComponent } from '../compose/compose.component';
import { FormControl, Validators } from '@angular/forms';
//import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  //styleUrls: ['./compose.component.scss']
})
export class SendmailComponent implements OnInit {
  fromFormControl = new FormControl('', [
    Validators.required
    ]);
    toFormControl = new FormControl('', [
      Validators.required
      ]);

  @ViewChild(ComposeComponent) composeData;
  data: any = {};

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    debugger
    this.data = this.composeData;
    console.log(this.composeData);
    //this.receiveMessage();
  }

  receiveMessage($event) {
    debugger
    this.data.to = $event.emails;
    //var temp = $event
  }
  /* compose()
  {
    this.router.navigate(['/communication/compose']);
  } */

}
