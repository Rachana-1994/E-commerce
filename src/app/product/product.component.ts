import { Component, OnInit } from '@angular/core';
import { Prdt } from '../prdt.enum';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Prdt[];
  constructor(private productService: ProductService) {
    
   }

  ngOnInit() {
    this.products = this.productService.findAll()
  }

}

