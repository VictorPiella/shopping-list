import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:any;
  productsView:any;
  productsSearch:any;
  productsFav: any;
  filterBy = 'title'; 
  viewport = 4; 
  showMore = true;
  modalFavs = false;

  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsData();
    this.productsFav = [];
  }

  getProductsData () {
    this.productsService.getAllProducts().subscribe( data => { 
      this.products = data;
      this.productsView = this.products.slice(0, 4);
    })
  };

  search(query: string) {
    if(this.filterBy === 'title'){
      this.productsSearch = this.products.filter((f : any) => f.title.toLowerCase().includes(query));
    }
    else if(this.filterBy === 'price'){
      this.productsSearch = this.products.filter((f: any) => f.price.toLowerCase().includes(query));
    }
    else if(this.filterBy === 'description'){
      this.productsSearch = this.products.filter((f: any) => f.description.toLowerCase().includes(query));
    }
    else if(this.filterBy === 'email'){
      this.productsSearch = this.products.filter((f: any) => f.email.toLowerCase().includes(query));
    }
    this.productsView = this.productsSearch.slice(0, 4);
    this.viewport = 4;
    this.showMore = true;
  }

  seeMore(){
    this.viewport +=4;
    if(this.productsSearch){
      this.productsView = this.productsSearch.slice(0, this.viewport);
      if(this.productsView.length >= this.productsSearch.length){
        this.showMore = false  
      }
    }else {
      this.productsView = this.products.slice(0, this.viewport);
      if(this.productsView.length >= this.products.length){
        this.showMore = false  
      }
    }

  }
  changeFilter(filter: string){
    this.filterBy = filter;
  }
  addToFav(product: Object) {    
    if(this.isFav(product)){
      const index: number = this.productsFav.indexOf(product);
      this.productsFav.splice(index, 1);

    }else{
      this.productsFav.push(product as any);
    }
  }
  
  isFav(product: Object) {
    return this.productsFav.includes(product);
    
  }
  seeFavs(){
    this.modalFavs = !this.modalFavs;
  }
  onSubmit() {
    const query = this.searchForm.value.searchInput.toLowerCase();
    this.search(query);
  }
}
  


//todo localstorage
// after reset search or reload page check favs to set the fav icon to active