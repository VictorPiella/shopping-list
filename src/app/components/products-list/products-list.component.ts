import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData () {
    this.productsService.getAllProducts().subscribe( result => console.log(result))
  }

}
