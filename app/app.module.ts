import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';


import {appComponent} from './app.component';
import {ProductComponent} from './product/product.component';

import { ProductService } from './product/product-service';





@NgModule({
 imports:[BrowserModule,FormsModule,HttpModule],
 declarations:[appComponent,ProductComponent],
 bootstrap:[appComponent],
 providers: [ProductService],
})

export class AppModule{}