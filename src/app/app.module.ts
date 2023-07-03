import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DalleFormComponent } from './components/dalle-form/dalle-form.component';
import { FormsModule } from '@angular/forms';
import {Routes} from "@angular/router";
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: "generate", component: DalleFormComponent},
  {path: "products", component: ProductsComponent},
  {path: "", redirectTo: "/generate", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    DalleFormComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
