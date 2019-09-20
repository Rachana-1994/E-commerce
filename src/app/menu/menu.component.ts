import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // nextImage;
  // id;
  constructor() { }

  ngOnInit() {
    //   this.nextImage();
    // this.id = setInterval(() => {
    //   this.nextImage(); 
    // }, 5000);
  }
  // ngOnDestroy() {
  //   if (this.id) {
  //     clearInterval(this.id);
  //   }
  // }

}
