import { Injectable } from '@angular/core';
import { Product } from "../Product";
import { data } from "../MockData";


@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
    console.log(1);
     return this.products;
  }
  removeProducts(id){
    console.log("service")
    return this.products = this.products.filter(product => product.id != id)
  }
}