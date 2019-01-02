import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  payments: any;

  constructor(private router: Router, private userService: UserService) { 

  }

  ngOnInit() {
    this.userService.getPayments().subscribe((data: any) => {
      this.payments = data;
    });
  }

}
