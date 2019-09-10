import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcomWebsite';
  clicked=false;
  constructor(private menuservice: MenuService){
    this.menuservice.menupage.subscribe(
      () => this.clicked = true
    );
  }
}
