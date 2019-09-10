import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MenuService{
  public  menupage = new EventEmitter();
}