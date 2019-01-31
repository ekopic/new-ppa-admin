import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  //styleUrls: ['./compose.component.scss']
})
export class SendmailComponent implements OnInit {
  data: any = {};

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    /* this.userService.getMessageGroups().subscribe((data: any) => {
      this.selectBoxGroups = data;
    });

    this.userService.getMessageGroupIDEmails("",[]).subscribe((data: any) => {
      this.groupIdEmails = data;
    }) */
  }

  /* compose()
  {
    this.router.navigate(['/communication/compose']);
  } */

}
