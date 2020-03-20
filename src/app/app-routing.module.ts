import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
  {path: 'add-product', component : AddProductComponent},
  {path: 'about',component:AboutComponent},
  {path: 'home',component:HomeComponent},
  {path: 'manager',component:ProductManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
