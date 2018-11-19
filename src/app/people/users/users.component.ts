import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //debugger
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      //console.log(this.users);
    });
  }

}
