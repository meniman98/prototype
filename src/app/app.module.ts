import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
// independently added imports
import {ReactiveFormsModule} from "@angular/forms";
import {DalleFormComponent} from './components/dalle-form/dalle-form.component';
import {FormsModule} from '@angular/forms';
import {Routes} from "@angular/router";
import {ProductsComponent} from './components/products/products.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {DalleService} from "./services/dalle.service";

const routes: Routes = [
  {path: "generate", component: DalleFormComponent},
  {path: "products", component: ProductsComponent},
  {path: "", redirectTo: "/generate", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    DalleFormComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
