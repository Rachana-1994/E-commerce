import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onRegister(){
    window.alert("New User Registered Successfuly");
    this._location.back();
  }
}
