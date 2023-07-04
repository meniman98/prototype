import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DalleFormComponent} from "./components/dalle-form/dalle-form.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
