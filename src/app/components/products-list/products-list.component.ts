import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:any;
  productsView:any;
  productsSearch:any;
  productsFav:any;
  filterBy = 'title'; 
  viewport = 4; 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsData();
    console.log(this.productsSearch)
  }

  getProductsData () {
    this.productsService.getAllProducts().subscribe( data => { 
      this.products = data;
      this.productsView = this.products.slice(0, 4);
    })
  };

  search(query: string) {
    if(this.filterBy === 'title'){
      this.productsSearch = this.products.filter((f: any) => f.title.includes(query));
    }
    else if(this.filterBy === 'price'){
      this.productsSearch = this.products.filter((f: any) => f.price.includes(query));
    }
    else if(this.filterBy === 'description'){
      this.productsSearch = this.products.filter((f: any) => f.description.includes(query));
    }
    else if(this.filterBy === 'email'){
      this.productsSearch = this.products.filter((f: any) => f.email.includes(query));
    }
    this.productsView = this.productsSearch.slice(0, 4);
    this.viewport = 4;
  }

  seeMore(){
    this.viewport +=4;
    if(this.productsSearch){
      this.productsView = this.productsSearch.slice(0, this.viewport);
    }else {
      this.productsView = this.products.slice(0, this.viewport);
    }

  }
  changeFilter(filter: string){
    this.filterBy = filter;
  }
  addToFav(product: any) {
    this.productsFav.push(product);
  }

}
  


//todo localstorage
// after reset search or reload page check favs to set the fav icon to active