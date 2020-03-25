import { Injectable } from '@angular/core';
import { Product } from "../Product";
import { data } from "../MockData";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class ProductService {
  products = data;
  api = "https://5e7b1b0a0e04630016332b49.mockapi.io"
  constructor(
    private http : HttpClient
  ) { }

  getProducts(){
    return this.http.get<Product[]>(`${this.api}/product`);
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProducts(id){
    console.log("service")
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }
}