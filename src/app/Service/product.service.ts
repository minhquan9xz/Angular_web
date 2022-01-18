import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient) { }
  public getProduct(){
    return this.httpClient.get('http://localhost:3000/product');
  }
  public getCategory(){
    return this.httpClient.get('http://localhost:3000/categories')
  }
  public getBrand(){
    return this.httpClient.get('http://localhost:3000/brand')
  }
}
