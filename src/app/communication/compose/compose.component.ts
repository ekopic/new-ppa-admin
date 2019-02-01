import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { MatSnackBar } from '@angular/material';
import { DxDataGridComponent } from 'devextreme-angular';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  //styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  //temporary ------------------------
  fromFormControl = new FormControl('', [
    Validators.required
    ]);
    toFormControl = new FormControl('', [
      Validators.required
      ]);
      //-------------------------------------

  //groups: any;
  groupIdEmails: any;
  selectBoxGroups: any;
  data: any = {};
  selectedSource: any;
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() messageEvent = new EventEmitter<Object>();

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    this.userService.getMessageGroups().subscribe((data: any) => {
      this.selectBoxGroups = data;
    });
  }

  groupChanged(e){
    //debugger
    if(this.data.selectedGroup == "users")
    {
      this.userService.getUsers().subscribe((data: any) => {
        this.selectedSource = data;
      });
    }
    else if(this.data.selectedGroup == "teams")
    {
      this.userService.getTeams().subscribe((data: any) => {
        this.selectedSource = data;
      });
    }
    else
      this.selectedSource = {};

    /* this.snackBar.open("Group changed", 'Success', {
      duration: 2000,
    }); */
  }

  setSelectedItems(gridData: any)
    {
      //debugger
        var selData = gridData.selectedRowsData;
        var temp = [];
        for (var i = 0; i < selData.length; i++) {
            /* if (i == selData.length -1)
                temp.push += selData[i].id;
            else */
                temp.push(selData[i].id);
        }
        this.data.selectedItems = temp;
    }

    getEmails()
  {
    //debugger
    this.userService.getMessageGroupIDEmails(this.data.selectedGroup, this.data.selectedItems).subscribe((data: any) => {
      //debugger
      this.groupIdEmails = data;
      this.data.to = data.emails;
      //this.messageEvent.emit(this.groupIdEmails);
      //this.router.navigate(['/communication/sendmessage']);
    });
    
  }

  sendEmail(){
    //debugger
    let dataToSend = {
      sender : "PPA Admin",
      notification : this.data.notification,
      email : this.data.typeEmail,
      pushNotification : this.data.typeNotification,
      type : this.data.selectedGroup,
      users : this.groupIdEmails.ids,
      coaches : this.groupIdEmails.coachIds
    };
    this.userService.postSendNotification(dataToSend).subscribe((data: any) => {
      this.snackBar.open("Notification sent!", 'Success', {
        duration: 4000,
      });
    });
  }

  /* sendmessage()
  {
    //debugger
    this.userService.getMessageGroupIDEmails(this.data.selectedGroup, this.data.selectedItems).subscribe((data: any) => {
      //debugger
      this.groupIdEmails = data;
      //this.messageEvent.emit(this.groupIdEmails);
      //this.router.navigate(['/communication/sendmessage']);
    });
    
  } */

}
