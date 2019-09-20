import { Component, OnInit } from '@angular/core';

import { CUSTOMERS } from '../mock-customer';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  customer = CUSTOMERS;
  constructor() { }

  ngOnInit() {
  }

}
