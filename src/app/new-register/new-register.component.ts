import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';

import { CUSTOMERS } from '../mock-customer'

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  customer = CUSTOMERS;
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onRegister(){
    window.alert("New User Registered Successfuly");
    this._location.back();
  }
}
