import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import {ProductService} from '../service/product.service';

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products : Product[];
  constructor(
    private productService : ProductService
  ) {}

  ngOnInit() {
   this.productService
  }
  // products;
  // selected: Product;
  // hienthi(product) {
  //     this.selected = product;
  // }
  // xoa(id){
  //   return this.products = this.products.filter(product => product.id != id);
  // }
}
