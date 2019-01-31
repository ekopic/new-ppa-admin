import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { MatSnackBar } from '@angular/material';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  //styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  //groups: any;
  groupIdEmails: any;
  selectBoxGroups: any;
  data: any = {};
  selectedSource: any;
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    this.userService.getMessageGroups().subscribe((data: any) => {
      this.selectBoxGroups = data;
    });

    this.userService.getMessageGroupIDEmails("",[]).subscribe((data: any) => {
      this.groupIdEmails = data;
    })
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
      debugger
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

  sendmessage()
  {
    this.router.navigate(['/communication/sendmessage']);
  }

}
