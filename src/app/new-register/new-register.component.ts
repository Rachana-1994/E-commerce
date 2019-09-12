import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onRegister(customerForm: NgForm):void{
    console.log(customerForm);
    window.alert("New User Registered Successfuly");
    this._location.back();
  }
}
