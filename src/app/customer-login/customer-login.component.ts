import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private router: Router,
              private menuservice: MenuService) { }

  ngOnInit() {
  }

  onLogin(){
    this.menuservice.menupage.emit();
    return this.router.navigate(['/menu']);
  }
}
