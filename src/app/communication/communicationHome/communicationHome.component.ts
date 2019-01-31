import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'communicationHome',
  templateUrl: './communicationHome.component.html',
  styleUrls: ['./communicationHome.component.scss']
})
export class CommunicationHomeComponent implements OnInit {
  communications: any;

  constructor(private router: Router, private userService: UserService) { 

  }

  ngOnInit() {
    this.userService.getMasterCommunications().subscribe((data: any) => {
      this.communications = data;
    });
  }

  compose()
  {
    this.router.navigate(['/communication/compose']);
  }

}
