import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  productsUrl = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

  constructor(private http: HttpClient) {}
  
  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

}
